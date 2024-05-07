"use client";

import useCart from "@/hooks/use-cart";
import { Button } from "./button";
import Currency from "./currency";
import { Separator } from "./separator";
import { useRouter, useSearchParams } from "next/navigation";
import { checkOut } from "@/query/cart";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast";

export default function Summary() {
	const searchParams = useSearchParams();
	const { products, clearCart } = useCart();
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

	useEffect(() => {
		if (searchParams.has("success")) {
			clearCart();
			toast({
				title: "Pago procesado correctamente",
				variant: "success"
			});
		}

		if (searchParams.has("cancelled")) {
			toast({
				title: "Ha ocurrido un error al procesar el pago",
				variant: "error"
			});
		}
	}, [searchParams, clearCart]);

	const onCheckout = async () => {
		setLoading(true);
		const response = await checkOut(products.map(product => product.id));
		if (response) {
			router.replace(response.url);
			setLoading(false);
			/* 
			const location = new Location();
			location.pathname = response.url;
			window.location = location; */
		}
	};

	return (
		<div className="rounded-md py-6 lg:col-span-5 lg:mt-0">
			<h2 className="text-lg font-semibold">Resumen</h2>
			<div className="mt-6 space-y-4">
				<Separator />
				<div className="flex items-center justify-between">Total</div>
				<Currency value={totalPrice} />
			</div>
			<Button loading={loading} onClick={onCheckout} className="mt-6" variant="primary">
				Pagar
			</Button>
		</div>
	);
}

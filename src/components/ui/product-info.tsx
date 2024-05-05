"use client";

import type { Product } from "@/types";
import Currency from "./currency";
import { Separator } from "./separator";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";
import { type MouseEventHandler, useEffect, useState } from "react";
import { useToast } from "./use-toast";
import useCart from "@/hooks/use-cart";

interface ProductInfoProps {
	product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
	const [isMounted, setIsMounted] = useState(false);

	const { toast } = useToast();
	const { addProduct } = useCart();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	const onAddToCart: MouseEventHandler<HTMLButtonElement> = event => {
		event.stopPropagation();
		const added = addProduct(product);
		if (added) {
			toast({
				title: "Producto agregado al carrito",
				variant: "success"
			});
			return;
		}

		toast({
			title: "Producto ya está en el carrito",
			variant: "error"
		});
	};

	return (
		<div>
			<h1 className="text-3xl font-bold text-white/90 ">{product.name}</h1>
			<div className="mt-3 flex items-end justify-between">
				<p className="text-2xl text-white/90">
					<Currency value={product.price} />
				</p>
			</div>
			<Separator className="my-4" />
			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-white">Medida:</h3>
					<div>{product.size.name}</div>
				</div>
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-white">Color:</h3>
					<div className="h-6 w-6 rounded-full border" style={{ backgroundColor: product.color.value }} />
				</div>
			</div>
			<div className="mt-10 flex items-center gap-x-3">
				<Button onClick={onAddToCart} variant="secondary" className="group flex items-center gap-x-2">
					Añadir al carrito
					<ShoppingCart className="w-4 h-4 group-hover:text-warning" />
				</Button>
			</div>
		</div>
	);
}

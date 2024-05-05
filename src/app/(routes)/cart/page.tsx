"use client";

import CartItem from "@/components/cart-item";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

export default function Page() {
	const [isMounted, setIsMounted] = useState(false);
	const { products } = useCart();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div>
			<Container>
				<div className="px-4 py-16 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">Cart</h1>
					<div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
						<div className="lg:col-span-7">
							{products.length === 0 && <p className="text-white/80">No hay Productos</p>}
							{products.map(product => (
								<CartItem key={product.id} product={product} />
							))}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

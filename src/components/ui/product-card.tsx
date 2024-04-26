"use client";

import type { Product } from "@/types";
import Image from "next/image";
import { Button } from "./button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useEffect, useState } from "react";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<div className="bg bg-background-container rounded-md border p-3 space-y-4">
			<div className="group aspect-square rounded-md relative cursor-pointer">
				<Image
					src={product?.images[0]?.url}
					alt={product.name}
					fill
					className="aspect-square oject-cover rounded-md"
				/>
				<div className="md:opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<Button size="icon" className="bg-white rounded-full" variant="ghost">
							<Expand className="w-5 h-5 text-black" />
						</Button>
						<Button
							size="icon"
							className="group/button bg-white hover:text-warning rounded-full text-black"
							variant="ghost"
						>
							<ShoppingCart className="w-5 h-5" />
						</Button>
					</div>
				</div>
			</div>
			<div>
				<div className="flex gap-2 items-center">
					<p className="font-semibold text-lg">{product.name}</p>-
					<p className="text-sm text-white/90">{product.category.name}</p>
				</div>
				<p className="text-sm text-white/70 bg-background-container-secondary p-2 rounded-md">
					{product.description}
				</p>
			</div>
			<div>
				<Currency value={product.price} />
			</div>
		</div>
	);
}

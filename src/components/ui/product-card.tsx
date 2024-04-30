"use client";

import type { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./button";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const [isMounted, setIsMounted] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	function onClick() {
		router.push(`/product/${product.id}`);
	}

	return (
		<div className="bg bg-background-container rounded-md border p-3 space-y-4 min-w-[200px] max-w-[300px]">
			<div onClick={onClick} className="group aspect-square rounded-md relative cursor-pointer ">
				<Image
					src={product?.images[0]?.url}
					alt={product.name}
					fill
					className="aspect-square oject-cover rounded-md"
					sizes="200px"
				/>
				<div className="sm:opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<Button size="icon" className="bg-white rounded-full hover:opacity-100" variant="ghost">
							<Expand className="w-5 h-5 text-black " />
						</Button>
						<Button
							size="icon"
							className="group/button bg-white hover:text-warning hover:opacity-100 rounded-full text-black"
							variant="ghost"
						>
							<ShoppingCart className="w-5 h-5" />
						</Button>
					</div>
				</div>
			</div>
			<div>
				<div className="flex gap-2 items-center">
					<Link
						href={`/product/${product.id}`}
						className="font-semibold text-lg hover:underline hover:text-info"
					>
						{product.name}
					</Link>
					-<p className="text-sm text-white/90">{product.category.name}</p>
				</div>
				<p className="text-sm text-white/80 bg-background-container/55 p-2 rounded-md">{product.description}</p>
			</div>
			<div>
				<Currency value={product.price} />
			</div>
		</div>
	);
}

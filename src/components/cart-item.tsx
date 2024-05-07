"use client";

import type { Product } from "@/types";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Currency from "./ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
	product: Product;
	isLast: boolean;
}

export default function CartItem({ product, isLast }: CartItemProps) {
	const { removeProduct } = useCart();

	const onRemove = () => {
		removeProduct(product);
	};

	return (
		<>
			<li className="flex py-6 ">
				<div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
					<Image src={product.images[0].url} alt={product.name} fill className="object-cover object-center" />
				</div>
				<div className="relative ml-4 flex flex-1 flex-col justify-between">
					<div className="absolute z-10 right-0 top-0">
						<Button onClick={onRemove} variant="destructive" size="icon">
							<Trash className="h-4 w-4" />
						</Button>
					</div>
					<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
						<div className="flex justify-between">
							<p className="text-lg font-semibold">{product.name}</p>
						</div>
						<div className="mt-1 flex text-sm gap-x-6">
							<p className="text-white/90">{product.color.name}</p>
							<Separator orientation="vertical" />
							<p className="text-white/90">{product.size.name}</p>
						</div>
						<p>{product.description}</p>
						<Currency value={product.price} />
					</div>
				</div>
			</li>
			{!isLast && <Separator />}
		</>
	);
}

"use client";

import type { Product } from "@/types";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface CartItemProps {
	product: Product;
}

export default function CartItem({ product }: CartItemProps) {
	return (
		<>
			<li className="flex py-6">
				<div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
					<Image src={product.images[0].url} alt={product.name} fill className="object-cover object-center" />
				</div>
				<div className="relative ml-4 flex flex-1 flex-col justify-between">
					<div className="absolute z-10 right-0 top-0">
						<Button size="icon">
							<X className="w-4 h-4 tex-black" />
						</Button>
					</div>
				</div>
			</li>
			<Separator />
		</>
	);
}

"use client";

import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Button } from "@ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavbarActions() {
	const [isMounted, setIsMounted] = useState(false);
	const { products } = useCart();
	const router = useRouter();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const onClick = () => {
		router.push("/cart");
	};

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				onClick={onClick}
				className="group flex items-center bg-background-container px-2 hover:text-warning"
			>
				<ShoppingBag
					className={cn(
						"w-5 h-5 group-hover:opacity-100 ",
						products.length > 0 ? "text-warning" : "text-white"
					)}
				/>
				<span className="ml-2 text-sm font-medium text-white">{products.length}</span>
			</Button>
		</div>
	);
}

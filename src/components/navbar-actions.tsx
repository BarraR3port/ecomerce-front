"use client";

import { Button } from "@ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavbarActions() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button className="group flex items-center bg-background-container px-2 hover:text-warning">
				<ShoppingBag className="w-5 h-5 group-hover:opacity-100" />
				<span className="ml-2 text-sm font-medium text-white">0</span>
			</Button>
		</div>
	);
}

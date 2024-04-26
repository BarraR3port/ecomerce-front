"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "../types";

interface MainNavProps {
	categories: Category[];
}

export default function MainNav({ categories }: MainNavProps) {
	const pathname = usePathname();

	const routes = categories.map((route: any) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`
	}));

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			{routes.map((route: any) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-white/80",
						route.active ? "text-white/90" : "text-white/50"
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
}

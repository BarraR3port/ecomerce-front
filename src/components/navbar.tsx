import Container from "@ui/container";
import Link from "next/link";
import MainNav from "@components/main-nav";
import type { Category } from "../types";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

export default async function NavBar() {
	const categories: Category[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then(async res =>
		res.json()
	);

	return (
		<div className="border-b">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
					<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
						<p className="font-bold text-xl">TIENDA</p>
					</Link>
					<MainNav categories={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	);
}

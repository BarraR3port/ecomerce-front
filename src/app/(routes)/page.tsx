import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";
import { getBillboards } from "@/query/billboards";
import { getProducts } from "@/query/products";
import type { Billboard as BillboardType, Product } from "../../types";

export const revalidate = 0;

export default async function Home() {
	const billboard: BillboardType = await getBillboards().then(billboards => billboards[0] ?? null);
	const products: Product[] = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard billboard={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Poductos Destacados" products={products} />
				</div>
			</div>
		</Container>
	);
}

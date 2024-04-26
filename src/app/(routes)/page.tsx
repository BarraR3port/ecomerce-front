import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import type { Billboard as BillboardType, Product } from "../../types";
import { getBillboard } from "@/query/billboards";
import { getProducts } from "@/query/products";
import ProductList from "@/components/ui/product-list";

export const revalidate = 0;

export default async function Home() {
	const billboard: BillboardType = await getBillboard("2fb91c05-5fd2-494e-81e8-65486a6898fd");
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

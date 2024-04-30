import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "@/components/ui/filter";
import MobileFilter from "@/components/ui/mobile-filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { getCategory } from "@/query/category";
import { getColors } from "@/query/colors";
import { getProducts } from "@/query/products";
import { getSizes } from "@/query/sizes";

interface PageProps {
	params: {
		categoryId: string;
	};
	searchParams: {
		colorId: string;
		sizeId: string;
	};
}

export default async function page({ params, searchParams }: PageProps) {
	const { categoryId } = params;
	const { colorId, sizeId } = searchParams;

	const products = await getProducts({
		categoryId,
		colorId,
		sizeId
	});
	const sizes = await getSizes();

	const colors = await getColors();

	const category = await getCategory(categoryId);

	return (
		<div className="">
			<Container>
				<Billboard billboard={category.billboard} />
				<div className="px-4 sm:px-6 lg:px-8 pb-24">
					<div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
						<MobileFilter colors={colors} sizes={sizes} />
						<div className="hidden lg:block">
							<Filter valueKey="sizeId" name="Medidas" data={sizes} />
							<Filter valueKey="colorId" name="Colores" data={colors} />
						</div>
						<div className="mt-6 lg:col-span-4 lg:mt-0">
							{products.length === 0 && <NoResults />}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								{products.map(product => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

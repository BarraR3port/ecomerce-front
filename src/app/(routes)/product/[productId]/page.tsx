import Container from "@/components/ui/container";
import Gallery from "@/components/ui/gallery";
import ProductInfo from "@/components/ui/product-info";
import ProductList from "@/components/ui/product-list";
import { Separator } from "@/components/ui/separator";
import { getProduct, getProducts } from "@/query/products";

interface PageProps {
	params: {
		productId: string;
	};
}

export default async function Page({ params }: PageProps) {
	const { productId } = params;

	const product = await getProduct(productId, {});
	const products = await getProducts({
		categoryId: product?.category?.id
	});
	const relatedProducts = products.filter(p => p.id !== product.id);

	return (
		<div className="">
			<Container>
				<div className="px-4 py-10 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 w-full max-w-2xl sm:block ">
						<Gallery images={product.images} />
						<div className="">
							<ProductInfo product={product} />
						</div>
					</div>
					<Separator className="my-10" />
					<ProductList products={relatedProducts} title={"Productos relacionados"} />
				</div>
			</Container>
		</div>
	);
}

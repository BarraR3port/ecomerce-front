import type { Product } from "@/types";
import { api } from "./api";

interface Query {
	categoryId?: string;
	colorId?: string;
	sizeId?: string;
	isFeatured?: boolean;
}

export async function getProducts(query: Query): Promise<Product[]> {
	return api
		.get("/products", {
			params: query
		})
		.then(res => res.data);
}

export async function getProduct(productId: string, query: Query): Promise<Product> {
	return api
		.get(`/products/${productId}`, {
			params: query
		})
		.then(res => res.data);
}

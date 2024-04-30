import type { Billboard, Category } from "../types";
import { api } from "./api";

export async function getCategory(id: string): Promise<Category> {
	return api.get(`/categories/${id}`).then(res => res.data);
}

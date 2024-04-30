import type { Size } from "../types";
import { api } from "./api";

export async function getSizes(): Promise<Size[]> {
	return api.get("/sizes").then(res => res.data);
}

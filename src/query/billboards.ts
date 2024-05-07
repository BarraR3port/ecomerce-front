import type { Billboard } from "../types";
import { api } from "./api";

export async function getBillboard(id: string): Promise<Billboard> {
	return api.get(`/billboards/${id}`).then(res => res.data);
}

export async function getBillboards(): Promise<Billboard[]> {
	return api.get("/billboards").then(res => res.data);
}

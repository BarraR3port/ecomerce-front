import type { Color } from "../types";
import { api } from "./api";

export async function getColors(): Promise<Color[]> {
	return api.get("/colors").then(res => res.data);
}

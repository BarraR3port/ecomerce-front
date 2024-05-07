import { api } from "./api";

interface CheckoutResponse {
	url: string;
}

export async function checkOut(productIds: string[]): Promise<CheckoutResponse> {
	return api
		.post("/checkout", {
			productIds
		})
		.then(res => res.data);
}

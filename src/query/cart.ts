import { api } from "./api";

interface CheckoutResponse {
	url: string;
}

export async function checkOut(productIds: string[]): Promise<CheckoutResponse> {
	return api
		.post("/checkout", {
			productIds
		})
		.catch(err => {
			console.error("ERROR CTMMMMMMMMM", err);
			return err.response.data;
		})
		.then(res => res.data);
}

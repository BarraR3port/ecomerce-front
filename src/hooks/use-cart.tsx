import { create } from "zustand";
import { persist, createJSONStorage, type StateStorage } from "zustand/middleware";
import secureLocalStorage from "react-secure-storage";

import type { Product } from "@/types";

const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return (secureLocalStorage.getItem(name) as string) || null;
	},
	setItem: async (name: string, value: string): Promise<void> => {
		secureLocalStorage.setItem(name, value);
	},
	removeItem: async (name: string): Promise<void> => {
		secureLocalStorage.removeItem(name);
	}
};

interface CartStore {
	products: Product[];
	addProduct: (product: Product) => boolean;
	removeProduct: (product: Product) => void;
	clearCart: () => void;
}

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			products: [],
			addProduct: product => {
				const { products } = get();
				const exists = products.find(p => p.id === product.id);
				if (exists) {
					return false;
				}
				set({ products: [...products, product] });
				return true;
			},
			removeProduct: product => set(state => ({ products: state.products.filter(p => p.id !== product.id) })),
			clearCart: () => set({ products: [] })
		}),
		{
			name: "cart-store-storage",
			storage: createJSONStorage(() => storage)
		}
	)
);

export default useCart;

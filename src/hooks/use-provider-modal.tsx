import { create } from "zustand";

import type { Product } from "@/types";

interface PreviewModalStore {
	isOpen: boolean;
	product?: Product;
	openModal: (product: Product) => void;
	onOpenChange: (val: boolean) => void;
}

const usePreviewModal = create<PreviewModalStore>((set, get) => ({
	isOpen: false,
	product: undefined,
	openModal: product => set({ isOpen: true, product }),
	onOpenChange: (val: boolean) => {
		const { product } = get();
		set({ isOpen: val, product: val ? product : undefined });
	}
}));

export default usePreviewModal;

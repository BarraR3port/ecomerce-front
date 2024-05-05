"use client";

import usePreviewModal from "@/hooks/use-provider-modal";
import Modal from "./modal";
import Gallery from "./gallery";
import ProductInfo from "./product-info";

export default function PreviewModal() {
	const { isOpen, onOpenChange } = usePreviewModal();

	const product = usePreviewModal(state => state.product);

	if (!product) return null;

	return (
		<Modal open={isOpen} onOpenChange={onOpenChange}>
			<div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
				<div className="sm:col-span-4 lg:col-sopan-5">
					<Gallery images={product.images} />
				</div>
				<div className="sm:col-span-8 lg:col-span-7">
					<ProductInfo product={product} />
				</div>
			</div>
		</Modal>
	);
}

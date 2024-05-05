"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

interface ModalProps {
	open: boolean;
	onOpenChange: (val: boolean) => void;
	children: React.ReactNode;
}

export default function Modal({ open, onOpenChange, children }: ModalProps) {
	return (
		<div className={`fixed inset-0 z-50 bg-black/80 ${open ? "animate-in" : "animate-out"} fade-out-0 fade-in-0`}>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent>
					<DialogHeader>
						<DialogDescription>{children}</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}

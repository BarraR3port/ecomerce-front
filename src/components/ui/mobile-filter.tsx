"use client";

import type { Color, Size } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import Filter from "./filter";

interface MobileFilterProps {
	sizes: Size[];
	colors: Color[];
}

export default function MobileFilter({ sizes, colors }: MobileFilterProps) {
	const [open, setOpen] = useState(false);

	function onOpenChange(value: boolean) {
		setOpen(value);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				<Button variant="secondary" className="flex items-center gap-x-2 lg:hidden">
					Filtros
					<Plus className="w-4 h-4" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Filtros</DialogTitle>
					<DialogDescription>
						<Filter valueKey="sizeId" name="Medidas" data={sizes} />
						<Filter valueKey="colorId" name="Colores" data={colors} />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

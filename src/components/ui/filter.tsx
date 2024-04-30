"use client";

import type { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qr from "query-string";
import { Separator } from "./separator";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface FilterProps {
	valueKey: string;
	name: string;
	data: (Size | Color)[];
}

export default function Filter({ valueKey, name, data }: FilterProps) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedValue = searchParams.get(valueKey);

	function onClick(id: string) {
		const current = qr.parse(searchParams.toString());

		const query = {
			...current,
			[valueKey]: id
		};

		if (current[valueKey] === id) {
			query[valueKey] = null;
		}

		const url = qr.stringifyUrl(
			{ url: window.location.href, query },
			{
				skipNull: true
			}
		);

		router.push(url, {
			scroll: false
		});
	}

	return (
		<div className="mb-8">
			<h3 className="text-lg font-semibold">{name}</h3>
			<Separator className="my-4" />
			<div className="flex flex-wrap gap-2">
				{data.map(filter => (
					<div key={filter.id} className="flex items-center">
						<Button
							onClick={() => onClick(filter.id)}
							variant={selectedValue === filter.id ? "default" : "secondary"}
						>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}

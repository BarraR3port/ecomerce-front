"use client";
import { priceFormatter } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
	value?: number | string;
}
export default function Currency({ value }: CurrencyProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return <div className="font-semibold">{priceFormatter.format(Number(value))}</div>;
}

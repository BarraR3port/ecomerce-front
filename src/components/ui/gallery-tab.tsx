"use client";

import Image from "next/image";

import type { Image as ImageType } from "../../types";
import { TabsTrigger } from "./tabs";

interface GalleryTabProps {
	image: ImageType;
}

export default function GalleryTab({ image }: GalleryTabProps) {
	return (
		<TabsTrigger
			value={image.id}
			className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md min-w-[50px]"
		>
			<span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
				<Image src={image.url} fill alt="image" className="object-cover object-center" />
			</span>
		</TabsTrigger>
	);
}

"use client";
import Image from "next/image";
import type { Image as ImageType } from "../../types";
import GalleryTab from "./gallery-tab";
import { Tabs, TabsContent, TabsList } from "./tabs";

interface GalleryProps {
	images: ImageType[];
}

export default function Gallery({ images }: GalleryProps) {
	return (
		<Tabs defaultValue={images[0]?.id} className="flex flex-col-reverse">
			<div className="w-full max-w-2xl sm:block lg:max-w-none space-y-4">
				{images.map(image => (
					<TabsContent key={image.id} value={image.id} className="">
						<div className="aspect-square relative h-full w-full sm:rounded-md overflow-hidden">
							<Image fill src={image.url} alt="Image" className="object-cover object-center" />
						</div>
					</TabsContent>
				))}
				<TabsList>
					{images.map(image => (
						<GalleryTab key={image.id} image={image} />
					))}
				</TabsList>
			</div>
		</Tabs>
	);
}

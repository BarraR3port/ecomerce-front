import { cn } from "@/lib/utils";
import type { Billboard as BillboardType } from "../types";
import Image from "next/image";

interface BillboardProps {
	billboard: BillboardType;
}

export default function Billboard({ billboard }: BillboardProps) {
	return (
		<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
			<div className="relative rounded-xl aspect-video lg:aspect-video-lg h-96 lg:h-96 w-full sm:w-full lg:w-full">
				<Image
					src={billboard?.imageUrl}
					alt={billboard?.label || "Billboard image"}
					layout="fill"
					className={cn("object-cover rounded-xl", billboard.hiddenLabel && "object-contain")}
				/>
				{!billboard.hiddenLabel && (
					<div className="absolute inset-0 flex flex-col justify-center items-center gap-y-8">
						<div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-center">
							{billboard?.label}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

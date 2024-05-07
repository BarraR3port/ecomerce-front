import type { Billboard as BillboardType } from "../types";

interface BillboardProps {
	billboard: BillboardType;
}

export default function Billboard({ billboard }: BillboardProps) {
	return (
		<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
			<div
				className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden  "
				style={{
					backgroundImage: `url(${billboard?.imageUrl})`
				}}
			>
				<div className="h-full  w-full flex flex-col justify-center items-center gap-y-8">
					<div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-center">
						{billboard?.label}
					</div>
				</div>
			</div>
		</div>
	);
}

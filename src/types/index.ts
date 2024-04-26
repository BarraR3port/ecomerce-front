export interface Billboard {
	id: number;
	label: string;
	imageUrl: string;
}

export interface Category {
	id: number;
	name: string;
	billboard: Billboard;
}

export interface Product {
	id: string;
	category: Category;
	name: string;
	description: string;
	price: string;
	isFeatured: boolean;
	size: Size;
	color: Color;
	images: Image[];
}

export interface Size {
	id: number;
	name: string;
	value: string;
}

export interface Color {
	id: number;
	name: string;
	value: string;
}

export interface Image {
	id: number;
	url: string;
}

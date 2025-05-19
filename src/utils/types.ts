export type TInitialState = {
	id: number;
	name: string;
	colors: TColor[];
};

export type TColor = {
	id: number;
	name: string;
	images: string[];
	price: string;
	description: string;
	sizes: number[];
};

export type TSize = {
	id: number;
	label: string;
	number: number;
};

export type TCartItem = {
	image: string;
	name: string;
	color: string;
	size: string;
	price: string;
};

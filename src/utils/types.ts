export type TInitialState = {
	id: number;
	name: string;
	colors: TColor[];
};

type TColor = {
	id: number;
	name: string;
	images: string[];
	price: string;
	description: string;
	sizes: number[];
};

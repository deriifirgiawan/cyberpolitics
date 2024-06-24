export interface INavData {
	id: number;
	name: string;
	slug: string;
	type: "navigate" | "dropdown";
	subLink?: {
		id: number;
		name: string;
		slug: string;
	}[];
}

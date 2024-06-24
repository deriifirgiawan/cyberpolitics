import { TypeNavData } from "@/types";

export interface INavData {
	id: number;
	name: string;
	slug: TypeNavData;
	type: "navigate" | "dropdown";
	subLink?: {
		id: number;
		name: string;
		slug: string;
	}[];
}

import { Prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { type } from "os";
import { ProgressPlugin } from "webpack";

class ProductCharacteristic {
	name: string;
	value: string;
}

export interface ProductModel extends Base { } 
export class ProductModel extends TimeStamps {
	@Prop()
	images: string;
	@Prop()
	title: string;
	@Prop()
	price: number;
	@Prop()
	oldPrice: number;
	@Prop()
	credit: number;
	@Prop()
	calculatedRating: number;
	@Prop()
	description: string;
	@Prop()
	advantages: string;
	@Prop()
	disAdvantages: string;
	@Prop({type: () => [String]})
	categories: string[];
	@Prop({type: () =>  [String]})
	tags: string[];
	@Prop({type: () =>  [ProductCharacteristic], _id: false})
	characteristics: ProductCharacteristic[];


}

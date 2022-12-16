import { Type } from "@nestjs/common";
import { Prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";
export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps{
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	decription: string;
	@Prop()
	rating: number;
	@Prop()
	priductId: Types.ObjectId;

}

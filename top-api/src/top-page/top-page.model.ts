import { Prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum TopLevelCategiry{
	Courses,
	Services,
	Books,
	Products,
}
export class HhData {
	@Prop()
	count: number;
	@Prop()
	juniorSalary: number;
	@Prop()
	middleSalary: number;
	@Prop()
	seniorSalary: number;
	
}

export class TopPageAdvantage {
	@Prop()
	title: string;
	@Prop()
	description: string;
}

export interface TopPageModel extends Base { }
export class TopPageModel extends TimeStamps {
	@Prop({enum: TopLevelCategiry})
	firstCategory: TopLevelCategiry;
	@Prop()
	secondCategory: string;
	@Prop()
	title: string;
	@Prop()
	category: string;
	@Prop({type: ()=>[HhData]})
	hh?: HhData;
	@Prop({type: ()=>[TopPageAdvantage]})
	advantages: TopPageAdvantage[];
	@Prop()
	seoText: string;
	@Prop()
	tegsTitle: string;
	@Prop({type: ()=>[String]})
	tegs: string[];

}

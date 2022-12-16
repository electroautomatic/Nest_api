import { IsString, IsNumber, Max, Min } from "class-validator";
export class CreateReviwDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	decription: string;

	@Max(5)
	@Min(1)
	@IsNumber()
	rating: number;
	
	@IsString()
	priductId: string;
}
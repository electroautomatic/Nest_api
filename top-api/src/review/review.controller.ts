import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateReviwDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constats';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';


@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviwDto){
		return this.reviewService.create(dto);
	}
	@Delete(':id')
	async delete(@Param('id') id: string){
		const deleteDoc = await this.reviewService.delete(id);
		if (!deleteDoc) {
			throw new HttpException(REVIEW_NOT_FOUND,HttpStatus.NOT_FOUND);
		}


	}

	@Get('byProduct/:product')
	async getByProduct(@Param('productId') productId: string){
		return this.reviewService.findByProductId(productId);
	}
	
}

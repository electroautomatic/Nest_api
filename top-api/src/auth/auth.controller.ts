import { BadRequestException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { isVariableWidth } from 'class-validator';
import { ALREADY_REGISTRED_ERROR } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService){}

	@UsePipes(new ValidationPipe())
	@Post('registr')
	async registr(@Body() dto: AuthDto){
		const oldUser = await this.authService.findUser(dto.login);
		if (oldUser) {
			throw new BadRequestException(ALREADY_REGISTRED_ERROR);
		}

		return this.authService.createUser(dto);

	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto){

	}
}

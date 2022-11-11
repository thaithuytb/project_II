import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dtos/login_input.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register_input.dto';
import { MiddlewareRequestType } from '../middlewares/interfaces/middlewareRequestType';
import { RoleAdminGuard } from 'src/guards/roleAdminGuard';
import { responseSuccess } from '../responses/success';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('/login')
  async login(@Body('loginInput') loginInput: LoginDto) {
    return await this.authService.login(loginInput);
  }

  @Post('/register')
  async register(@Body('registerInput') registerInput: RegisterDto) {
    return await this.authService.register(registerInput);
  }

  @Get('/token')
  async me(@Req() req: MiddlewareRequestType) {
    return responseSuccess(req.user);
  }
}

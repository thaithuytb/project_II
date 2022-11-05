import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login_input.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register_input.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body('loginInput') loginInput: LoginDto) {
    return await this.authService.login(loginInput);
  }

  @Post('/register')
  async register(@Body('registerInput') registerInput: RegisterDto) {
    return await this.authService.register(registerInput);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth/login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() body) {
    return this.authService.validarUsuario(body.username, body.pass);
  }
}

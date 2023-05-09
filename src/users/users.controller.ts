import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userData: User) {
    const user = await this.userService.create(userData);
    return {
      user,
      message: 'Administrador cadastrado com sucesso',
    };
  }
}

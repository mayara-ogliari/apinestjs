import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  logger: any;
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async validarUsuario(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }
    if (user.password === password) {
      return await this.gerarToken(user);
    }
    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async validateUserById(id): Promise<any> {
    return await this.usersService.findOneById(id);
  }

  async gerarToken(payload: User) {
    return {
      authorization: this.jwtService.sign(
        { email: payload.email },
        {
          secret: 'topSecret512',
          expiresIn: '1d',
        },
      ),
    };
  }

  async validateToken(token: string): Promise<any> {
    try {
      const decodedToken = await this.jwtService.verifyAsync(token, {
        secret: 'topSecret512',
      });
      return decodedToken;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException('Token inválido');
    }
  }
}

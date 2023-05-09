import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    logger: any;
    constructor(usersService: UserService, jwtService: JwtService);
    validarUsuario(username: string, password: string): Promise<any>;
    validateUserById(id: any): Promise<any>;
    gerarToken(payload: User): Promise<{
        authorization: string;
    }>;
    validateToken(token: string): Promise<any>;
}

import { NestMiddleware } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
export declare class AuthMiddleware implements NestMiddleware {
    private authService;
    constructor(authService: AuthService);
    use(req: any, res: any, next: (err?: any) => void): Promise<void>;
}

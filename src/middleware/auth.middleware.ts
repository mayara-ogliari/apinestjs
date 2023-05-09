import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: any, res: any, next: (err?: any) => void) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res
        .status(401)
        .send({ message: 'Authorization header missing or invalid.' });
      return;
    }

    const token = authHeader.split(' ')[0];
    try {
      const decodedToken = await this.authService.validateToken(token);
      req.user = decodedToken.email;
      next();
    } catch (err) {
      res.status(401).send({ message: 'Invalid or expired token.' });
    }
  }
}

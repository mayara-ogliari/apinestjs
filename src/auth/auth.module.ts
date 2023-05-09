import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ProductModule } from '../product/product.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_jwt_secret_key_here',
      signOptions: { expiresIn: '1d' },
    }),
    ProductModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

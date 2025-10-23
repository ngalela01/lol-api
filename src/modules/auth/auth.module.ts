import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret:  'SECRET_KEY_JWT',
      signOptions: { expiresIn:'1h' },
    }),
    UserModule,
  ],
  providers: [AuthService,JwtService],
  controllers: [AuthController]
})
export class AuthModule {}

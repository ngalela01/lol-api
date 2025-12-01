import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { JwtGuard } from './jwt.guard';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService,JwtGuard],
  controllers: [AuthController],
  exports: [JwtModule,JwtGuard],
})
export class AuthModule {}

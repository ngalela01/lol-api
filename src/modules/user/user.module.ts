import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from '../auth/jwt.guard';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MikroOrmModule.forFeature([User]),
  AuthModule],
  providers: [UserService,JwtGuard],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
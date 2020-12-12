import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, PassportModule], // PassportModule gives us the built-in guard for protecting our routes with some strategies that where implemented
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

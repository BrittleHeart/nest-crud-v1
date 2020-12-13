import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtContants } from './constants';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({secret: jwtContants.secret, signOptions: {expiresIn: '1d'}})
  ], // PassportModule gives us the built-in guard for protecting our routes with some strategies that where implemented
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}

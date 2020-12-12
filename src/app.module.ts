import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cors from 'cors';
import * as helmet from 'helmet'
import * as morgan from 'morgan';
import { Connection } from 'typeorm';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, AuthModule, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors(), helmet(), morgan('dev')).forRoutes('/')
  }

  constructor(private connection: Connection) {}
}
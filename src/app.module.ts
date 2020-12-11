import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cors from 'cors';
import * as helmet from 'helmet'
import * as morgan from 'morgan';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors(), helmet(), morgan('dev')).forRoutes('/')
  }
}
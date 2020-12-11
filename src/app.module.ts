import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TestMiddleware } from './middlewares/test-middleware.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TestMiddleware, LoggerMiddleware)
      .exclude(
        {path: 'cats/:id', method: RequestMethod.GET},
      )
      .forRoutes('cats')
  }
}

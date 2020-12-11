import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: any, res: any, next: Function) {
    console.log('User has passed the middleware checker');
    next();
  }
}

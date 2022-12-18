import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Request, Response, NextFunction } from 'express';
/* 
function GlobalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is the middleware no 1 : Global');
  next();
}

function GlobalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('This is second middleware Global');
  next();
}
 */
async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  // app.use(GlobalMiddlewareOne);
  // app.use(GlobalMiddlewareTwo);
  await app.listen(3000);
}
bootstrap();

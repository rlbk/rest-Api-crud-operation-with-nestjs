import { Module, NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';

import { BookController } from './book.controller';
import { BookMiddleware } from './book.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: []
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('book');
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post
} from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get()
  findAllBooks(): string {
    return 'this api will return all books';
  }

  @Post()
  addBook(): string {
    return 'this will add a book';
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') BookId: string): string {
    return this.bookService.deleteBookService(BookId);
  }

  @Post('/add')
  AddBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}

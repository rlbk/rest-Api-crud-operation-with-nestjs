import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  ValidationPipe
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';
// import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  @Get('/:id')
  findBookbyId(@Param('id', ParseIntPipe) id: number): string {
    return `This will find book with id :${id} \n Type of id is ${typeof id}`;
  }

  //   @Post()
  //   addBook(@Body() book: BookDto): string {
  //     return 'This willl add book';
  //   }

  //using custom pipe
  // @Post('/add')
  // addBook(@Body(new BookPipe()) book: BookDto): string {
  //   return 'This willl add book';
  // }

  //using built in validation pipe
  @Post('/add')
  addBook(@Body(new ValidationPipe()) book: BookDto): string {
    return 'This willl add book';
  }
}

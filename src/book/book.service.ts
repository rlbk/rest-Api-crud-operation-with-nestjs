import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been sucessfully added.';
  }

  //update book
  updateBookService(book: Book): string {
    const index = this.books.findIndex(
      (currentBook) => currentBook.id === book.id
    );
    this.books[index] = book;
    return 'Book has been sucessfully updated.';
  }

  //delete book
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((currentBook) => currentBook.id != bookId);
    return 'Book has been deleted sucessfuly.';
  }

  //find all books
  findAllBooks(): Book[] {
    return this.books;
  }
}

import BookRepository from '../repositories/book.repo';
import { BookAttributes, BookCreationAttributes } from '@/types/book';

class BookService {
  async createBook(bookData: BookCreationAttributes): Promise<BookAttributes> {
    return BookRepository.createBook(bookData);
  }

  async updateBook(id: number, bookData: Partial<BookAttributes>): Promise<BookAttributes | null> {
    return BookRepository.updateBook(id, bookData);
  }

  async deleteBook(id: number): Promise<boolean> {
    return BookRepository.deleteBook(id);
  }

  async getAllBooks(page: number, limit: number): Promise<BookAttributes[]> {
    return BookRepository.getAllBooks(page, limit);
  }

  async getTotalBooksCount(): Promise<number> {
    return BookRepository.getTotalBooksCount();
  }
}

export default new BookService();

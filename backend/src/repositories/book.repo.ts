import { BookAttributes, BookCreationAttributes } from '@/types/book';
import BookModel from '../entities/book.entity';

class BookRepository {
  async createBook(bookData: BookCreationAttributes) {
    return BookModel.create(bookData);
  }

  async updateBook(id: number, bookData: Partial<BookAttributes>) {
    const [rowsAffected, updatedBooks] = await BookModel.update(bookData, {
      where: { id },
      returning: true,
    });

    if (rowsAffected === 0) return null;

    return updatedBooks[0];
  }

  async deleteBook(id: number) {
    const deletedRows = await BookModel.destroy({ where: { id } });
    return deletedRows > 0;
  }

  async getAllBooks(page: number, limit: number) {
    const offset = (page - 1) * limit;
    return BookModel.findAll({ offset, limit });
  }

  async getTotalBooksCount() {
    return BookModel.count();
  }
}

export default new BookRepository();

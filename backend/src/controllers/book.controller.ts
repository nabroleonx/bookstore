import { Request, Response } from 'express';
import BookService from '../services/book.service';
import { BookAttributes, BookCreationAttributes } from '@/types/book';

class BookController {
  async createBook(req: Request, res: Response) {
    const bookData: BookCreationAttributes = req.body;

    try {
      const createdBook = await BookService.createBook(bookData);
      res.status(201).json({ message: 'Book created successfully', createdBook });
    } catch (error) {
      res.status(500).json({ message: 'Error creating book', error });
    }
  }

  async updateBook(req: Request, res: Response) {
    const bookId: number = parseInt(req.params.id, 10);
    const bookData: Partial<BookAttributes> = req.body;

    try {
      const updatedBook = await BookService.updateBook(bookId, bookData);
      if (!updatedBook) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.status(200).json({ message: 'Book updated successfully', updatedBook });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating book', error });
    }
  }

  async deleteBook(req: Request, res: Response) {
    const bookId: number = parseInt(req.params.id, 10);

    try {
      const isDeleted = await BookService.deleteBook(bookId);
      if (!isDeleted) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.status(200).json({ message: 'Book deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error });
    }
  }

  async getAllBooks(req: Request, res: Response) {
    const page: number = parseInt(req.query.page as string, 10) || 1;
    const limit: number = parseInt(req.query.limit as string, 10) || 10;

    try {
      const books = await BookService.getAllBooks(page, limit);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: 'Error getting books', error });
    }
  }

  async getTotalBooksCount(req: Request, res: Response) {
    try {
      const totalBooksCount = await BookService.getTotalBooksCount();
      res.status(200).json({ count: totalBooksCount });
    } catch (error) {
      res.status(500).json({
        message: 'Error getting total books count',
        error,
      });
    }
  }
}

export default new BookController();

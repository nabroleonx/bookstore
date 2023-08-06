import axios from 'axios';
import { Book } from '@/components/pages/book-list/types';

const API_URL = 'http://localhost:5000/api/book';

export const fetchAllBooks = async (page: number, limit: number): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(API_URL, {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching books');
  }
};

export const createBook = async (book: Book): Promise<Book> => {
  try {
    const response = await axios.post<Book>(API_URL, book);
    return response.data;
  } catch (error) {
    throw new Error('Error creating book');
  }
};

export const updateBook = async (book: Book): Promise<Book> => {
  try {
    const response = await axios.put<Book>(`${API_URL}/${book.id}`, book);
    return response.data;
  } catch (error) {
    throw new Error('Error updating book');
  }
};

export const deleteBook = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error deleting book');
  }
};

export const getBookCount = async (): Promise<number> => {
  try {
    const response = await axios.get<{ count: number }>(`${API_URL}/count`);
    return response.data.count;
  } catch (error) {
    throw new Error('Error fetching book count');
  }
};

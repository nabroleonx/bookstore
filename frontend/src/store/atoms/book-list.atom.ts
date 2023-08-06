import { Book } from '@/components/pages/book-list/types';
import { atom } from 'recoil';

export const bookListState = atom<Book[]>({
  key: 'bookListState',
  default: [],
});

export const selectedBookState = atom<Book | null>({
  key: 'selectedBookState',
  default: null,
});

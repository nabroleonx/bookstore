import { selector } from 'recoil';
import { bookListState } from '../atoms/book-list.atom';

export const totalBooksCountSelector = selector<number>({
  key: 'totalBooksCountSelector',
  get: ({ get }) => {
    const books = get(bookListState);
    return books.length;
  },
});

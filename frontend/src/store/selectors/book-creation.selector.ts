import { selector } from 'recoil';
import {
  bookTitleState,
  bookDescriptionState,
  bookCoverImageState,
  bookDiscountRateState,
  bookPriceState,
} from '@/store/atoms/book-creation.atom';

export const bookFormState = selector({
  key: 'bookFormState',
  get: ({ get }) => ({
    title: get(bookTitleState),
    description: get(bookDescriptionState),
    coverImage: get(bookCoverImageState),
    discountRate: get(bookDiscountRateState),
    price: get(bookPriceState),
  }),
});

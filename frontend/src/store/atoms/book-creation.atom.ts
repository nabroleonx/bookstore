import { atom } from 'recoil';

export interface BookForm {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

export const bookTitleState = atom<string>({
  key: 'bookTitleState',
  default: '',
});

export const bookDescriptionState = atom<string>({
  key: 'bookDescriptionState',
  default: '',
});

export const bookDiscountRateState = atom<number>({
  key: 'bookDiscountRateState',
  default: 0,
});

export const bookCoverImageState = atom<string>({
  key: 'bookCoverImageState',
  default: '',
});

export const bookPriceState = atom<number>({
  key: 'bookPriceState',
  default: 0,
});

import BookCreationPage from '@/components/pages/book-create';
import BookList from '@/components/pages/book-list';

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: '/',
    element: <BookList />,
  },
  {
    path: '/create',
    element: <BookCreationPage />,
  },
];

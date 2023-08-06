import React, { useEffect, useState, useRef } from 'react';
import BookCard from '@/components/molecules/book-card';
import { useRecoilState } from 'recoil';
import { bookListState } from '@/store/atoms/book-list.atom';
import { fetchAllBooks, getBookCount } from '@/api/book';
import BookCardLoadingSkeleton from '@/components/atoms/loading-skeleton/book-card';
import { Link } from 'react-router-dom';
import PullToRefresh from 'react-pull-to-refresh';

const BookList: React.FC = () => {
  const [books, setBooks] = useRecoilState(bookListState);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState<HTMLElement | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const limit = 12;

  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      setPageNum(1);
      setBooks([]);
      await fetchBooks();
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetchAllBooks(pageNum, limit);
      if (pageNum === 1) {
        setBooks(response);
      } else {
        setBooks((prevBooks) => [...prevBooks, ...response]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setIsLoading(false);
    }
  };

  const fetchTotalPages = async () => {
    try {
      const count = await getBookCount();
      const totalCount = count;
      const calculatedTotalPages = Math.ceil(totalCount / limit);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.error('Error fetching total count:', error);
    }
  };

  useEffect(() => {
    fetchTotalPages();
  }, []);

  useEffect(() => {
    if (totalPages !== null && pageNum > totalPages) {
      setBooks([]);
      setIsLoading(false);
    }

    if (totalPages !== null && pageNum <= totalPages) {
      fetchBooks();
    }
  }, [pageNum, totalPages]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (lastElement) {
      observer.current = new IntersectionObserver(
        (entries) => {
          const first = entries[0];
          if (first.isIntersecting) {
            setPageNum((no) => no + 1);
          }
        },
        { threshold: 1 },
      );

      observer.current.observe(lastElement);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [lastElement]);

  return (
    <>
      <div className="sticky top-0 z-20 bg-slate-700 flex justify-end px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/create">
          <span className="mb-4 px-2 py-2 bg-indigo-700 text-white font-light">Add Book</span>
        </Link>
      </div>
      <div className="bg-white">
        <PullToRefresh onRefresh={handleRefresh}>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {books.length === 0 ? (
              <div className="mt-6 text-center text-2xl font-light">No books found 📚</div>
            ) : (
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {isLoading && pageNum === 1
                  ? Array.from({ length: 10 }).map((_, index) => <BookCardLoadingSkeleton key={index} />)
                  : books.map((book, _) => (
                      <BookCard
                        key={book.id}
                        title={book.title}
                        coverImage={book.coverImage}
                        discountRate={book.discountRate}
                        price={book.price}
                      />
                    ))}
                <div ref={setLastElement}></div>
              </div>
            )}
            {isLoading && pageNum > 1 && <div className="mt-4 text-2xl">loading ...</div>}
            {!isLoading && totalPages !== 0 && pageNum > totalPages! && (
              <div className="mt-6 text-center text-2xl font-light">No more books 📚</div>
            )}
          </div>
        </PullToRefresh>
      </div>
    </>
  );
};

export default BookList;

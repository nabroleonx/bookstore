import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import TextInput from '@/components/atoms/input/text-input';
import {
  bookTitleState,
  bookDescriptionState,
  bookCoverImageState,
  bookPriceState,
  bookDiscountRateState,
} from '@/store/atoms/book-creation.atom';
import { CustomButton } from '@/components/atoms/button';
import { createBook } from '@/api/book';
import { Book } from '@/components/pages/book-list/types';
import NumberInput from '@/components/atoms/input/number-input';
import TextArea from '@/components/atoms/input/textarea';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookCreationForm: React.FC = () => {
  const [bookTitle, setBookTitle] = useRecoilState(bookTitleState);
  const [bookDescription, setBookDescription] = useRecoilState(bookDescriptionState);
  const [bookCoverImage, setBookCoverImage] = useRecoilState(bookCoverImageState);
  const [bookDiscountRate, setBookDiscountRate] = useRecoilState(bookDiscountRateState);
  const [bookPrice, setBookPrice] = useRecoilState(bookPriceState);

  const navigate = useNavigate();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBookDescription(event.target.value);
  };

  const handleCoverImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookCoverImage(event.target.value);
  };

  const handleDiscountRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookDiscountRate(event.target.value === '' ? 0 : parseInt(event.target.value));
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookPrice(event.target.value === '' ? 0 : parseInt(event.target.value));
  };

  const handleBookCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const book: Book = {
      title: bookTitle,
      description: bookDescription,
      coverImage: bookCoverImage,
      discountRate: bookDiscountRate,
      price: bookPrice,
    };

    createBook(book)
      .then(() => {
        toast.success(`Book created successfully!`);

        navigate('/');
      })
      .catch(() => {
        toast.error(`Error creating book: Check all the fields and try again.`);
      });
  };

  return (
    <>
      <form onSubmit={handleBookCreate}>
        <div className="space-y-2">
          <TextInput
            label="Title"
            value={bookTitle}
            onChange={handleTitleChange}
            placeholder="Enter the book title"
            required
          />
          <TextArea
            label="Description"
            value={bookDescription}
            onChange={handleDescriptionChange}
            placeholder="Enter book description"
            required
          />
          <TextInput
            label="Cover Image"
            value={bookCoverImage}
            onChange={handleCoverImageChange}
            placeholder="Enter cover image url for the book"
            required
          />
          <NumberInput
            label="Price"
            value={bookPrice}
            onChange={handlePriceChange}
            placeholder="Enter the price of the book"
            min={0}
            // step={0.01}
            required
          />
          <NumberInput
            label="Discount Rate"
            value={bookDiscountRate}
            onChange={handleDiscountRateChange}
            placeholder="Enter the discount in %"
            min={0}
            max={99}
            // step={0.01}
            required
          />
          <CustomButton
            type="submit"
            classname="inline-flex w-full mt-4 justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Create Book
          </CustomButton>
        </div>
      </form>
    </>
  );
};

export default BookCreationForm;

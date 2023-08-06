import React from 'react';
import BookCreationForm from '@/components/molecules/book-creation-form';
import { useNavigate } from 'react-router-dom';

const BookCreationPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div onClick={() => navigate(-1)} className="flex text-2xl mb-4 cursor-pointer">
        🔙
      </div>

      <h2 className="text-2xl font-semibold text-gray-900">Create a New Book</h2>
      <div className="mt-4 bg-white shadow-md rounded-lg p-6">
        <BookCreationForm />
      </div>
    </div>
  );
};

export default BookCreationPage;

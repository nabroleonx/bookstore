import React from 'react';
import Image from '@/components/atoms/image';
import { BookCardProps } from './types';
import Badge from '@/components/atoms/badge';

const BookCard: React.FC<BookCardProps> = ({ title, coverImage, discountRate, price }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Image
          src={coverImage}
          alt={title}
          className="h-full w-full object-scale-down object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex space-x-2 items-center">
            <Badge text={`${discountRate}% off`} bgColor="#ff0000" textColor="#FFFFFF" />
          </div>
          <div className="flex space-x-2 items-center">
            <p>
              <span className="text-sm line-through text-gray-500">${price}</span> -{' '}
              <span className="text-base font-medium text-gray-900">
                ${(price * (1 - discountRate / 100)).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

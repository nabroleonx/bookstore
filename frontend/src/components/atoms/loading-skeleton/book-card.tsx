import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';

const BookCardLoadingSkeleton: React.FC = () => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer">
      <div className="h-80 bg-gray-200 sm:aspect-none sm:h-96">
        <div className="h-full w-full object-scale-down object-center bg-gradient-to-r from-gray-200 to-gray-300 animate-shimmer" />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <span aria-hidden="true" className="absolute inset-0 animate-pulse" />
        </h3>
        <div className="flex space-x-2 items-center">
          <span className="w-14 h-4 rounded bg-gray-200 animate-pulse" />
          <span className="w-12 h-4 rounded bg-gray-200 animate-pulse" />
        </div>
        <div className="flex space-x-2 items-center">
          <span className="w-20 h-6 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center -mt-8">
        <PhotoIcon className="h-12 w-12 text-gray-300" />
      </div>
    </div>
  );
};

export default BookCardLoadingSkeleton;

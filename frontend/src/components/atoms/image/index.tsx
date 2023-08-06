import React from 'react';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height }) => {
  return (
    <img src={src} alt={alt} className={className} style={{ width, height }} />
  );
};

export default Image;

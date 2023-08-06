import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children, type, classname }) => {
  const buttonClass = classNames('rounded', {
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 font-light': variant === 'primary',
    'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 font-light': variant === 'secondary',
    'bg-transparent hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 font-light': variant === 'icon',
    [classname!]: variant === 'custom',
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton: React.FC<ButtonProps> = (props) => <Button variant="secondary" {...props} />;
export const IconButton: React.FC<ButtonProps> = (props) => <Button variant="icon" {...props} />;
export const CustomButton: React.FC<ButtonProps> = (props) => <Button variant="custom" {...props} />;

export default Button;

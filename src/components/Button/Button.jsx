import React from 'react';
import { classNames } from '../../lib';
const intents = {
  info: 'bg-blue-500 hover:bg-blue-600 ',
  success: 'bg-green-500 hover:bg-green-600',
  warning: 'bg-yellow-500 hover:bg-yellow-600',
  danger: 'bg-red-500 hover:bg-red-600',
  dark: 'bg-gray-800 hover:bg-gray-600',
  white: 'bg-white hover:bg-gray-100',
};
export const Button = ({
  text,
  intent = 'info',
  className,
  children,
  ...prop
}) => {
  return (
    <button
      className={classNames(
        'w-full sm:w-auto flex-none',
        'text-lg leading-6 font-semibold py-3 px-6',
        intents[intent],
        intent === 'white' ? 'text-gray-800' : 'text-white',
        'border border-transparent rounded-lg',
        className
      )}
      {...prop}
    >
      {text ?? children}
    </button>
  );
};

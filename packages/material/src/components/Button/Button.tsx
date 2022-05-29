import React from 'react';
import { ReactFC } from 'types/interface';

export const Button: React.FC<ReactFC> = ({ children }) => {
  return <button>{children}</button>;
};

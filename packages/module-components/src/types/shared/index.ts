import { TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { ReactFC } from '../interface';

export interface InputArticles {
  xs: number | undefined;
  sm: number | undefined;
  id: string;
  name: string;
  label: string;
  mask?: (e: ChangeEvent<HTMLInputElement>) => string;
  legend?: string;
  type: 'text' | 'checkbox' | 'select' | 'date' | 'dropdown';
  options?: string[];
}

export interface ComponentsModule extends ReactFC {
  input?: TextFieldProps;
  data: InputArticles;
}

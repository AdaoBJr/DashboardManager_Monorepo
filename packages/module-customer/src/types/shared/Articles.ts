import { GridProps, SxProps, Theme, TypographyProps } from '@mui/material';
import { ChangeEvent } from 'react';

export interface InputArticles {
  xs: number | undefined;
  sm: number | undefined;
  id: string;
  name: string;
  label: string;
  mask?: (e: ChangeEvent<HTMLInputElement>) => string;
  type: 'text' | 'checkbox' | 'select' | 'date' | 'dropdown';
  options?: string[];
}

export interface TitleArticles {
  name: string | number;
  xs: number | undefined;
  sm: number | undefined;
  id?: string | number;
  item?: GridProps;
  text?: TypographyProps;
  sx?: SxProps<Theme>;
}

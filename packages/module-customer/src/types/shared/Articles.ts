import { GridProps, SxProps, Theme, TypographyProps } from '@mui/material';

export interface InputArticles {
  xs: number | undefined;
  sm: number | undefined;
  id: string;
  name: string;
  label: string;
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

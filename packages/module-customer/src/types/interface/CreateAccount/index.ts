import { GridProps, TextFieldProps } from '@mui/material';
import { InputArticles, TitleArticles } from '../../shared';
import { ReactFC } from '../React';

export interface CreateAccountProps extends ReactFC {
  title?: TitleArticles;
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  articles?: InputArticles[];
  handleErrors: (error: boolean) => void;
}
export interface useCreateAccountProps {
  handleErrors: (error: boolean) => void;
}

import { GridProps, TextFieldProps } from '@mui/material';
import { InputArticles, ReactFC } from '@dash/module-domain';

import { TitleArticles } from '../../shared';

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

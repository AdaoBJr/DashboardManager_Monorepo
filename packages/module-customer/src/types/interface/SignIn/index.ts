import { GridProps, TextFieldProps } from '@mui/material';
import { InputArticles, ReactFC } from '@dash/module-domain';

import { TitleArticles } from '../../shared';

export interface SignInProps extends ReactFC {
  title?: TitleArticles;
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  articles?: InputArticles[];
  showPwd?: boolean;
  handleErrors: (error: boolean) => void;
  handleShowPassword?: () => void;
}

export interface useSignInProps {
  handleErrors: (error: boolean) => void;
}

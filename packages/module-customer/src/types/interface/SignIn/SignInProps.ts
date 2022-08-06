import { GridProps, TextFieldProps } from '@mui/material';
import { SignInDomain } from 'types/domain';
import { InputArticles, TitleArticles } from '../../shared';
import { ReactFC } from '../React';

export interface SignInProps extends ReactFC {
  title?: TitleArticles;
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  articles?: InputArticles[];
  showPwd?: boolean;
  handleShowPassword?: () => void;
}

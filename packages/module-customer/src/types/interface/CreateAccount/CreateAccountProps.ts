import { GridProps, TextFieldProps } from '@mui/material';
import { InputArticles, TitleArticles } from '../../shared';
import { CreateAccountDomain } from 'types/domain';
import { ReactFC } from '../React';

export interface CreateAccountProps extends ReactFC {
  title?: TitleArticles;
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  articles?: InputArticles[];
  onBlur?: (values: CreateAccountDomain) => void;
}

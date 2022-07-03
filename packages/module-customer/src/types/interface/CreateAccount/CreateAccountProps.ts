import { GridProps, TextFieldProps } from '@mui/material';
import { CreateAccountDomain } from 'types/domain';
import { InputArticles } from '../../shared';
import { ReactFC } from '../React';

export interface CreateAccountProps extends ReactFC {
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  articles?: InputArticles[];
  onBlur?: (values: CreateAccountDomain) => void;
}

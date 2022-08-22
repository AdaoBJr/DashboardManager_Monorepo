import { TextFieldProps } from '@mui/material';

import { ReactFC } from '../react';
import { InputArticles } from './Articles';

export interface ComponentsModule extends ReactFC {
  input?: TextFieldProps;
  data: InputArticles;
}

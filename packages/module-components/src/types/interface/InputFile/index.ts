import { InputLabelProps } from '@mui/material';

import { ReactFC } from '../../shared';

export interface InputFileProps extends ReactFC {
  height?: string;
  color?: string;
  text?: string;
  muiProps?: InputLabelProps;
}

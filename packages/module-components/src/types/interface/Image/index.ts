import { ReactFC } from '@dash/module-domain';
import { SxProps, Theme } from '@mui/material';

export interface ImageProps extends ReactFC {
  src: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  alt?: string;
  sx?: SxProps<Theme>;
}

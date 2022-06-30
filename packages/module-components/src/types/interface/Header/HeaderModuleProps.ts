import { ReactFC } from '../React';
import { SxProps, Theme } from '@mui/material';

export interface HeaderModuleProps extends ReactFC {
  fixed?: boolean;
  src?: string;
  justify?: string;
  heightHeader?: string;
  widthImg?: string;
  heightImg?: string;
  altImg?: string;
  sx?: SxProps<Theme>;
}

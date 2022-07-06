import { ReactFC } from '../React';
import { SxProps, Theme } from '@mui/material';

interface LinkDetail {
  name: string;
  link: string;
}

interface Links {
  link1?: LinkDetail;
  link2?: LinkDetail;
  link3?: LinkDetail;
}

export interface HeaderModuleProps extends ReactFC {
  title?: string;
  links?: Links;
  fixed?: boolean;
  src?: string;
  justify?: string;
  heightHeader?: string;
  widthImg?: string;
  heightImg?: string;
  altImg?: string;
  sx?: SxProps<Theme>;
}

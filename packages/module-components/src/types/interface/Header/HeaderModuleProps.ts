import { CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material';

import { ReactFC } from '../React';
interface LinkDetail {
  name: string;
  url: string;
}

export interface Links {
  data?: LinkDetail[];
  CSSLinkContainer?: SxProps<Theme>;
  CSSLinkItem?: CSSProperties;
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

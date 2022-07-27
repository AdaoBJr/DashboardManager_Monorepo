import React from 'react';
import { ReactFC } from '../React';
import { SxProps, Theme } from '@mui/material';

interface LinkDetail {
  name: string;
  url: string;
}

export interface Links {
  data?: LinkDetail[];
  sx?: SxProps<Theme>;
  componentMUIStyled?: React.FC;
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

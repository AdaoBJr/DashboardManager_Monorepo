import { ReactFC } from '@dash/module-domain';
import { SxProps, Theme } from '@mui/material';

interface LinkDetail {
  name: string;
  url: string;
}

interface SxDetail {
  container?: SxProps<Theme>;
  item?: SxProps<Theme>;
}

export interface LinksProps {
  links?: LinkDetail[];
  sx?: SxDetail;
}

export interface WindowSize {
  smDown?: boolean;
  mdDown?: boolean;
}

export interface HeaderModuleProps extends ReactFC {
  title?: string;
  linksProps?: LinksProps;
  fixed?: boolean;
  src?: string;
  justify?: string;
  heightHeader?: string;
  widthImg?: string;
  heightImg?: string;
  altImg?: string;
  sx?: SxProps<Theme>;
  windowSize?: WindowSize;
}

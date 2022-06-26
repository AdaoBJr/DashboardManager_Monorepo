import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

import { Image } from '../../../lib/shared';
import { ReactFC } from 'types/interface';

interface HeaderModuleProps extends ReactFC {
  fixed?: boolean;
  src?: string;
  justify?: string;
  heightHeader?: string;
  widthImg?: string;
  heightImg?: string;
  altImg?: string;
  sx?: SxProps<Theme>;
}

export const HeaderModule: React.FC<HeaderModuleProps> = props => (
  <Box
    sx={{
      position: props.fixed ? 'fixed' : 'inherit',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: {
        xs: props.justify || 'center',
        md: props.justify || 'start'
      },
      marginTop: { xs: '30px', md: '0' },
      ...props.sx
    }}
  >
    <Image
      src={props.src!}
      height={props.heightImg}
      width={props.widthImg || 70}
      alt={props.altImg || 'logo GoDash'}
    />
    <span>GoDash</span>
  </Box>
);

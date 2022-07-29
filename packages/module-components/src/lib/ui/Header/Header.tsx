import React from 'react';
import { Box, Typography } from '@mui/material';

import { Links } from './components';
import { Image } from '../../../lib/shared';
import { HeaderModuleProps } from '../../../types/interface';

export const HeaderModule: React.FC<HeaderModuleProps> = props => (
  <Box
    sx={{
      position: props.fixed ? 'fixed' : 'inherit',
      width: '100%',
      padding: '0 2rem',
      ...props.sx
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: props.justify || 'center',
          md: props.justify || 'space-between'
        }
      }}
    >
      <Box>
        <Image
          src={props.src!}
          height={props.heightImg}
          width={props.widthImg || 70}
          alt={props.altImg || 'logo GoDash'}
        />
        <Typography component="span">{props.title || 'GoDash'}</Typography>
      </Box>
      {props?.linksProps && <Links {...props?.linksProps} />}
    </Box>
  </Box>
);

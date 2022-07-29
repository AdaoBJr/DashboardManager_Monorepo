import React from 'react';
import { Box, Icon, IconButton, Typography, useMediaQuery } from '@mui/material';

import { Links } from './components';
import { Image } from '../../../lib/shared';
import { HeaderModuleProps } from '../../../types/interface';

export const HeaderModule: React.FC<HeaderModuleProps> = props => {
  const smDown = props?.theme && useMediaQuery(props?.theme.breakpoints.down('sm'));

  return (
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
        {!smDown && props?.linksProps && <Links {...props?.linksProps} />}
        {smDown && (
          <IconButton>
            <Icon>menu</Icon>
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

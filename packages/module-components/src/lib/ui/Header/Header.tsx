import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { Image } from '../../../lib/shared';
import { HeaderModuleProps } from '../../../types/interface';

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
    <>
      <Box>
        <Image
          src={props.src!}
          height={props.heightImg}
          width={props.widthImg || 70}
          alt={props.altImg || 'logo GoDash'}
        />
        <Box component="span">{props.title || 'GoDash'}</Box>
      </Box>
      <Box sx={{ ...props?.links?.CSSLinkContainer }}>
        {props?.links?.data?.map(link => (
          <Link style={{ ...props?.links?.CSSLinkItem }} key={link.name} to={link.url}>
            {link.name}
          </Link>
        ))}
      </Box>
    </>
  </Box>
);

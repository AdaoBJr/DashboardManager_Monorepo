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
    <div>
      <Image
        src={props.src!}
        height={props.heightImg}
        width={props.widthImg || 70}
        alt={props.altImg || 'logo GoDash'}
      />
      <span>{props.title || 'GoDash'}</span>
    </div>
    <div>
      <Link to={props?.links?.link1?.link!}>{props?.links?.link1?.name}</Link>
      <Link to={props?.links?.link2?.link!}>{props?.links?.link2?.name}</Link>
      <Link to={props?.links?.link3?.link!}>{props?.links?.link3?.name}</Link>
    </div>
  </Box>
);

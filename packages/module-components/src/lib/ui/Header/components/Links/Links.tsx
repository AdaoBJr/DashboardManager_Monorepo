import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { LinksProps } from '../../../../../types/interface';

export const Links: React.FC<LinksProps> = props => (
  <Box sx={{ ...props?.sx?.container }}>
    {props?.dataLinks?.map(link => (
      <Link key={link.name} to={link.url}>
        <Typography sx={{ ...props?.sx?.item }}>{link.name}</Typography>
      </Link>
    ))}
  </Box>
);

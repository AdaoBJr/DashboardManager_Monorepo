import React from 'react';
import { Box, Typography } from '@mui/material';
import { TitleProps } from '../../../types/interface';

export const Title: React.FC<TitleProps> = (props) => (
  <Box {...props.containerProps}>
    <Typography {...props.muiProps}>
      {props.compProps?.text}
      {props.children}
    </Typography>
  </Box>
);

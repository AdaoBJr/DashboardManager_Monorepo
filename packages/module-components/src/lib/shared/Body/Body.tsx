import React from 'react';
import { Box, Typography } from '@mui/material';
import { BodyProps } from '../../../types/interface';

export const Body: React.FC<BodyProps> = (props) => (
  <Box {...props.containerProps}>
    <>
      <Typography {...props.muiProps}>
        {props.compProps?.text}
        {props.children}
      </Typography>
      {props.compProps?.component}
    </>
  </Box>
);

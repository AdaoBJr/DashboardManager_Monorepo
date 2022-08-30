import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { Person } from '@mui/icons-material';

import { AvatarModuleProps } from '../../../types/interface';

export const AvatarModule: React.FC<AvatarModuleProps> = props => (
  <IconButton sx={{ m: '5rem 0 -10rem 13rem' }}>
    <Avatar {...props}>{!props?.src && <Person sx={{ fontSize: 40 }} />}</Avatar>
  </IconButton>
);

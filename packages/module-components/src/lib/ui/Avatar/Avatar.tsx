import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { Create, Person } from '@mui/icons-material';

import { AvatarModuleProps } from '../../../types/interface';
import { IconBtn, BoxEditWrapper } from './styles';

export const AvatarModule: React.FC<AvatarModuleProps> = props => (
  <IconButton style={{ ...IconBtn }} sx={{ ...props?.styles?.button }} component="label">
    <BoxEditWrapper sx={{ ...props?.styles?.editIconWrapper }}>
      <input type="file" hidden />
      <Create
        sx={{
          verticalAlign: 'middle',
          ...props?.styles?.iconEdit
        }}
      />
    </BoxEditWrapper>
    <Avatar {...props}>
      {!props?.src && <Person sx={{ fontSize: 40, ...props?.styles?.iconAvatar }} />}
    </Avatar>
  </IconButton>
);

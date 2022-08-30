import React from 'react';
import { Avatar } from '@mui/material';
import { Create, Person } from '@mui/icons-material';

import { AvatarModuleProps } from '../../../types/interface';
import { IconButtonContainer, BoxEditWrapper } from './styles';

export const AvatarModule: React.FC<AvatarModuleProps> = props => (
  <IconButtonContainer sx={{ ...props?.styles?.button }}>
    <BoxEditWrapper sx={{ ...props?.styles?.editIconWrapper }}>
      <Create sx={{ verticalAlign: 'middle', zIndex: 2, ...props?.styles?.iconEdit }} />
    </BoxEditWrapper>
    <Avatar {...props}>
      {!props?.src && <Person sx={{ fontSize: 40, ...props?.styles?.iconAvatar }} />}
    </Avatar>
  </IconButtonContainer>
);

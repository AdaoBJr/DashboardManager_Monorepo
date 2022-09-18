import React, { ComponentType, ReactElement } from 'react';
import { BoxProps } from '@mui/material';

import { TextComponent } from '../../shared';

interface Title {
  id?: string;
  text?: string;
}

export interface TitleProps extends TextComponent {
  compProps?: Title;
  containerProps?: BoxProps;
}

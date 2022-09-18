import { ComponentType } from 'react';
import { BoxProps } from '@mui/material';

import { TextComponent } from '../../shared';

interface Body {
  id?: string;
  text?: string;
  component?: ComponentType;
}

export interface BodyProps extends TextComponent {
  compProps?: Body;
  containerProps?: BoxProps;
}

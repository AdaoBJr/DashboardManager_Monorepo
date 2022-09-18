import React from 'react';
import { InputLabel } from '@mui/material';

import { InputFileProps } from '../../../types/interface';

export const InputFile: React.FC<InputFileProps> = props => (
  <InputLabel
    sx={{
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      lineHeight: props?.height || '35px',
      color: props?.color || '#FFF',
      ...props?.muiProps?.sx
    }}
  >
    {props?.children || props?.text || 'Enviar arquivo'}
    <input type="file" hidden />
  </InputLabel>
);

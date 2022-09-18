import React from 'react';
import { Button } from '@mui/material';

import { ButtonUploadProps } from '../../../types/interface/ButtonUpload';

export const ButtonUpload: React.FC<ButtonUploadProps> = props => (
  <Button variant={props.muiProps.variant || 'contained'} fullWidth {...props.muiProps}>
    <label style={{ cursor: 'pointer' }}>
      {props.children || 'Enviar Arquivo'}
      <input type="file" hidden />
    </label>
  </Button>
);

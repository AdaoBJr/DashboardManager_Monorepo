import React from 'react';
import { Button } from '@mui/material';

import { ButtonUploadProps } from '../../../types/interface';
import { InputFile } from '../../shared';

export const ButtonUpload: React.FC<ButtonUploadProps> = props => (
  <Button
    variant={props.muiProps.variant || 'contained'}
    fullWidth
    {...props.muiProps}
    startIcon={
      props.muiProps?.startIcon && (
        <InputFile
          muiProps={{
            sx: { marginTop: '5px', marginLeft: '12px', ...props.compProps?.startIconCSS }
          }}
        >
          {props.muiProps?.startIcon}
        </InputFile>
      )
    }
    endIcon={
      props.muiProps?.endIcon && (
        <InputFile
          muiProps={{
            sx: { marginTop: '5px', marginRight: '12px', ...props.compProps?.endIconCSS }
          }}
        >
          {props.muiProps?.endIcon}
        </InputFile>
      )
    }
    sx={{
      ...props?.muiProps.sx,
      p: 0,
      height: props?.compProps?.height || '35px',
      width: props?.compProps?.width || '185px'
    }}
  >
    <InputFile />
  </Button>
);

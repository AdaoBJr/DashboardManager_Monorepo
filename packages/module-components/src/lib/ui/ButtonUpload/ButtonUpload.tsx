import React from 'react';
import { Button } from '@mui/material';

import { InputFile } from '../../shared';
import { ButtonUploadProps } from '../../../types/interface';

export const ButtonUpload: React.FC<ButtonUploadProps> = props => {
  const loadedFile = (file: File, file64: string | ArrayBuffer) =>
    props.compProps?.loadedFile && props.compProps?.loadedFile(file, file64);

  return (
    <Button
      variant={props.muiProps.variant || 'contained'}
      fullWidth
      {...props.muiProps}
      startIcon={
        props.muiProps?.startIcon && (
          <InputFile
            muiProps={{
              sx: {
                marginTop: '5px',
                marginLeft: '12px',
                ...props.compProps?.startIconCSS
              }
            }}
            acceptedFile={props.acceptedFile}
            compProps={{ loadedFile }}
          >
            {props.muiProps?.startIcon}
          </InputFile>
        )
      }
      endIcon={
        props.muiProps?.endIcon && (
          <InputFile
            muiProps={{
              sx: {
                marginTop: '5px',
                marginRight: '12px',
                ...props.compProps?.endIconCSS
              }
            }}
            compProps={{ loadedFile }}
            acceptedFile={props.acceptedFile}
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
      <InputFile compProps={{ loadedFile }} acceptedFile={props.acceptedFile} />
    </Button>
  );
};

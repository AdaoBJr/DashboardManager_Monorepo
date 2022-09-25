import React from 'react';
import { InputLabel } from '@mui/material';

import { InputFileProps } from '../../../types/interface';
import { useInputFile } from '../../../services/talons';

export const InputFile: React.FC<InputFileProps> = props => {
  const { loadedFile } = props.compProps;
  const { handleUploadFile } = useInputFile({ loadedFile });
  return (
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
      <input
        type="file"
        accept={props?.acceptedFile}
        hidden
        onChange={handleUploadFile}
      />
    </InputLabel>
  );
};

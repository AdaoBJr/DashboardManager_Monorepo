import React, { useMemo } from 'react';
import { TextFieldProps, TextField } from '@mui/material';
import { ErrorMessage } from 'formik';

import { InputDateModuleProps } from '../../../types/interface';

export const InputDateModule: React.FC<InputDateModuleProps> = props => {
  const { input, data } = props;

  const inputDateProps = useMemo<TextFieldProps>(
    () => ({
      ...data,
      ...input,
      InputLabelProps: { shrink: true },
      variant: input?.variant || 'outlined',
      helperText: <ErrorMessage name={data.name} />
    }),
    []
  );

  return <TextField {...inputDateProps} />;
};

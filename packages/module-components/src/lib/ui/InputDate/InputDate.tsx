import React, { useMemo } from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

import { InputDateModuleProps } from '../../../types/interface';

export const InputDateModule: React.FC<InputDateModuleProps> = props => {
  const { input, data, ...rest } = props;

  const inputDateProps = useMemo<TextFieldProps>(
    () => ({
      ...data,
      ...input,
      ...rest,
      variant: input?.variant || 'outlined',
      InputLabelProps: { shrink: true }
    }),
    []
  );

  return <Field as={TextField} {...inputDateProps} />;
};

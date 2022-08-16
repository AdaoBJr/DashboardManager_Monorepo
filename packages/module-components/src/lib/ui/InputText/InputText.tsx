import React from 'react';
import { ErrorMessage } from 'formik';
import { TextField } from '@mui/material';

import { InputTextModuleProps } from '../../../types/interface';

export const InputTextModule: React.FC<InputTextModuleProps> = ({ data, input }) => (
  <TextField {...data} {...input} helperText={<ErrorMessage name={data.name} />} />
);

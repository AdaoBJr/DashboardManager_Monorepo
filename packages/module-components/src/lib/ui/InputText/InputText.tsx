import React from 'react';
import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import { InputTextModuleProps } from '../../../types/interface';

export const InputTextModule: React.FC<InputTextModuleProps> = props => (
  <Field as={TextField} {...props.data} {...props.input} />
);

import React from 'react';
import { Field } from 'formik';
import { TextField } from '@mui/material';

import { InputTextModuleProps } from '../../../types/interface';
import { useTextInput } from '../../../services/talons';

export const InputTextModule: React.FC<InputTextModuleProps> = props => {
  const { fieldProps } = useTextInput(props);
  return <Field as={TextField} {...fieldProps} />;
};

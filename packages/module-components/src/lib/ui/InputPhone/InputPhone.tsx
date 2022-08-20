import React from 'react';
import { Field } from 'formik';
import { TextField } from '@mui/material';

import { InputPhoneModuleProps } from '../../../types/interface';

export const InputPhoneModule: React.FC<InputPhoneModuleProps> = props => {
  return <Field as={TextField} {...props.data} {...props.input} />;
};

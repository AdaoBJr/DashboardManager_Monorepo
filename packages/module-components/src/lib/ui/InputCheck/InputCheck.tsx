import React from 'react';
import { Field } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from '@mui/material';

import { InputCheckModuleProps } from '../../../types/interface';
import { useInputCheck } from '../../../services/talons';

export const InputCheckModule: React.FC<InputCheckModuleProps> = props => {
  const { inputCheckProps, configFormControl } = useInputCheck(props);

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{props.data?.legend}</FormLabel>
      <FormGroup>
        <Field
          as={FormControlLabel}
          control={<Checkbox {...inputCheckProps} />}
          label={props.data.label}
        />
      </FormGroup>
    </FormControl>
  );
};

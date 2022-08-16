import React, { ChangeEvent, useCallback, useMemo } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from '@mui/material';
import { ErrorMessage, useField, useFormikContext } from 'formik';

import { InputCheckModuleProps } from '../../../types/interface';

interface configFormControl {
  error?: boolean;
}

export const InputCheckModule: React.FC<InputCheckModuleProps> = props => {
  const { input, data, ...rest } = props;
  const [field, meta] = useField(data.name);
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(data.name, checked),
    [data.name, setFieldValue]
  );

  const inputCheckProps = useMemo(
    () => ({
      ...field,
      // helperText: <ErrorMessage name={data.name} />,
      onChange: handleChange
    }),
    [props]
  );

  const configFormControl: configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{data?.legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...inputCheckProps} />}
          label={data.label}
        />
      </FormGroup>
    </FormControl>
  );
};

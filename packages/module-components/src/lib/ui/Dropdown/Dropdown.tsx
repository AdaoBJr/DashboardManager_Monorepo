import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { ErrorMessage, useField, useFormikContext } from 'formik';

import { DropdownModuleProps } from '../../../types/interface';

export const DropdownModule: React.FC<DropdownModuleProps> = props => {
  const { input, data } = props;
  const [field, meta] = useField(data.name);
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(data.name, value),
    [data.name, setFieldValue]
  );

  const dropdownProps = useMemo<TextFieldProps>(
    () => ({
      ...field,
      ...data,
      ...input,
      select: true,
      fullWidth: true,
      variant: input?.variant || 'outlined',
      helperText: <ErrorMessage name={data.name} />,
      onChange: handleChange
    }),
    [props, field]
  );

  if (meta && meta.touched && meta.error) {
    dropdownProps.error = true;
    dropdownProps.helperText = meta.error;
  }

  return (
    <TextField {...dropdownProps}>
      {data.options?.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

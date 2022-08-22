import { ChangeEvent, useCallback, useMemo } from 'react';
import { useField, useFormikContext } from 'formik';

import { UseInputCheckModuleProps } from '../../types/interface';

interface configFormControl {
  error?: boolean;
}

export const useInputCheck = (props: UseInputCheckModuleProps) => {
  const [field, meta] = useField(props.data.name);
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(props.data.name, checked),
    [props.data.name, setFieldValue]
  );

  const inputCheckProps = useMemo(
    () => ({
      ...field,
      ...props.data,
      onChange: handleChange
    }),
    [props]
  );

  const configFormControl: configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  return { inputCheckProps, configFormControl };
};

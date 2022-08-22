import { ChangeEvent, useCallback, useMemo } from 'react';
import { useFormikContext } from 'formik';
import { UseInputTextModuleProps } from '../../types/interface';

export const useInputText = (props: UseInputTextModuleProps) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (props.data.mask) setFieldValue(props.data.name, props.data.mask(e));
      setFieldValue(props.data.name, e.target.value);
    },
    [props.data.name, setFieldValue]
  );

  const fieldProps = useMemo(() => {
    const fieldProps = { ...props.data, ...props.input, onChange: handleChange };
    delete fieldProps?.mask;
    return fieldProps;
  }, [props.data, props.input]);

  return { fieldProps };
};

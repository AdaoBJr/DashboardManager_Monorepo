import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import { useCreateAccountProps } from '../../types/interface';

export const useCreateAccount = (props: useCreateAccountProps) => {
  const { values: inputValues, errors } = useFormikContext();

  const { gender, country } = inputValues as any;
  const dropdown = { gender: gender[0], country: country[0] };
  const [dropValues, setDropdownValues] = useState<any>(dropdown);

  const isDate = useCallback(
    (name: string, id: string) => name.includes('date') || id.includes('date'),
    []
  );

  const handleDropChange = useCallback(
    ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
      setDropdownValues({ ...dropValues, [name]: value }),
    [dropValues, setDropdownValues]
  );

  const formErrors = useCallback(() => {
    const isError = Object.values(errors).length > 0;
    props.handleErrors(isError);
  }, [errors]);

  useEffect(formErrors, [errors]);

  return { dropValues, isDate, handleDropChange };
};

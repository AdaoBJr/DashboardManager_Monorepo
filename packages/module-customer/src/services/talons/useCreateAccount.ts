import { useCallback, useEffect } from 'react';
import { useFormikContext } from 'formik';

import { useCreateAccountProps } from '../../types/interface';

export const useCreateAccount = (props: useCreateAccountProps) => {
  const form = useFormikContext();

  const formErrors = useCallback(() => {
    const isError = Object.values(form.errors).length > 0;
    props.handleErrors(isError);
  }, [form.errors]);

  useEffect(formErrors, [form.errors]);

  return { errors: form.errors };
};

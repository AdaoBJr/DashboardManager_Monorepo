import { useCallback, useEffect } from 'react';
import { useFormikContext } from 'formik';

import { useSignInProps } from '../../types/interface';

export const useSignIn = (props: useSignInProps) => {
  const form = useFormikContext();

  const formErrors = useCallback(() => {
    const isError = Object.values(form.errors).length > 0;
    props.handleErrors(isError);
  }, [form.errors]);

  useEffect(formErrors, [form.errors]);

  return { errors: form.errors };
};

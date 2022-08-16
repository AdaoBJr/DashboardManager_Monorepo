import { useCallback, useEffect } from 'react';
import { useFormikContext } from 'formik';

import { useCreateAccountProps } from '../../types/interface';

export const useCreateAccount = (props: useCreateAccountProps) => {
  const { errors } = useFormikContext();

  const formErrors = useCallback(() => {
    const isError = Object.values(errors).length > 0;
    props.handleErrors(isError);
  }, [errors]);

  useEffect(formErrors, [errors]);

  return {};
};

import { useCallback, useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import { ButtonProps } from '@mui/material';
import { SignInProps } from '@dash/module-customer';
import { FormikConfig, FormikHelpers } from 'formik';
import { AnimationModuleProps } from '@dash/module-components';

import { useAppContext } from 'context';
import { form } from 'services/validation';
import { SignInDomain } from 'types/domain';
import { valuesLoginInittial } from 'types/shared';
import { SubmitButton } from 'lib/shared/__styles__';
import { signInInputs, signInTitle } from 'articles';
import * as animation from 'assets/animations/login.json';
// import { useSignInCustomer } from 'services/infra/requests';
import { SignInTitle, SignInInputs } from 'lib/ui/SignIn/styles';

export const useSignIn = () => {
  const { email, password } = form;
  const { windowSize } = useAppContext();
  const [showPwd, setShowPwd] = useState(false);
  const [formErrors, setFormErrors] = useState<boolean>(true);
  // const { mutate, response } = useSignInCustomer({ data: values });
  const handleShowPassword = useCallback(() => setShowPwd(prev => !prev), [setShowPwd]);

  const formValidation = useMemo(() => yup.object().shape({ email, password }), []);

  const handleSubmit = (values: SignInDomain, props: FormikHelpers<SignInDomain>) => {
    console.log('enviando dados...', values);
  };

  const compProps = useMemo(
    () => ({
      formikProps: {
        onSubmit: handleSubmit,
        initialValues: valuesLoginInittial,
        validationSchema: formValidation
      } as FormikConfig<SignInDomain>,
      formProps: {
        // autoComplete: 'off',
        sx: { gap: '2rem' }
      },
      signInModuleProps: {
        title: { ...signInTitle, sx: SignInTitle },
        container: { spacing: 1 },
        input: { sx: SignInInputs },
        articles: signInInputs,
        showPwd,
        handleErrors,
        handleShowPassword
      } as SignInProps,
      buttonProps: {
        type: 'submit',
        variant: 'contained',
        disabled: formErrors,
        sx: SubmitButton
      } as ButtonProps,
      animationProps: {
        animation,
        width: windowSize?.smDown ? 345 : 500,
        height: windowSize?.smDown ? 345 : 445,
        style: { margin: '3rem 0 0' }
      } as AnimationModuleProps
    }),
    [handleSubmit, formValidation]
  );

  function handleErrors(error?: boolean) {
    return setFormErrors(error === undefined ? true : error);
  }

  useEffect(handleErrors, []);

  return { handleSubmit, compProps, windowSize };
};

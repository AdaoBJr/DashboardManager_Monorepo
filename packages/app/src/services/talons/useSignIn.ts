import { useCallback, useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import { ButtonProps } from '@mui/material';
import { SignInProps } from '@dash/module-customer';
import { FormikConfig, FormikHelpers } from 'formik';
import { AnimationModuleProps } from '@dash/module-components';

import { useAppContext } from 'context';
import { SignInDomain } from 'types/domain';
import { valuesLoginInittial } from 'types/shared';
import { SubmitButton } from 'lib/shared/__styles__';
import { signInInputs, signInTitle } from 'articles';
import * as animation from 'assets/animations/login.json';
// import { useSignInCustomer } from 'services/infra/requests';
import { SignInTitle, SignInInputs } from 'lib/ui/SignIn/styles';

export const useSignIn = () => {
  const { windowSize } = useAppContext();
  const [showPwd, setShowPwd] = useState(false);
  const [formErrors, setFormErrors] = useState<boolean>(true);
  // const { mutate, response } = useSignInCustomer({ data: values });
  const handleShowPassword = useCallback(() => setShowPwd(prev => !prev), [setShowPwd]);

  const formValidation = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .email('Entre com um e-mail válido.')
          .required('Obrigatório.'),
        password: yup
          .string()
          .matches(/^(?=.*[A-Z][a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message:
              'A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
          })
          .required('Obrigatório.')
      }),
    []
  );

  const handleErrors = (error?: boolean) =>
    setFormErrors(error === undefined ? true : error);

  const handleSubmit = (values: SignInDomain, props: FormikHelpers<SignInDomain>) => {
    console.log('enviando dados...', values);
  };

  useEffect(handleErrors, []);

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

  return { handleSubmit, compProps, windowSize };
};

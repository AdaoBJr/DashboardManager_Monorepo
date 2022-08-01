import { SyntheticEvent, useMemo, useState } from 'react';
import { ButtonProps } from '@mui/material';
import { CreateAccountProps } from '@dash/module-customer';
import { AnimationModuleProps } from '@dash/module-components';

import { useAppContext } from 'context';
import { CreateAccountDomain } from 'types/domain';
import { SubmitButton } from 'lib/shared/__styles__';
import * as animation from 'assets/animations/register.json';
import { useCreateCustomer } from 'services/infra/requests';
import { createAccountInputs, createAccountTitle } from 'articles';
import { CreateAccountInputs, CreateAccountTitle } from 'lib/ui/CreateAccount/styles';

export const useCreateAccount = () => {
  const { windowSize } = useAppContext();

  const [values, setValues] = useState({} as CreateAccountDomain);
  const { mutate, response } = useCreateCustomer({ values });

  const handleBlur = (value: CreateAccountDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  const compProps = useMemo(
    () => ({
      formProps: {
        sx: { gap: '2rem' },
        onSubmit: handleSubmit,
        autoComplete: 'off',
        noValidate: true
      },
      createAccountModuleProps: {
        title: { ...createAccountTitle, sx: CreateAccountTitle },
        container: { spacing: 1 },
        input: { sx: CreateAccountInputs },
        articles: createAccountInputs,
        onBlur: handleBlur
      } as CreateAccountProps,
      buttonProps: {
        type: 'submit',
        variant: 'contained',
        onClick: handleSubmit,
        sx: SubmitButton
      } as ButtonProps,
      animationProps: {
        animation,
        width: windowSize?.smDown ? 345 : 500,
        height: windowSize?.smDown ? 345 : 445,
        style: { margin: windowSize?.smDown ? '7rem 0 0' : '13rem 0 0' }
      } as AnimationModuleProps
    }),
    [handleSubmit, handleBlur]
  );

  return { mutate, handleBlur, handleSubmit, compProps, response };
};

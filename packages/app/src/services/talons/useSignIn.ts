import { SyntheticEvent, useMemo, useState } from 'react';
import { ButtonProps, useMediaQuery } from '@mui/material';
import { SignInProps } from '@dash/module-customer';
import {
  AnimationModuleProps,
  HeaderModuleProps,
  LinksProps
} from '@dash/module-components';

import { useAppContext } from 'context';
import { SignInDomain } from 'types/domain';
import logo from 'assets/images/logoGoDash.png';
import { signInInputs, signInTitle } from 'articles';
import { useSignInCustomer } from 'services/infra/requests';
import {
  ContainerHeader,
  LinkContainer,
  LinkItem,
  SignInTitle,
  SignInInputs,
  SignInButton
} from 'lib/ui/SignIn/styles';
import * as animation from 'assets/animations/login.json';

export const useSignIn = () => {
  const { theme } = useAppContext();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [values, setValues] = useState({} as SignInDomain);
  const { mutate, response } = useSignInCustomer({ data: values });

  const handleBlur = (value: SignInDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  const { dataLinks } = useMemo(
    (): LinksProps => ({
      dataLinks: [
        { name: 'Home', url: '/home' },
        { name: 'Quem Somos', url: '/somos' },
        { name: 'Contato', url: 'contato' }
      ]
    }),
    []
  );

  const windowSize = useMemo(() => ({ smDown }), [smDown, theme]);

  const compProps = useMemo(
    () => ({
      headerProps: {
        windowSize,
        src: logo,
        sx: ContainerHeader,
        linksProps: {
          dataLinks,
          sx: { container: LinkContainer, item: LinkItem }
        }
      } as HeaderModuleProps,
      formProps: {
        sx: { gap: '2rem' },
        onSubmit: handleSubmit,
        autoComplete: 'off',
        noValidate: true
      },
      signInModuleProps: {
        title: { ...signInTitle, sx: SignInTitle },
        container: { spacing: 1 },
        input: { sx: SignInInputs },
        articles: signInInputs,
        onBlur: handleBlur
      } as SignInProps,
      buttonProps: {
        type: 'submit',
        variant: 'contained',
        onClick: handleSubmit,
        sx: SignInButton
      } as ButtonProps,
      animationProps: {
        animation,
        width: windowSize?.smDown ? 345 : 500,
        height: windowSize?.smDown ? 345 : 445,
        style: { margin: '3rem 0 0' }
      } as AnimationModuleProps
    }),
    [theme, handleSubmit, handleBlur]
  );

  return { handleBlur, handleSubmit, compProps, windowSize, response };
};

import React, { SyntheticEvent, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { Links } from '@dash/module-components/src/types/interface';
import { AnimationModule, HeaderModule } from '@dash/module-components';

import { signIn } from 'articles';
import { ReactFC } from 'types/interface';
import { SignInDomain } from 'types/domain';
import logo from 'assets/images/logoGoDash.png';
import { useSignInCustomer } from 'services/infra/requests';
import * as Animation from '../../../assets/animations/login.json';
import { BoxContainer, PaperHeaderWrapper } from './styles';
import { BoxFormWrapper, Form, PaperFormWrapper } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const [values, setValues] = useState({} as SignInDomain);
  const { mutate, response } = useSignInCustomer({ data: values });

  const handleBlur = (value: SignInDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  const links = useMemo(
    (): Links => ({
      data: [
        { name: 'Home', url: '/home' },
        { name: 'Quem Somos', url: '/somos' },
        { name: 'Contato', url: 'contato' }
      ],
      CSSLinkItem: { background: 'red', margin: '2px 16px' }
    }),
    []
  );

  return (
    <BoxContainer>
      <PaperHeaderWrapper>
        <HeaderModule src={logo} links={links} />
      </PaperHeaderWrapper>
      <BoxFormWrapper>
        <PaperFormWrapper>
          <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <SignInModule
              container={{ spacing: 1 }}
              input={{
                sx: { width: '100%', '& .MuiInputBase-input': { p: '10px 12px' } }
              }}
              articles={signIn}
              onBlur={handleBlur}
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Entrar
            </Button>
          </Form>
        </PaperFormWrapper>
      </BoxFormWrapper>
      <AnimationModule animation={Animation} />
    </BoxContainer>
  );
};

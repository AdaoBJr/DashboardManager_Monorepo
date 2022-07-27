import React from 'react';
import { Button } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule, HeaderModule } from '@dash/module-components';

import { signIn } from 'articles';
import { ReactFC } from 'types/interface';
import { useSignIn } from 'services/talons';
import logo from 'assets/images/logoGoDash.png';
import * as Animation from '../../../assets/animations/login.json';
import { BoxContainer, PaperHeaderWrapper } from './styles';
import { BoxFormWrapper, Form, PaperFormWrapper } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const { handleBlur, handleSubmit, links } = useSignIn();

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

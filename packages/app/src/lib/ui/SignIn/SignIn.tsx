import React from 'react';
import { Button, Grid } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule, HeaderModule } from '@dash/module-components';

import { ReactFC } from 'types/interface';
import { useSignIn } from 'services/talons';
import { signInInputs, signInTitle } from 'articles';
import { Form, PaperFormWrapper } from 'lib/shared/__styles__';
import * as Animation from '../../../assets/animations/login.json';
import {
  GridContainer,
  PaperHeader,
  PaperForm,
  SignInTitle,
  SignInInputs,
  SignInButton
} from './styles';

export const SignIn: React.FC<ReactFC> = () => {
  const { handleBlur, handleSubmit, compProps, windowSize } = useSignIn();
  const { headerModules } = compProps;

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <PaperHeader>
          <HeaderModule {...headerModules} />
        </PaperHeader>
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={PaperForm}>
          <Form
            sx={{ gap: '2rem' }}
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
          >
            <SignInModule
              title={{ ...signInTitle, sx: SignInTitle }}
              container={{ spacing: 1 }}
              input={{ sx: SignInInputs }}
              articles={signInInputs}
              onBlur={handleBlur}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              sx={SignInButton}
            >
              Entrar
            </Button>
          </Form>
        </PaperFormWrapper>
      </Grid>
      <Grid item md={6}>
        <AnimationModule
          animation={Animation}
          width={windowSize?.smDown ? 345 : 500}
          height={windowSize?.smDown ? 345 : 445}
          style={{ margin: '3rem 0 0' }}
        />
      </Grid>
    </GridContainer>
  );
};

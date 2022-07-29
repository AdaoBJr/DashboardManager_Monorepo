import React from 'react';
import { Button, Grid } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule, HeaderModule } from '@dash/module-components';

import { ReactFC } from 'types/interface';
import { useSignIn } from 'services/talons';
import { Form, PaperFormWrapper } from 'lib/shared/__styles__';
import * as Animation from '../../../assets/animations/login.json';
import { GridContainer, PaperForm } from './styles';

export const SignIn: React.FC<ReactFC> = () => {
  const { handleSubmit, compProps, windowSize } = useSignIn();
  const { headerProps, formProps, signInModuleProps, buttonProps } = compProps;

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <HeaderModule {...headerProps} />
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={PaperForm}>
          <Form {...formProps}>
            <SignInModule {...signInModuleProps} />
            <Button {...buttonProps}>Entrar</Button>
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

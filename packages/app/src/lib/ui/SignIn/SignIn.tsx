import React from 'react';
import { Button, Grid } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule, HeaderModule } from '@dash/module-components';

import { ReactFC } from 'types/interface';
import { useSignIn } from 'services/talons';
import { GridContainer, PaperForm } from './styles';
import { Form, PaperFormWrapper } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const {
    compProps: { headerProps, formProps, signInModuleProps, buttonProps, animationProps }
  } = useSignIn();

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
        <AnimationModule {...animationProps} />
      </Grid>
    </GridContainer>
  );
};

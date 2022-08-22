import React from 'react';
import { Formik } from 'formik';
import { Button, Grid } from '@mui/material';
import { ReactFC } from '@dash/module-domain';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule } from '@dash/module-components';

import { Header } from 'lib/shared';
import { PaperForm } from './styles';
import { useSignIn } from 'services/talons';
import { GridContainer, PaperFormWrapper, Form } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const {
    compProps: { formikProps, formProps, signInModuleProps, buttonProps, animationProps }
  } = useSignIn();

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={PaperForm}>
          <Formik {...formikProps}>
            <Form {...formProps}>
              <SignInModule {...signInModuleProps} />
              <Button {...buttonProps}>Entrar</Button>
            </Form>
          </Formik>
        </PaperFormWrapper>
      </Grid>
      <Grid item md={6}>
        <AnimationModule {...animationProps} />
      </Grid>
    </GridContainer>
  );
};

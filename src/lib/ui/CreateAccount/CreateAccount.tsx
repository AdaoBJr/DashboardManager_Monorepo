import React from 'react';
import { Button, Grid } from '@mui/material';
import { ReactFC } from '@dash/module-domain';
import { AnimationModule, AvatarModule } from '@dash/module-components';
import { CreateAccountModule } from '@dash/module-customer';

import { Formik } from 'formik';
import { Header } from 'lib/shared';
import { PaperForm } from './styles';
import { useCreateAccount } from 'services/talons';
import { Form, GridContainer, PaperFormWrapper } from 'lib/shared/__styles__';

export const CreateAccount: React.FC<ReactFC> = () => {
  const {
    compProps: {
      formProps,
      formikProps,
      createAccountModuleProps,
      buttonProps,
      avatarProps,
      animationProps
    }
  } = useCreateAccount();

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={PaperForm}>
          <Formik {...formikProps}>
            <Form {...formProps}>
              <CreateAccountModule {...createAccountModuleProps} />
              <Button {...buttonProps}>Enviar</Button>
            </Form>
          </Formik>
        </PaperFormWrapper>
      </Grid>
      <Grid item md={6}>
        <AvatarModule {...avatarProps} />
        <AnimationModule {...animationProps} />
      </Grid>
    </GridContainer>
  );
};

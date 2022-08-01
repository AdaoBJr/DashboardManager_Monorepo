import React from 'react';
import { Button, Grid } from '@mui/material';
import { AnimationModule } from '@dash/module-components';
import { CreateAccountModule } from '@dash/module-customer';

import { Header } from 'lib/shared';
import { PaperForm } from './styles';
import { ReactFC } from 'types/interface';
import { useCreateAccount } from 'services/talons';
import { Form, GridContainer, PaperFormWrapper } from 'lib/shared/__styles__';

export const CreateAccount: React.FC<ReactFC> = () => {
  const {
    compProps: { formProps, createAccountModuleProps, buttonProps, animationProps }
  } = useCreateAccount();

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={PaperForm}>
          <Form {...formProps}>
            <CreateAccountModule {...createAccountModuleProps} />
            <Button {...buttonProps}>Enviar</Button>
          </Form>
        </PaperFormWrapper>
      </Grid>
      <Grid item md={6}>
        <AnimationModule {...animationProps} />
      </Grid>
    </GridContainer>
  );
};

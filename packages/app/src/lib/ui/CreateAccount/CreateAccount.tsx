import React, { SyntheticEvent, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { CreateAccountModule } from '@dash/module-customer';

import { Header } from 'lib/shared';
import { createAccount } from 'articles';
import { ReactFC } from 'types/interface';
import { CreateAccountDomain } from 'types/domain';
import { useCreateCustomer } from 'services/infra/requests';
import {
  BoxFormWrapper,
  Form,
  GridContainer,
  PaperFormWrapper
} from 'lib/shared/__styles__';

export const CreateAccount: React.FC<ReactFC> = () => {
  const [values, setValues] = useState({} as CreateAccountDomain);
  const { mutate, response } = useCreateCustomer({ values });

  const handleBlur = (value: CreateAccountDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <BoxFormWrapper>
        <PaperFormWrapper>
          <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <CreateAccountModule
              container={{ spacing: 1 }}
              input={{
                sx: { width: '100%', '& .MuiInputBase-input': { padding: '10px 12px' } }
              }}
              articles={createAccount}
              onBlur={handleBlur}
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>
        </PaperFormWrapper>
      </BoxFormWrapper>
    </GridContainer>
  );
};

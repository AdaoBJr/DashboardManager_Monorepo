import React from 'react';
import { Grid } from '@mui/material';
import { ReactFC } from 'types/interface';
import { useCustomerRequests } from 'services/gql';
import { CreateAccountModule } from '@dash/module-customer';

export const CreateAccount: React.FC<ReactFC> = () => {
  const { createCustomer } = useCustomerRequests();
  const data = {
    firstname: 'Adam1',
    lastname: 'Jr',
    email: 'adam1@mail.com',
    dateOfBirth: '25/07/1990',
    gender: 1,
    cpf: '028905361-73',
    country: 'BR',
    telephone: '99225-2201',
    subscribe: false,
    password: '1234'
  };

  const response = createCustomer({ data });

  console.log('response', response);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Grid container>
        <CreateAccountModule />
      </Grid>
    </div>
  );
};

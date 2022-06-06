import React from 'react';
import { ReactFC } from 'types/interface';
import { useCustomer } from 'services/gql';
import { CreateAccountModule } from '@dash/module-customer';

export const CreateAccount: React.FC<ReactFC> = () => {
  const { createCustomer } = useCustomer();
  const data = {
    firstname: 'Adam1',
    lastname: 'Jr',
    password: '1234',
    email: 'adam1@mail.com',
    dateOfBirth: '25/07/1990',
    gender: 1,
    country: 'BR',
    cpf: '028905361-73',
    telephone: '99225-2201',
    subscribe: false
  };

  const response = createCustomer({ data });

  console.log('response', response);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CreateAccountModule />
    </div>
  );
};

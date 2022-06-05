import React from 'react';
import { useQuery } from 'react-query';
import { Customer, ReactFC } from 'types/interface';
import { CreateAccountModule } from '@dash/module-customer';

import { useRequest } from 'services/hooks';
import { createCustomerGQL } from 'gql/customer';

export const CreateAccount: React.FC<ReactFC> = () => {
  const request = useRequest();

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
  const { query, variables } = createCustomerGQL({ data });

  const { data: response } = useQuery<Customer[]>('customers', async () => {
    const response = await request.graphql('customers', { query, variables });
    return response.data.customer.variables.v1;
  });

  console.log('response', response);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CreateAccountModule />
    </div>
  );
};

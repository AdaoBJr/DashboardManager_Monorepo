import React from 'react';
import { useQuery } from 'react-query';
import { Customer, ReactFC } from 'types/interface';
import { CreateAccountModule } from '@dash/module-customer';

import { useRestRequest } from 'services/hooks';

export const CreateAccount: React.FC<ReactFC> = () => {
  const request = useRestRequest();
  const { data, isLoading } = useQuery<Customer[]>('customers', async () => {
    const { data } = await request.get('customers');
    return data.customers;
  });

  console.log('data', data);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CreateAccountModule />
    </div>
  );
};

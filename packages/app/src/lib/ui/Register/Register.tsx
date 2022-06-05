import React from 'react';
import { CreateAccount } from '@dash/module-customer';
import { ReactFC } from 'types/interface';

export const Register: React.FC<ReactFC> = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CreateAccount />
    </div>
  );
};

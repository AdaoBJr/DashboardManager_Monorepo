import React from 'react';
import { CreateAccount } from '@dash/user';
import { ReactFC } from 'types/interface';

export const Register: React.FC<ReactFC> = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CreateAccount />
    </div>
  );
};

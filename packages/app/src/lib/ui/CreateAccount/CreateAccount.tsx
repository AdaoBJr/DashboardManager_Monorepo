import React from 'react';
import { ReactFC } from 'types/interface';
import { CreateAccountModule } from '@dash/module-customer';

export const CreateAccount: React.FC<ReactFC> = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CreateAccountModule />
    </div>
  );
};

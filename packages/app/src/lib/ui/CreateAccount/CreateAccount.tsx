import React from 'react';
import { ReactFC } from 'types/interface';
import { useCustomerRequests } from 'services/gql';
import { CreateAccountModule } from '@dash/module-customer';
import { BoxContainer, PaperWrapper } from './styles';

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
    <BoxContainer>
      <PaperWrapper>
        <CreateAccountModule
          container={{ spacing: 1 }}
          input={{
            sx: { width: '100%', '& .MuiInputBase-input': { padding: '10px 12px' } }
          }}
        />
      </PaperWrapper>
    </BoxContainer>
  );
};

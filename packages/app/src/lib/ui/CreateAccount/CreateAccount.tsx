import React, { SyntheticEvent, useState } from 'react';
import { Button } from '@mui/material';
import { CreateAccountModule } from '@dash/module-customer';

import { ReactFC } from 'types/interface';
import { CreateAccountDomain } from 'types/domain';
import { useCreateCustomer } from 'services/infra/requests';
import { BoxContainer, Form, PaperWrapper } from 'lib/shared/__styles__';

export const CreateAccount: React.FC<ReactFC> = () => {
  const [values, setValues] = useState({} as CreateAccountDomain);
  const { mutate, response } = useCreateCustomer({ values });

  const handleBlur = (value: CreateAccountDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
    console.log('response', response);
  };

  return (
    <BoxContainer>
      <PaperWrapper>
        <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <CreateAccountModule
            container={{ spacing: 1 }}
            input={{
              sx: { width: '100%', '& .MuiInputBase-input': { padding: '10px 12px' } }
            }}
            onBlur={handleBlur}
          />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>
        </Form>
      </PaperWrapper>
    </BoxContainer>
  );
};

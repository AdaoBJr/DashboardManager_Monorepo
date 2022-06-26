import React, { SyntheticEvent, useState } from 'react';
import { Button } from '@mui/material';
import { SignInModule } from '@dash/module-customer';

import { ReactFC } from 'types/interface';
import { SignInDomain } from 'types/domain';
import { useSignInCustomer } from 'services/infra/requests';
import { BoxContainer, Form, PaperWrapper } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const [values, setValues] = useState({} as SignInDomain);
  const { mutate, response } = useSignInCustomer({ data: values });

  const handleBlur = (value: SignInDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  return (
    <BoxContainer>
      <PaperWrapper>
        <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <SignInModule
            container={{ spacing: 1 }}
            input={{
              sx: { width: '100%', '& .MuiInputBase-input': { p: '10px 12px' } }
            }}
            onBlur={handleBlur}
          />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Entrar
          </Button>
        </Form>
      </PaperWrapper>
    </BoxContainer>
  );
};

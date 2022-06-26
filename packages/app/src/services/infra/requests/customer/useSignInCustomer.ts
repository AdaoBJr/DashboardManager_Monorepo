import { useState } from 'react';
import { useMutation } from 'react-query';

import { queryRequest } from 'services/utils';
import { SignInDomain } from 'types/domain';
import { SignInProps } from 'types/interface';
import { signInCustomerGQL } from 'services/gql/customer';

export const useSignInCustomer = ({ data }: SignInProps) => {
  const [response, setResponse] = useState<SignInDomain>();

  const gql = signInCustomerGQL({ data });
  const { mutate } = useMutation<SignInDomain>(
    async () => await queryRequest({ route: 'login', gql, db: 'customer' }),
    {
      onSuccess: response => setResponse(response)
    }
  );

  console.log('response', response);
  return { mutate, response };
};

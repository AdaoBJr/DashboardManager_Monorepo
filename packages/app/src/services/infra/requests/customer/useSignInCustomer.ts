import { useState } from 'react';
import { useMutation } from 'react-query';

import { queryResquest } from 'services/utils';
import { SignInDomain } from 'types/domain';
import { SignInProps } from 'types/interface';
import { signInCustomerGQL } from 'services/gql/customer';

export const useSignInCustomer = ({ data }: SignInProps) => {
  const [response, setResponse] = useState<SignInDomain>();

  const gql = signInCustomerGQL({ data });
  const { mutate } = useMutation<SignInDomain>(
    async () => await queryResquest({ route: 'login', gql, db: 'customer' }),
    {
      onSuccess: response => setResponse(response)
    }
  );

  return { mutate, response };
};

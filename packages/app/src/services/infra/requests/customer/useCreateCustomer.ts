import { useState } from 'react';
import { useMutation } from 'react-query';

import { queryRequest } from 'services/utils';
import { CreateAccountDomain } from 'types/domain';
import { CreateCustomerProps } from 'types/interface';
import { createCustomerGQL } from 'services/gql/customer';

export const useCreateCustomer = ({ values }: CreateCustomerProps) => {
  const [response, setResponse] = useState<CreateAccountDomain>();

  const gql = createCustomerGQL({ values });
  const { mutate } = useMutation<CreateAccountDomain>(
    () => queryRequest({ route: 'register', gql, db: 'customer' }),
    {
      onSuccess: response => setResponse(response)
    }
  );

  return { mutate, response };
};

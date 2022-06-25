import { useState } from 'react';
import { useMutation } from 'react-query';

import { key, db } from './query';
import { queryResquest } from 'services/utils';
import { CreateAccountDomain } from 'types/domain';
import { CreateCustomerValues } from 'types/interface';
import { createCustomerGQL } from 'services/gql/customer';

export const useCreateCustomer = ({ values }: CreateCustomerValues) => {
  const [response, setResponse] = useState<CreateAccountDomain>();

  const gql = createCustomerGQL({ values });
  const { mutate } = useMutation<CreateAccountDomain>(
    () => queryResquest({ route: key, gql, db }),
    {
      onSuccess: response => setResponse(response)
    }
  );

  return { mutate, response };
};

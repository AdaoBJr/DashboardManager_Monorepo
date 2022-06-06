import { useQuery } from 'react-query';

import { createCustomerGQL } from 'services/gql';
import { queryResquest } from 'services/utils';
import { Customer, CreateCustomerData } from 'types/interface';

const db = 'customer';
const route = 'customers';

export const useCustomer = () => {
  const createCustomer = ({ data }: CreateCustomerData) => {
    const gql = createCustomerGQL({ data });

    return useQuery<Customer[]>(
      route,
      async () => await queryResquest({ route, gql, db })
    );
  };

  return { createCustomer };
};

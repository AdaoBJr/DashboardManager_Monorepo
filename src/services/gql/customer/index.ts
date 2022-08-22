import { generateMutationOp } from '../generated';
import { CreateCustomerProps, SignInProps } from 'types/interface';

export const createCustomerGQL = ({ values }: CreateCustomerProps) =>
  generateMutationOp({
    createCustomer: [
      { data: values },
      { customer: { id: true, email: true, firstname: true } }
    ]
  });

export const signInCustomerGQL = ({ data }: SignInProps) =>
  generateMutationOp({
    signInCustomer: [{ data }, { token: true }]
  });

import { generateMutationOp } from '../generated';
import { CreateCustomerValues } from 'types/interface';
// import { InputDataCreateAccount } from '../../lib/services/talons/useCreateAccount';
// import { InputDataSignIn } from '../../lib/services/talons/useSignIn';

// interface CreateCustomerData {
//   data: InputDataCreateAccount;
// }

// interface SignInData {
//   data: InputDataSignIn;
// }

export const createCustomerGQL = ({ values }: CreateCustomerValues) =>
  generateMutationOp({
    createCustomer: [
      { data: values },
      { customer: { id: true, email: true, firstname: true } }
    ]
  });

// export const signInCustomerGQL = ({ data }: SignInData) =>
//   generateMutationOp({
//     signInCustomer: [{ data }, { token: true }]
//   });

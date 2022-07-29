import { SyntheticEvent, useMemo, useState } from 'react';
import { LinksProps } from '@dash/module-components/src/types/interface';

import { SignInDomain } from 'types/domain';
import { useSignInCustomer } from 'services/infra/requests';

export const useSignIn = () => {
  const [values, setValues] = useState({} as SignInDomain);
  const { mutate, response } = useSignInCustomer({ data: values });

  const handleBlur = (value: SignInDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  const dataLinks = useMemo(
    (): LinksProps => ({
      dataLinks: [
        { name: 'Home', url: '/home' },
        { name: 'Quem Somos', url: '/somos' },
        { name: 'Contato', url: 'contato' }
      ]
    }),
    []
  );

  return { handleBlur, handleSubmit, dataLinks: dataLinks.dataLinks, response };
};

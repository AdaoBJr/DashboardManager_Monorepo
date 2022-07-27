import { SyntheticEvent, useMemo, useState } from 'react';
import { Links } from '@dash/module-components/src/types/interface';

import { SignInDomain } from 'types/domain';
import { useSignInStyles } from 'lib/ui/SignIn/styles';
import { useSignInCustomer } from 'services/infra/requests';

export const useSignIn = () => {
  const { HeaderLinkItemStyled, HeaderLinkContainerStyled } = useSignInStyles();

  const [values, setValues] = useState({} as SignInDomain);
  const { mutate, response } = useSignInCustomer({ data: values });

  const handleBlur = (value: SignInDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  const links = useMemo(
    (): Links => ({
      data: [
        { name: 'Home', url: '/home' },
        { name: 'Quem Somos', url: '/somos' },
        { name: 'Contato', url: 'contato' }
      ],
      CSSLinkContainer: { ...HeaderLinkContainerStyled },
      CSSLinkItem: { ...HeaderLinkItemStyled }
    }),
    []
  );

  return { handleBlur, handleSubmit, links, response };
};

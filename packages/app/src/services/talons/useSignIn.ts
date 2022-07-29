import { useMediaQuery } from '@mui/material';
import { SyntheticEvent, useMemo, useState } from 'react';
import { HeaderModuleProps, LinksProps } from '@dash/module-components';

import { useAppContext } from 'context';
import { SignInDomain } from 'types/domain';
import logo from 'assets/images/logoGoDash.png';
import { useSignInCustomer } from 'services/infra/requests';
import { LinkContainer, LinkItem } from 'lib/ui/SignIn/styles';

export const useSignIn = () => {
  const { theme } = useAppContext();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [values, setValues] = useState({} as SignInDomain);
  const { mutate, response } = useSignInCustomer({ data: values });

  const handleBlur = (value: SignInDomain) => setValues({ ...values, ...value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(values as any);
  };

  const { dataLinks } = useMemo(
    (): LinksProps => ({
      dataLinks: [
        { name: 'Home', url: '/home' },
        { name: 'Quem Somos', url: '/somos' },
        { name: 'Contato', url: 'contato' }
      ]
    }),
    []
  );

  const windowSize = useMemo(() => ({ smDown }), [smDown, theme]);

  const compProps = useMemo(
    () => ({
      headerModules: {
        windowSize,
        src: logo,
        linksProps: {
          dataLinks,
          sx: { container: LinkContainer, item: LinkItem }
        }
      } as HeaderModuleProps
    }),
    [theme, logo, LinkContainer, LinkItem]
  );

  return { handleBlur, handleSubmit, compProps, windowSize, response };
};

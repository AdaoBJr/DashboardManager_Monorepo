import { useMemo } from 'react';
import { HeaderModuleProps } from '@dash/module-components';

import { ContainerHeader, LinkContainer, LinkItem } from 'lib/shared/Header/styles';

export interface useHeaderProps extends HeaderModuleProps {}

export const useHeader = (props: useHeaderProps = {}) => {
  const { headerProps } = useMemo(
    () => ({
      headerProps: {
        ...props,
        sx: ContainerHeader,
        linksProps: {
          ...props.linksProps,
          sx: { container: LinkContainer, item: LinkItem }
        }
      } as HeaderModuleProps
    }),
    [props]
  );
  return { headerProps };
};

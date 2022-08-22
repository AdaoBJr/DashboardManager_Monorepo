import React from 'react';
import { HeaderModule, HeaderModuleProps } from '@dash/module-components';

import { useHeader } from 'services/talons';

export const Header: React.FC<HeaderModuleProps> = props => {
  const { headerProps } = useHeader(props);
  return <HeaderModule {...headerProps} />;
};

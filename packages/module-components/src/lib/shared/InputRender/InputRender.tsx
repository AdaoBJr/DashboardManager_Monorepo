import React from 'react';

import { useInputRender } from '../../../services/talons';
import { RenderCompProps } from '../../../types/interface';

export const InputRenderModule: React.FC<RenderCompProps> = props => {
  const { renderComponent } = useInputRender(props);
  return renderComponent();
};

import { useCallback } from 'react';
import {
  InputTextModule,
  DropdownModule,
  InputDateModule,
  InputCheckModule
} from '../../lib/ui';

import { RenderCompProps } from '../../types/interface';

export const useInputRender = (props: RenderCompProps) => {
  const { type, compProps } = props;

  const renderComponent = useCallback(() => {
    switch (type) {
      case 'dropdown' || 'select':
        return <DropdownModule {...compProps} />;

      case 'text':
        return <InputTextModule {...compProps} />;

      case 'date':
        return <InputDateModule {...compProps} />;

      case 'checkbox':
        return <InputCheckModule {...compProps} />;

      default:
        return <InputTextModule {...compProps} />;
    }
  }, [type, compProps]);

  return { renderComponent };
};

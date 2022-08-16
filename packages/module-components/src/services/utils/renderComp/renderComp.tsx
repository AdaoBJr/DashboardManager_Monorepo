import { ComponentsModule } from '../../../types/shared';
import {
  InputTextModule,
  DropdownModule,
  InputDateModule,
  InputCheckModule
} from '../../../lib/ui';
import { ErrorMessage, Field } from 'formik';

export const renderComp = (type: string, compProps: ComponentsModule) => {
  switch (type) {
    case 'dropdown' || 'select':
      return <DropdownModule {...compProps} />;

    case 'text':
      return <Field as={InputTextModule} {...compProps} />;

    case 'date':
      return <Field as={InputDateModule} {...compProps} />;

    case 'checkbox':
      return <Field as={InputCheckModule} {...compProps} />;

    default:
      return <Field as={InputTextModule} {...compProps} />;
  }
};

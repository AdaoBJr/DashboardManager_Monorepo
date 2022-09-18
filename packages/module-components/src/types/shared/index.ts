import { FormikConfig, FormikValues } from 'formik';
import { TextFieldProps, TypographyProps } from '@mui/material';

export interface ReactFC {
  children?: React.ReactNode;
}

export interface InputComponent {
  muiProps: TextFieldProps;
}

export interface TextComponent extends ReactFC {
  muiProps: TypographyProps;
}

export interface FormComponent extends ReactFC {
  formikProps: FormikConfig<FormikValues>;
}

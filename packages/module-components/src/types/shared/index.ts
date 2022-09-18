import { FormikConfig, FormikValues } from 'formik';
import { ButtonProps, TextFieldProps, TypographyProps } from '@mui/material';

export interface ReactFC {
  children?: React.ReactNode;
}

export interface InputComponent {
  muiProps: TextFieldProps;
}

export interface TextComponent extends ReactFC {
  muiProps: TypographyProps;
}

export interface ButtonComponent extends ReactFC {
  muiProps: ButtonProps;
}

export interface FormComponent extends ReactFC {
  formikProps: FormikConfig<FormikValues>;
}

import { ErrorMessage } from 'formik';
import { dropdownOptions } from 'types/shared';
const { country, gender } = dropdownOptions;

export const createAccountTitle = {
  xs: 12,
  sm: undefined,
  id: 'title',
  name: 'Registre-se'
};

export const createAccountInputs = [
  {
    xs: 12,
    sm: undefined,
    type: 'text',
    id: 'firstname',
    name: 'firstname',
    label: 'Nome',
    helperText: <ErrorMessage name="firstname" />
  },
  {
    xs: 12,
    sm: undefined,
    type: 'text',
    id: 'lastname',
    name: 'lastname',
    label: 'Sobrenome',
    helperText: <ErrorMessage name="lastname" />
  },
  {
    xs: 12,
    sm: 6,
    type: 'text',
    id: 'email',
    name: 'email',
    label: 'E-mail',
    helperText: <ErrorMessage name="email" />
  },
  {
    xs: 12,
    sm: 6,
    type: 'text',
    id: 'telephone',
    name: 'telephone',
    label: 'Telefone',
    helperText: <ErrorMessage name="telephone" />
  },
  {
    xs: 12,
    sm: 6,
    type: 'date',
    id: 'dateOfBirth',
    name: 'dateOfBirth',
    label: 'Data de aniversário',
    helperText: <ErrorMessage name="dateOfBirth" />
  },
  {
    xs: 12,
    sm: 6,
    type: 'dropdown',
    id: 'gender',
    name: 'gender',
    label: 'Selecione um gênero',
    options: gender,
    helperText: <ErrorMessage name="gender" />
  },
  {
    xs: 12,
    sm: 6,
    id: 'cpf',
    name: 'cpf',
    label: 'CPF',
    helperText: <ErrorMessage name="cpf" />
  },
  {
    xs: 12,
    sm: 6,
    id: 'country',
    name: 'country',
    type: 'dropdown',
    label: 'Selecione um país:',
    options: country,
    helperText: <ErrorMessage name="country" />
  },
  {
    xs: 12,
    sm: undefined,
    type: 'text',
    id: 'password',
    name: 'password',
    label: 'Senha',
    helperText: <ErrorMessage name="password" />
  },
  {
    xs: 12,
    sm: undefined,
    type: 'text',
    id: 'password_confirm',
    name: 'password_confirm',
    label: 'Confirme a senha',
    helperText: <ErrorMessage name="password_confirm" />
  },
  {
    xs: 12,
    sm: undefined,
    id: 'subscribe',
    type: 'checkbox',
    name: 'subscribe',
    label: 'Se Inscreva'
  }
];

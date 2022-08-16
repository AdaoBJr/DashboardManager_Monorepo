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
    id: 'firstname',
    name: 'firstname',
    label: 'Nome',
    type: 'text'
  },
  {
    xs: 12,
    sm: undefined,
    id: 'lastname',
    name: 'lastname',
    label: 'Sobrenome',
    type: 'text'
  },
  {
    xs: 12,
    sm: 6,
    id: 'email',
    name: 'email',
    label: 'E-mail',
    type: 'text'
  },
  {
    xs: 12,
    sm: 6,
    id: 'telephone',
    name: 'telephone',
    label: 'Telefone',
    type: 'text'
  },
  {
    xs: 12,
    sm: 6,
    id: 'dateOfBirth',
    name: 'dateOfBirth',
    label: 'Data de aniversário',
    type: 'date'
  },
  {
    xs: 12,
    sm: 6,
    id: 'gender',
    name: 'gender',
    label: 'Selecione um gênero',
    type: 'dropdown',
    options: gender
  },
  { xs: 12, sm: 6, id: 'cpf', name: 'cpf', label: 'CPF', select: false },
  {
    xs: 12,
    sm: 6,
    id: 'country',
    name: 'country',
    label: 'Selecione um país:',
    type: 'dropdown',
    options: country
  },
  {
    xs: 12,
    sm: undefined,
    id: 'password',
    name: 'password',
    label: 'Senha',
    type: 'text'
  },
  {
    xs: 12,
    sm: undefined,
    id: 'password_confirm',
    name: 'password_confirm',
    label: 'Confirme a senha',
    type: 'text'
  },
  {
    xs: 12,
    sm: undefined,
    id: 'subscribe',
    name: 'subscribe',
    label: 'Se Inscreva',
    type: 'checkbox'
  }
];

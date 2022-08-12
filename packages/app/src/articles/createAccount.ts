import { valuesRegisterInittial } from 'types/shared';
const { country, gender } = valuesRegisterInittial;

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
    select: false
  },
  {
    xs: 12,
    sm: undefined,
    id: 'lastname',
    name: 'lastname',
    label: 'Sobrenome',
    select: false
  },
  {
    xs: 12,
    sm: undefined,
    id: 'email',
    name: 'email',
    label: 'E-mail',
    select: false
  },
  {
    xs: 12,
    sm: 6,
    id: 'dateOfBirth',
    name: 'dateOfBirth',
    label: 'Data de aniversário',
    select: false
  },
  {
    xs: 12,
    sm: 6,
    id: 'gender',
    name: 'gender',
    label: 'Selecione um Gênero:',
    select: true,
    inittial: gender
  },
  { xs: 12, sm: 6, id: 'cpf', name: 'cpf', label: 'CPF', select: false },
  {
    xs: 12,
    sm: 6,
    id: 'country',
    name: 'country',
    label: 'Selecione um País:',
    select: true,
    inittial: country
  },
  {
    xs: 12,
    sm: 6,
    id: 'telephone',
    name: 'telephone',
    label: 'Telefone',
    select: false
  },
  {
    xs: 12,
    sm: 6,
    id: 'subscribe',
    name: 'subscribe',
    label: 'Se Inscreva',
    select: false
  },
  {
    xs: 12,
    sm: undefined,
    id: 'password',
    name: 'password',
    label: 'Senha',
    select: false
  },
  {
    xs: 12,
    sm: undefined,
    id: 'password_confirm',
    name: 'password_confirm',
    label: 'Confirme a senha',
    select: false
  }
];

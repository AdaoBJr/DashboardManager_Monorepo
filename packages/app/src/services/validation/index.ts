import * as yup from 'yup';

export const email = yup
  .string()
  .email('Entre com um e-mail válido.')
  .required('Campo obrigatório.');

export const password = yup
  .string()
  .matches(/^(?=.*[A-Z][a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
  })
  .required('Campo obrigatório.');

export const password_confirm = yup
  .string()
  .oneOf([yup.ref('password'), null], 'As senham devem ser iguais.')
  .required('Campo obrigatório.');

export const firstname = yup
  .string()
  .min(3, 'Entre com um nome com no mínimo 3 caracteres.')
  .required('Campo obrigatório.');

export const lastname = yup
  .string()
  .min(3, 'Entre com um sobrenome com no mínimo 3 caracteres.')
  .required('Campo obrigatório.');

export const dateOfBirth = yup
  .date()
  .default(() => new Date())
  .min(10, 'Entre com uma data no formato DD/MM/AAAA.')
  .required('Campo obrigatório.');

export const cpf = yup
  .string()
  .min(11, 'Entre com o número de cpf com 11 dígitos e sem o hífen.')
  .required('Campo obrigatório.');

export const country = yup.string();

export const telephone = yup
  .string()
  .min(11, 'Entre com o número de telefone com o DDD.')
  .required('Campo obrigatório.');

import * as yup from 'yup';

export const email = yup
  .string()
  .email('Entre com um e-mail válido.')
  .required('Obrigatório.');

export const password = yup
  .string()
  .matches(/^(?=.*[A-Z][a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
  })
  .required('Obrigatório.');

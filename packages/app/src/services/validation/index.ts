import * as Yup from 'yup';

export const form = {
  email: Yup.string()
    .email('Entre com um e-mail válido.')
    .required('Campo obrigatório.'),
  password: Yup.string()
    .matches(/^(?=.*[A-Z][a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message:
        'A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
    })
    .required('Campo obrigatório.'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senham devem ser iguais.')
    .required('Campo obrigatório.'),
  firstname: Yup.string()
    .min(3, 'Entre com um nome com no mínimo 3 caracteres.')
    .required('Campo obrigatório.'),
  lastname: Yup.string()
    .min(3, 'Entre com um sobrenome com no mínimo 3 caracteres.')
    .required('Campo obrigatório.'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Não é possível incluir uma data futura.')
    .required('Campo obrigatório.'),
  cpf: Yup.string()
    .min(11, 'Entre com o número de cpf com 11 dígitos e sem o hífen.')
    .required('Campo obrigatório.'),
  telephone: Yup.string()
    .min(11, 'Entre com o número de telefone com o DDD.')
    .required('Campo obrigatório.')
};

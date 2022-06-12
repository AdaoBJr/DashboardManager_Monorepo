import React, { ChangeEvent, useCallback, useState } from 'react';
import { Grid, GridProps, TextField, TextFieldProps } from '@mui/material';
import { ReactFC } from 'types/interface';
import { CreateAccountDomain } from 'types/domain';

interface CreateAccountProps extends ReactFC {
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  onBlur?: (values: CreateAccountDomain) => void;
}

export const CreateAccountModule: React.FC<CreateAccountProps> = ({
  container,
  item,
  input,
  onBlur
}) => {
  const [values, setValues] = useState({} as CreateAccountDomain);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [target.name]: target.value }),
    [setValues]
  );

  return (
    <Grid container {...container}>
      <Grid item xs={12} {...item}>
        <TextField
          id="firstname"
          name="firstname"
          label="Nome"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="lastname"
          name="lastname"
          label="Sobrenome"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="email"
          name="email"
          label="E-mail"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="dateOfBirth"
          name="dateOfBirth"
          label="Data de aniversário"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="gender"
          name="gender"
          label="Genero"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="cpf"
          name="cpf"
          label="CPF"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="country"
          name="country"
          label="País"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="telephone"
          name="telephone"
          label="Telefone"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="subscribe"
          name="subscribe"
          label="Se inscreva"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="password"
          name="password"
          label="Senha"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="password_confirm"
          name="password_confirm"
          label="Confirme a senha"
          variant={input?.variant || 'outlined'}
          onChange={handleChange}
          onBlur={() => onBlur?.({ ...values })}
          {...input}
        />
      </Grid>
    </Grid>
  );
};

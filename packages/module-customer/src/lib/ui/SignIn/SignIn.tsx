import React, { ChangeEvent, useCallback, useState } from 'react';
import { Grid, GridProps, TextField, TextFieldProps } from '@mui/material';

import { ReactFC } from 'types/interface';
import { SignInDomain } from '../../../types/domain';

interface SignInProps extends ReactFC {
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
  onBlur?: (values: SignInDomain) => void;
}

export const SignInModule: React.FC<SignInProps> = ({
  container,
  item,
  input,
  onBlur
}) => {
  const [values, setValues] = useState({} as SignInDomain);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [target.name]: target.value }),
    [setValues]
  );

  return (
    <Grid container {...container}>
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
    </Grid>
  );
};

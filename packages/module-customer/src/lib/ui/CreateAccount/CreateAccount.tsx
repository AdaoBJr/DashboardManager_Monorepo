import React from 'react';
import { Grid, GridProps, TextField, TextFieldProps, Theme } from '@mui/material';
import { ReactFC } from 'types/interface';

interface CreateAccountProps extends ReactFC {
  container?: GridProps;
  item?: GridProps;
  input?: TextFieldProps;
}

export const CreateAccountModule: React.FC<CreateAccountProps> = ({
  container,
  item,
  input
}) => {
  const response = { warning: false, loading: false };
  return (
    <Grid container {...container}>
      <Grid item xs={12} {...item}>
        <TextField
          id="firstname"
          name="firstname"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="lastname"
          name="lastname"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="email"
          name="email"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="dateOfBirth"
          name="dateOfBirth"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="gender"
          name="gender"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="cpf"
          name="cpf"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="country"
          name="country"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="telephone"
          name="telephone"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} sm={6} {...item}>
        <TextField
          id="subscribe"
          name="subscribe"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="password"
          name="password"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
      <Grid item xs={12} {...item}>
        <TextField
          id="password_confirm"
          name="password_confirm"
          variant={input?.variant || 'outlined'}
          {...input}
        />
      </Grid>
    </Grid>
  );
};

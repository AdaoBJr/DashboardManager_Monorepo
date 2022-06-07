import React from 'react';
import { Grid, SxProps, TextField, Theme } from '@mui/material';
import { ReactFC } from 'types/interface';

interface CreateAccountProps extends ReactFC {
  sx?: SxProps<Theme>;
  variant?: 'outlined' | 'filled' | 'standard';
}

export const CreateAccountModule: React.FC<CreateAccountProps> = ({ sx, variant }) => {
  const response = { warning: false, loading: false };
  return (
    <>
      <Grid item xs={12}>
        <TextField
          id="firstname"
          name="firstname"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="lastname"
          name="lastname"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="email"
          name="email"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="dateOfBirth"
          name="dateOfBirth"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="gender"
          name="gender"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField id="cpf" name="cpf" sx={{ ...sx }} variant={variant || 'outlined'} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="country"
          name="country"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="telephone"
          name="telephone"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="subscribe"
          name="subscribe"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="password"
          name="password"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="password_confirm"
          name="password_confirm"
          sx={{ ...sx }}
          variant={variant || 'outlined'}
        />
      </Grid>
    </>
  );
};

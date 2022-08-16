import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputTextModule } from '@dash/module-components';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, Typography } from '@mui/material';

import { useSignIn } from '../../../services/talons';
import { SignInProps } from '../../../types/interface';

export const SignInModule: React.FC<SignInProps> = ({
  title,
  container,
  item,
  input,
  articles,
  showPwd,
  handleErrors,
  handleShowPassword
}) => {
  useSignIn({ handleErrors });

  return (
    <Grid container {...container}>
      {title?.name && (
        <Grid item xs={title.xs} sm={title.sm} {...title?.item}>
          <Typography variant="h6" sx={{ ...title?.sx }} {...title?.text}>
            {title.name}
          </Typography>
        </Grid>
      )}
      {articles?.map(data => (
        <Grid key={data.id} item xs={data.xs} sm={data.sm} {...item}>
          <Field
            as={InputTextModule}
            {...data}
            type={showPwd || data.name !== 'password' ? 'text' : 'password'}
            variant={input?.variant || 'outlined'}
            InputProps={{
              endAdornment: data.name === 'password' && (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPwd ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            {...input}
          />
        </Grid>
      ))}
    </Grid>
  );
};

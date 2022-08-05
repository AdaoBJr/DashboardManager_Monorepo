import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Grid, Typography } from '@mui/material';
import { InputText } from '@dash/module-components';

import { SignInProps } from '../../../types/interface';

export const SignInModule: React.FC<SignInProps> = ({
  title,
  container,
  item,
  input,
  articles
}) => (
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
          as={InputText}
          {...data}
          variant={input?.variant || 'outlined'}
          helperText={<ErrorMessage name={data.name} />}
          {...input}
        />
      </Grid>
    ))}
  </Grid>
);

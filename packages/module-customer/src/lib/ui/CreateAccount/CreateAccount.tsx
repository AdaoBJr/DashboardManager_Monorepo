import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { Grid, Typography } from '@mui/material';
import { InputText } from '@dash/module-components';

import { CreateAccountProps } from '../../../types/interface';
import { useCreateAccount } from '../../../services/talons';

export const CreateAccountModule: React.FC<CreateAccountProps> = ({
  title,
  container,
  item,
  input,
  articles,
  handleErrors
}) => {
  useCreateAccount({ handleErrors });

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
};

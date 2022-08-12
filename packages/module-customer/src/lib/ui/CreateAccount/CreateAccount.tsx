import React, { ChangeEvent, useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import { Grid, MenuItem, Typography } from '@mui/material';
import { InputText } from '@dash/module-components';

import { useCreateAccount } from '../../../services/talons';
import { CreateAccountProps } from '../../../types/interface';

export const CreateAccountModule: React.FC<CreateAccountProps> = ({
  title,
  container,
  item,
  input,
  articles,
  handleErrors
}) => {
  const { dropValues, isDate, handleDropChange } = useCreateAccount({
    handleErrors
  });

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
          {data.select && data.inittial ? (
            <Field
              as={InputText}
              value={dropValues[data.name]}
              type={isDate(data.name, data.id) ? 'date' : 'text'}
              InputLabelProps={isDate(data.name, data.id) ? { shrink: true } : {}}
              {...data}
              variant={input?.variant || 'outlined'}
              helperText={<ErrorMessage name={data.name} />}
              onChange={handleDropChange}
              {...input}
            >
              {data.inittial?.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Field>
          ) : (
            <Field
              as={InputText}
              type={isDate(data.name, data.id) ? 'date' : 'text'}
              InputLabelProps={isDate(data.name, data.id) ? { shrink: true } : {}}
              {...data}
              variant={input?.variant || 'outlined'}
              helperText={<ErrorMessage name={data.name} />}
              {...input}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

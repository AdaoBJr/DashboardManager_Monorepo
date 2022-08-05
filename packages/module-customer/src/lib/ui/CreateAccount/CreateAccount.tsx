import React, { ChangeEvent, useCallback, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { InputText } from '@dash/module-components';

import { CreateAccountDomain } from 'types/domain';
import { CreateAccountProps } from '../../../types/interface';

export const CreateAccountModule: React.FC<CreateAccountProps> = ({
  title,
  container,
  item,
  input,
  articles,
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
      {title?.name && (
        <Grid item xs={title.xs} sm={title.sm} {...title?.item}>
          <Typography variant="h6" sx={{ ...title?.sx }} {...title?.text}>
            {title.name}
          </Typography>
        </Grid>
      )}
      {articles?.map(data => (
        <Grid key={data.id} item xs={data.xs} sm={data.sm} {...item}>
          <InputText
            {...data}
            variant={input?.variant || 'outlined'}
            onChange={handleChange}
            onBlur={() => onBlur?.({ ...values })}
            {...input}
          />
        </Grid>
      ))}
    </Grid>
  );
};

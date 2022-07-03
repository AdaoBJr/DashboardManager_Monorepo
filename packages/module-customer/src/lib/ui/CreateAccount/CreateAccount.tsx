import React, { ChangeEvent, useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import { InputText } from '@dash/module-components';

import { CreateAccountDomain } from 'types/domain';
import { CreateAccountProps } from '../../../types/interface';

export const CreateAccountModule: React.FC<CreateAccountProps> = ({
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

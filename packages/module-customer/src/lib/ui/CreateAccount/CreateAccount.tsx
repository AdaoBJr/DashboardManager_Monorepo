import React from 'react';
import { Grid, Typography } from '@mui/material';
import { renderComp } from '@dash/module-components';

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
          {renderComp(data.type, { data, input })}
        </Grid>
      ))}
    </Grid>
  );
};

import React from 'react';
import { SxProps, TextField, Theme } from '@mui/material';
import { ReactFC } from 'types/interface';

interface CreateAccountProps extends ReactFC {
  sx?: SxProps<Theme>;
}

export const CreateAccountModule: React.FC<CreateAccountProps> = ({ sx }) => {
  const response = { warning: false, loading: false };
  return (
    <>
      <TextField
        id="firstname"
        name="firstname"
        sx={{ ...sx }}
        variant="outlined"
        error={response.warning}
        inputProps={{
          minLength: 3,
          // value: values.user,
          // onChange: handleChange,
          // onKeyDown: handleOnKeyDown,
        }}
      />
      <TextField
        id="lastname"
        name="lastname"
        sx={{ ...sx }}
        variant="outlined"
        error={response.warning}
        inputProps={{
          minLength: 3,
          // value: values.user,
          // onChange: handleChange,
          // onKeyDown: handleOnKeyDown,
        }}
      />
    </>
  );
};

import React from 'react';
import { Grid, Paper } from '@mui/material';
import { FileUploadOutlined } from '@mui/icons-material';
import { Title, Body, ButtonUpload } from '@dash/module-components';

export const DocsUpload: React.FC = () => {
  return (
    <Grid
      container
      padding="1.5rem 2rem"
      m="0 auto"
      maxWidth={({ breakpoints: b }) => b.values.md}
    >
      <Paper sx={{ width: '100%' }}>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Title
              muiProps={{ variant: 'h6', textAlign: 'center' }}
              compProps={{ text: 'NF' }}
            />
            <Body
              muiProps={{ variant: 'body1', sx: { mt: '5px' } }}
              compProps={{ text: 'Materiais' }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Title muiProps={{ variant: 'h6' }} compProps={{ text: 'STATUS' }} />
            <Body
              muiProps={{ variant: 'body1', sx: { mt: '5px' } }}
              compProps={{ text: 'PENDENTE' }}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: { xs: '1.625rem', sm: 0 } }}>
            <Title muiProps={{ variant: 'h6' }} compProps={{ text: 'AÇÕES' }} />
            <ButtonUpload
              muiProps={{
                sx: { mt: '10px' },
                startIcon: <FileUploadOutlined />
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

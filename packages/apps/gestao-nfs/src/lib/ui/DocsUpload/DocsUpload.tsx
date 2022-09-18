import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { Title, Body } from '@dash/module-components';

export const DocsUpload: React.FC = () => {
  return (
    <Grid container padding="1.5rem 2rem">
      <Paper sx={{ display: 'grid', gap: '1rem' }}>
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
            <Button variant="outlined" fullWidth sx={{ mt: '10px' }}>
              Enviar Arquivo
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

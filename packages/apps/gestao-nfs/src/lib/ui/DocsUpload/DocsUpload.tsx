import React from 'react';
import { Box, Button, Grid, Input, InputLabel, Paper, TextField } from '@mui/material';
import { FileUploadOutlined } from '@mui/icons-material';
import { Title, Body } from '@dash/module-components';

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
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: '10px' }}
              startIcon={<FileUploadOutlined />}
            >
              <label style={{ cursor: 'pointer' }}>
                Enviar Arquivo
                <input id="btn_file" type="file" hidden />
              </label>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

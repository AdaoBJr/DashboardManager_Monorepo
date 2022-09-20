import React, { useCallback, useState } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { FileUploadOutlined } from '@mui/icons-material';
import { Title, Body, ButtonUpload } from '@dash/module-components';

const redirectUrl =
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
export const DocsUpload: React.FC = () => {
  const [status, setStatus] = useState(false);

  const handleViewFile = useCallback(() => {
    if (status) window.open(redirectUrl, '_blank');
    return null;
  }, [status]);

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
            <div aria-hidden onClick={handleViewFile}>
              <Body
                muiProps={{
                  variant: 'body1',
                  sx: {
                    mt: '5px',
                    textDecoration: status ? 'underline' : 'inherit',
                    cursor: status ? 'pointer' : 'inherit'
                  }
                }}
                compProps={{ text: 'Materiais' }}
              />
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Title muiProps={{ variant: 'h6' }} compProps={{ text: 'STATUS' }} />
            <Body
              muiProps={{ variant: 'body1', sx: { mt: '5px' } }}
              compProps={{ text: status ? 'Concluído' : 'Pendente' }}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: { xs: '1.625rem', sm: 0 } }}>
            <Title muiProps={{ variant: 'h6' }} compProps={{ text: 'AÇÕES' }} />
            <ButtonUpload
              muiProps={{
                sx: { mt: '10px', fontSize: '14px' },
                startIcon: <FileUploadOutlined />
              }}
            />
            <Button onClick={() => setStatus(prev => !prev)}>Switch Status</Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

import React from 'react';
import { Button, Grid } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule, HeaderModule } from '@dash/module-components';

import { signIn } from 'articles';
import { ReactFC } from 'types/interface';
import { useSignIn } from 'services/talons';
import logo from 'assets/images/logoGoDash.png';
import * as Animation from '../../../assets/animations/login.json';
import { GridContainer, PaperHeader, LinkContainer, LinkItem, PaperForm } from './styles';
import { Form, PaperFormWrapper } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const { handleBlur, handleSubmit, dataLinks } = useSignIn();

  return (
    <GridContainer container spacing={{ xs: 4, md: 3 }}>
      <Grid item xs={12}>
        <PaperHeader>
          <HeaderModule
            src={logo}
            linksProps={{ dataLinks, sx: { container: LinkContainer, item: LinkItem } }}
          />
        </PaperHeader>
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={{ ...PaperForm }}>
          <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <SignInModule
              container={{ spacing: 1 }}
              input={{
                sx: { width: '100%', '& .MuiInputBase-input': { p: '10px 12px' } }
              }}
              articles={signIn}
              onBlur={handleBlur}
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Entrar
            </Button>
          </Form>
        </PaperFormWrapper>
      </Grid>
      <Grid item md={6}>
        <AnimationModule
          animation={Animation}
          width={500}
          height={445}
          style={{ margin: 0 }}
        />
      </Grid>
    </GridContainer>
  );
};

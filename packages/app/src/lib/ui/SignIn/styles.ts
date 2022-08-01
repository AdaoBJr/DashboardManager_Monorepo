import { styled } from '@mui/material/styles';
import { Grid, SxProps, Theme } from '@mui/material';

export const GridContainer = styled(Grid, {
  name: 'SignIn',
  slot: 'container'
})(({ theme }) => ({
  margin: '0 auto',
  padding: '.25rem 1rem',
  maxWidth: 1600
}));

export const PaperForm: SxProps<Theme> = {
  width: { xs: '100%', md: '500px' },
  height: { xs: '100%', md: '445px' },
  marginLeft: { xs: 0, md: '10%', lg: '30%' },
  marginTop: '4rem',
  boxShadow: theme => theme.shadows[13]
};

export const SignInTitle: SxProps<Theme> = {
  textAlign: 'center',
  fontWeight: '700'
};

export const SignInInputs: SxProps<Theme> = {
  width: '100%',
  margin: '.25rem 0',
  '& .MuiInputBase-input': { p: '10px 12px' },
  '& .MuiInputLabel-root': { top: '-5px' }
};

export const SignInButton: SxProps<Theme> = {
  marginTop: '1rem',
  padding: '.625rem 1rem',
  fontSize: '1rem',
  fontWeight: 600,
  boxShadow: theme => theme.shadows[5],
  '&:hover': {
    color: '#000',
    transition: '.5s'
  }
};

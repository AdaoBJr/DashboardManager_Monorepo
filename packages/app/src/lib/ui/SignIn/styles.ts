import { styled } from '@mui/material/styles';
import { Box, Paper, SxProps, Theme } from '@mui/material';

export const BoxContainer = styled(Box, {
  name: 'SignIn',
  slot: 'container'
})(({ theme }) => ({
  padding: '.25rem 1rem'
}));

export const PaperWrapper = styled(Paper, {
  name: 'SignIn',
  slot: 'header-wrapper'
})(({ theme }) => ({
  padding: '.25rem',
  boxShadow: 'none',
  filter:
    'drop-shadow(0px 7px 2px rgba(0, 0, 0, 0.14)) drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.2))'
}));

export const LinkContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const LinkItem: SxProps<Theme> = {
  background: theme => theme.palette.primary.main,
  borderRadius: theme => theme.shape.borderRadius,
  padding: '.3rem 1rem',
  margin: '5px .5rem',
  boxShadow: theme => theme.shadows[5],
  '&:hover': {
    background: theme => theme.palette.primary.dark,
    color: '#fff',
    transition: '.5s'
  }
};

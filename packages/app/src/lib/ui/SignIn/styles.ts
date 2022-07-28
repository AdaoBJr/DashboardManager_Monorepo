import { styled } from '@mui/material/styles';
import { Box, Paper, SxProps, Theme } from '@mui/material';

export const BoxContainer = styled(Box, {
  name: 'SignIn',
  slot: 'container'
})(({ theme }) => ({}));

export const PaperWrapper = styled(Paper, {
  name: 'SignIn',
  slot: 'header-wrapper'
})(({ theme }) => ({
  padding: '.25rem'
}));

export const LinkContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const LinkItem: SxProps<Theme> = {
  background: theme => theme.palette.primary.main,
  '&:hover': { background: theme => theme.palette.primary.dark },
  borderRadius: theme => theme.shape.borderRadius,
  padding: '.4rem',
  margin: '5px .5rem'
};

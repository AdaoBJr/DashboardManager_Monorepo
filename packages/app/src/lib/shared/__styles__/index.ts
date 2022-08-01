import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid, {
  name: 'SignIn',
  slot: 'container'
})(({ theme }) => ({
  margin: '0 auto',
  padding: '.25rem 1rem',
  maxWidth: 1600
}));

export const PaperFormWrapper = styled(Paper, {
  name: 'SharedPaperFormWrapper',
  slot: 'wrapper'
})(({ theme }) => ({
  padding: '2rem 1rem'
}));

export const Form = styled('form', {
  name: 'SharedFormWrapper',
  slot: 'form'
})(({ theme }) => ({
  display: 'grid',
  gap: '1rem'
}));

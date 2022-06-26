import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxFormWrapper = styled(Box, {
  name: 'SharedBoxFormWrapper',
  slot: 'wrapper'
})(({ theme }) => ({
  display: 'grid',
  placeItems: 'center',
  padding: '1rem',
  height: '100vh'
}));

export const PaperFormWrapper = styled(Paper, {
  name: 'SharedPaperFormWrapper',
  slot: 'wrapper'
})(({ theme }) => ({
  padding: '2rem 1rem',
  width: '500px'
}));

export const Form = styled('form', {
  name: 'SharedFormWrapper',
  slot: 'form'
})(({ theme }) => ({
  display: 'grid',
  gap: '1rem'
}));

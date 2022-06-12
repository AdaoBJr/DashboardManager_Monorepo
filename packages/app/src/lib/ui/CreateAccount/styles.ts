import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box, {
  name: 'CreateAccount',
  slot: 'container'
})(({ theme }) => ({
  display: 'grid',
  placeItems: 'center',
  padding: '1rem',
  height: '100vh'
}));

export const PaperWrapper = styled(Paper, {
  name: 'CreateAccount',
  slot: 'container'
})(({ theme }) => ({
  padding: '2rem 1rem',
  width: '500px'
}));

export const Form = styled('form', {
  name: 'CreateAccount',
  slot: 'form'
})(({ theme }) => ({
  display: 'grid',
  gap: '1rem'
}));

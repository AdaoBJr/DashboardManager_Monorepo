import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box, {
  name: 'SignIn',
  slot: 'container'
})(({ theme }) => ({}));

export const PaperHeaderWrapper = styled(Paper, {
  name: 'SignIn',
  slot: 'header-wrapper'
})(({ theme }) => ({
  padding: '.25rem'
}));

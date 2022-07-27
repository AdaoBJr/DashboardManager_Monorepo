import { CSSProperties } from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppContext } from 'context';

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

export const useSignInStyles = () => {
  const { theme } = useAppContext();

  const HeaderLinksStyled: CSSProperties = {
    background: theme.palette.primary.main,
    margin: '5px 1rem'
  };

  return { HeaderLinksStyled };
};

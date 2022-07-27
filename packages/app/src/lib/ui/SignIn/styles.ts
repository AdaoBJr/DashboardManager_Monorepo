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
  const {
    palette: { primary },
    shape: { borderRadius }
  } = theme;

  const HeaderLinkContainerStyled: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const HeaderLinkItemStyled: CSSProperties = {
    background: primary.main,
    padding: '.4rem',
    borderRadius,
    margin: '5px .5rem'
  };

  return { HeaderLinkItemStyled, HeaderLinkContainerStyled };
};

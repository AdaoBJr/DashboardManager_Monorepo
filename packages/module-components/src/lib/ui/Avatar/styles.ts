import { CSSProperties } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IconBtn: CSSProperties = {
  position: 'relative',
  margin: '5rem 0 -10rem 13rem'
};

export const BoxEditWrapper = styled(Box, {
  name: 'Box',
  slot: 'avatar_edit_wrapper'
})(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '5px',
  zIndex: 1,
  height: '2.1rem',
  width: '2.1rem',
  backgroundColor: 'white',
  borderRadius: '50%'
}));

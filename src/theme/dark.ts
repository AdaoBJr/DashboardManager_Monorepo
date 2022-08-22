import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';
import { themeConfig } from './light';

const dark = {
  ...themeConfig,
  palette: {
    ...themeConfig.palette,
    mode: 'dark' as 'light' | 'dark',
    background: {
      default: '#2d2d2d',
      paper: '#202020'
    }
  }
};

export const darkTheme = createTheme(dark, ptBR);

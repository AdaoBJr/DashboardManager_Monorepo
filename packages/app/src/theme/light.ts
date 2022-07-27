import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const themeConfig = {
  spacing: 16,
  breakpoints: {
    values: {
      xs: 0,
      sm: 641,
      md: 1024,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    mode: 'light' as 'light' | 'dark',
    primary: {
      main: '#349eff',
      light: '#62b4ff',
      dark: '#246eb2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#019707',
      light: '#4caf50',
      dark: '#006904'
    },
    info: {
      main: '#10d4d2',
      light: '#2ae9e6',
      dark: '#0b9493'
    },
    background: {
      default: '#fff',
      paper: '#fafafb'
    },
    warning: {
      main: '#d68102',
      light: '#fca11a'
    },
    error: {
      main: '#fb0b12',
      light: '#ff4a6b'
    },
    text: {
      secondary: '#455560'
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    body1: {
      color: '#455560',
      fontWeight: 400,
      fontSize: '1rem'
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    }
  }
};

export const lightTheme = createTheme(themeConfig, ptBR);

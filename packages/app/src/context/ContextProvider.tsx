import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import { darkTheme, lightTheme } from 'theme';
import { ReactFC } from 'types/interface';
import store, { THEME } from './store';

export const ContextProvider: React.FC<ReactFC> = ({ children }) => {
  const [{ theme, themeMode }, setTheme] = useState(THEME);

  const toggleTheme = useCallback(() => {
    const themeCurrent =
      themeMode === 'light'
        ? { themeMode: 'dark', theme: darkTheme }
        : { themeMode: 'light', theme: lightTheme };
    setTheme(themeCurrent);
  }, [theme, themeMode, setTheme]);

  //---------------------------------------------------------------------
  // CICLOS DE VIDA

  // CONTEXT API
  const contextValue = {
    theme,
    themeMode,
    toggleTheme
  };

  //---------------------------------------------------------------------
  return (
    <store.Provider value={contextValue}>
      <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </store.Provider>
  );
};

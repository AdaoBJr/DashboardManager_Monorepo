import React, { useCallback, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import { darkTheme, lightTheme } from 'theme';
import { ReactFC } from 'types/interface';
import store, { THEME, WINDOW } from './store';

export const ContextProvider: React.FC<ReactFC> = ({ children }) => {
  const [{ theme, themeMode }, setTheme] = useState(THEME);
  const [{ windowSize }, setWindow] = useState(WINDOW);

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleWindowSize = useCallback(
    () => setWindow({ windowSize: { ...windowSize, smDown } }),
    [smDown, theme]
  );

  const toggleTheme = useCallback(() => {
    const themeCurrent =
      themeMode === 'light'
        ? { themeMode: 'dark', theme: darkTheme }
        : { themeMode: 'light', theme: lightTheme };
    setTheme(themeCurrent);
  }, [theme, themeMode, setTheme]);

  //---------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(handleWindowSize, [smDown, theme]);

  // CONTEXT API
  const contextValue = {
    theme,
    themeMode,
    windowSize,
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

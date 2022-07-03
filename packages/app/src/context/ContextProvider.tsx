import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from 'theme';
import { ReactFC } from 'types/interface';
import store, { THEME } from './store';

export const ContextProvider: React.FC<ReactFC> = ({ children }) => {
  const [themeName, setThemeName] = useState(THEME);

  const toggleTheme = useCallback(
    () =>
      setThemeName(({ theme }) =>
        theme === 'light' ? { theme: 'dark' } : { theme: 'light' }
      ),
    [themeName, setThemeName]
  );

  const theme = useMemo(() => (themeName.theme === 'light' ? lightTheme : darkTheme), [
    themeName
  ]);

  //---------------------------------------------------------------------
  // CICLOS DE VIDA

  // CONTEXT API
  const contextValue = {
    theme: themeName.theme,
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

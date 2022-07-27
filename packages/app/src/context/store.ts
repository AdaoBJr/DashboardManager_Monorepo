import { createContext, useContext } from 'react';
import { Theme } from '@mui/material';
import { lightTheme } from 'theme';

export const THEME = {
  theme: lightTheme as Theme,
  themeMode: 'light' as string
};

export const initialState = { ...THEME };

const store = createContext(initialState);

export const useAppContext = () => useContext(store);

export default store;

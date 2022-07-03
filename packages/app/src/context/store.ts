import { createContext, useContext } from 'react';

export const THEME = {
  theme: 'light' as 'light' | 'dark'
};

export const initialState = { ...THEME };

const store = createContext(initialState);

export const useAppContext = () => useContext(store);

export default store;

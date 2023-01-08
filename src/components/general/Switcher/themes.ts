import { createTheme } from '@mui/material';

export const light = createTheme({
  palette: {
    primary: {
      main: '#c1d5f8',
    },
    secondary: {
      main: '#6666ff',
    },
  },
});

export const dark = createTheme({
  palette: {
    primary: {
      main: '#19194d',
    },
    secondary: {
      main: '#c1d5f8',
    },
  },
});

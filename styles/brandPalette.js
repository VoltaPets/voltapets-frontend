import { createTheme } from '@mui/material';

export const voltaPetsTheme = createTheme({
  palette: {
    primary: {
      main: '#BF8943'
    },
    secondary: {
      main: '#9D2F3A'
    },
    background: {
      default: '#f3f3f3'
    },
    text: {
      primary: '#464646'
    }
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
    h4: {
      color: '#9D2F3A',
      fontSize: '2rem'
    }
  }
});

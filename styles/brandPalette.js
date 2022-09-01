import { createTheme } from '@mui/material';

export const voltaPetsTheme = createTheme({
  palette: {
    primary: {
      main: '#F4D19B'
    },
    secondary: {
      main: '#9D2F3A'
    },
    background: {
      default: '#f3f3f3'
    },
    text: {
      primary: '#1F1F31'
    },
    info: {
      main: '#22577E'
    },
    success: {
      main: '#557C55'
    },
    error: {
      main: '#C84B31'
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

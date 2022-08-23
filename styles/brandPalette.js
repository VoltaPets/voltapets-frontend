import { createTheme } from '@mui/material';

export const voltaPetsTheme = createTheme({
  palette: {
    primary: {
      main: '#FEDDC2'
    },
    secondary: {
      main: '#9D2F3A'
    },
    background: {
      default: '#f3f3f3'
    },
    text: {
      primary: '#1F1F31'
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

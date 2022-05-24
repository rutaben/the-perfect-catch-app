import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#1b1b1b',
      light: '#fffef7',
    },
    background: {
      default: '#c5cece',
      light: '#f2f3f4',
    },
    primary: {
      main: '#808080',
      light: '#beef00',
      dark: '#657a00',
    },
    secondary: {
      main: '#1400c6',
    },
    error: {
      main: '#ff0028',
    },
    typography: {
      fontFamily: [
        'Roboto', 'sans-serif',
      ].join(','),
    },
  },
});

export default theme;
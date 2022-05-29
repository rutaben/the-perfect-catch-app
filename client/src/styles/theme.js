import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#181a18',
      light: '#f9f8f0'
    },
    background: {
      default: '#c5cece',
      light: '#f2f3f4'
    },
    primary: {
      main: '#808080',
      light: '#c5cece',
      dark: '#657a00'
    },
    secondary: {
      main: '#287094',
      dark: '#023246'
    },
    error: {
      main: '#ff0028'
    },
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(',')
    }
  }
});

export default theme;

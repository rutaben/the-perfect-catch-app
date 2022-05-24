import theme from './styles/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import MoviesPage from './pages/movies-page';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MoviesPage />
    </ThemeProvider>
  );
};

export default App;

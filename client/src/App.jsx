import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import MoviesPage from './pages/movies-page';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/favorite-movies" element={<MoviesPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

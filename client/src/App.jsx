import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import store from './store';
import theme from './styles/theme';
import AuthRoute from './routing/auth-route';
import ProtectedRoute from './routing/protected-route';
import RegistrationAuthRoute from './routing/registration-auth-route.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthRoute />} />
            <Route path="/register" element={<RegistrationAuthRoute />} />
            <Route path="/favorite-movies" element={<ProtectedRoute />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Navigate } from 'react-router-dom';
import RegisterPage from '../pages/register-page';

const RegistrationAuthRoute = ({ page }) => {
  const authState = JSON.parse(localStorage.getItem('auth'));

  if (!authState || authState.loggedIn === false) {
    return <RegisterPage />;
  } else {
    return <Navigate to="/favorite-movies" replace />;
  }
};

export default RegistrationAuthRoute;

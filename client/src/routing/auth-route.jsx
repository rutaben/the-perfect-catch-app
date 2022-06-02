import React from 'react';
import { Navigate } from 'react-router-dom';
// import SessionService from '../services/session-service';
import LoginPage from '../pages/login-page';

const AuthRoute = () => {
  const authState = JSON.parse(localStorage.getItem('auth'));
  console.log(authState);

  if (!authState || authState.loggedIn === false) {
    return <LoginPage />;
  } else {
    return <Navigate to="/favorite-movies" replace />;
  }
};

export default AuthRoute;

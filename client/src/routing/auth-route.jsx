import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ page }) => {
  const authState = JSON.parse(localStorage.getItem('auth'));

  if (!authState || authState.loggedIn === false) {
    return page;
  } else {
    return <Navigate to="/favorite-movies" replace />;
  }
};

export default AuthRoute;

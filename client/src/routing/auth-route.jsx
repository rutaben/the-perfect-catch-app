import React from 'react';
import { Navigate } from 'react-router-dom';
import LocalStorageService from '../services/local-storage-service';

const AuthRoute = ({ page }) => {
  const authState = LocalStorageService.get('auth');

  if (!authState || authState.loggedIn === false) {
    return page;
  } else {
    return <Navigate to="/favorite-movies" replace />;
  }
};

export default AuthRoute;

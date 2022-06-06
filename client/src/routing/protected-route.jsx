import React from 'react';
import { Navigate } from 'react-router-dom';
import LocalStorageService from '../services/local-storage-service';
import MoviesPage from '../pages/movies-page';

const ProtectedRoute = () => {
  const authState = LocalStorageService.get('auth');
  const userFirstName = authState ? authState.user.firstName : null;

  if (authState && authState.loggedIn) {
    return <MoviesPage name={userFirstName} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import SessionService from '../services/session-service';
import MoviesPage from '../pages/movies-page';

const ProtectedRoute = () => {
  const authState = SessionService.get('auth');
  const userFirstName = authState.user.firstName;

  if (authState.loggedIn) {
    return <MoviesPage name={userFirstName} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;

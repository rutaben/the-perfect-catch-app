import React from 'react';
import { Navigate } from 'react-router-dom';
// import SessionService from '../services/session-service';
import MoviesPage from '../pages/movies-page';

const ProtectedRoute = () => {
  const authState = JSON.parse(localStorage.getItem('auth'));
  const userFirstName = authState ? authState.user.firstName : null;
  console.log(authState);

  if (authState && authState.loggedIn) {
    return <MoviesPage name={userFirstName} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;

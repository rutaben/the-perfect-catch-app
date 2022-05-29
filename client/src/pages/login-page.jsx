import React from 'react';
import AuthenticationForm from '../components/authentication-form';

const loginFormData = [
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' }
];

const LoginPage = () => {
  return (
    <AuthenticationForm
      textFieldData={loginFormData}
      title="Login"
      lightLinkTo="/favorite-movies"
      lightLinkTitle="Login"
      darkLinkTo="/register"
      darkLinkTitle="Don't have an account? Register here."
    />
  );
};

export default LoginPage;

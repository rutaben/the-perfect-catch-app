import React from 'react';
import AuthForm from '../components/auth-form';

const loginFormData = [
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' }
];

const initialValues = {
  email: '',
  password: ''
};

const handleSubmit = async ({ email, password }) => {
  console.log(email, password);
};

const LoginPage = () => {
  return (
    <AuthForm
      textFieldData={loginFormData}
      initialValues={initialValues}
      title="Login"
      lightLinkTo="/favorite-movies"
      lightLinkTitle="Login"
      darkLinkTo="/register"
      darkLinkTitle="Don't have an account? Register here."
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPage;

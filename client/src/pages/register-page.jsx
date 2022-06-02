import React from 'react';
import AuthForm from '../components/auth-form';

const registerFormData = [
  { id: 'firstName', name: 'firstName', label: 'First Name', type: 'text' },
  { id: 'lastName', name: 'lastName', label: 'Last Name', type: 'text' },
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' },
  { id: 'repeatPassword', name: 'repeatPassword', label: 'Repeat password', type: 'password' }
];

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: ''
};

const RegisterPage = () => {
  return (
    <AuthForm
      textFieldData={registerFormData}
      initialValues={initialValues}
      title="Create an account"
      lightLinkTo="/favorite-movies"
      lightLinkTitle="Sign up"
      darkLinkTo="/"
      darkLinkTitle="Already have an account? Login here."
    />
  );
};

export default RegisterPage;

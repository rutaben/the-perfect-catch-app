import React from 'react';
import AuthenticationForm from '../components/authentication-form';

const registerFormData = [
  { id: 'firstName', name: 'firstName', label: 'First Name', type: 'text' },
  { id: 'lastName', name: 'lastName', label: 'Last Name', type: 'text' },
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' }
];

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const RegisterPage = () => {
  return (
    <AuthenticationForm
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

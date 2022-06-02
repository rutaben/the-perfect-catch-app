import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/auth-reducer';
import AuthService from '../services/auth-service';
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
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async ({ firstName, lastName, email, password, repeatPassword }) => {
    try {
      const newUser = await AuthService.register({
        firstName,
        lastName,
        email,
        password,
        repeatPassword
      });
      dispatch(login({ newUser }));
      navigate('/favorite-movies');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthForm
      textFieldData={registerFormData}
      initialValues={initialValues}
      title="Create an account"
      darkLinkTo="/"
      darkLinkTitle="Already have an account? Login here."
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterPage;

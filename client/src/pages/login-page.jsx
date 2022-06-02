import React from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '../services/auth-service';
import { login } from '../store/auth-reducer';
import AuthForm from '../components/auth-form';

const loginFormData = [
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' }
];

const initialValues = {
  email: '',
  password: ''
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }) => {
    try {
      const user = await AuthService.login({
        email,
        password
      });
      const loginSuccessAction = login({ user });
      dispatch(loginSuccessAction);
    } catch (error) {
      alert(error.message);
    }
  };

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

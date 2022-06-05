import React from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '../services/auth-service';
import { login } from '../store/auth-slice';
import AuthForm from '../components/auth-form';
import { useNavigate } from 'react-router-dom';

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
  let navigate = useNavigate();

  const handleSubmit = async ({ email, password }) => {
    try {
      const user = await AuthService.login({
        email,
        password
      });
      const loginSuccessAction = login({ user });
      dispatch(loginSuccessAction);
      navigate('/favorite-movies');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthForm
      textFieldData={loginFormData}
      initialValues={initialValues}
      title="Login"
      darkLinkTo="/register"
      darkLinkTitle="Don't have an account? Register here."
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPage;

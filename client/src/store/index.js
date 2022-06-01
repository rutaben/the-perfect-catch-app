import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './auth-reducer';

const reducer = combineReducers({ authReducer });

const store = configureStore({ reducer });
console.log(store.getState());

export default store;

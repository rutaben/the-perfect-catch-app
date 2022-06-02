import { createSlice } from '@reduxjs/toolkit';
import SessionService from '../services/session-service';

const initialState = {
  loggedIn: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFailed(state) {
      state.loggedIn = false;
    },
    login(state, { payload }) {
      state.loggedIn = true;
      state.user = payload.user;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
      SessionService.clear('auth');
    }
  }
});

export const { login, logout, authFailed } = authSlice.actions;

export default authSlice.reducer;

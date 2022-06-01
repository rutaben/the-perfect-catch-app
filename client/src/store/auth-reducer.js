import { createSlice } from '@reduxjs/toolkit';

const initState = {
  loggedIn: null,
  user: null,
  redirectTo: null
};

const authSlice = createSlice({
  name: 'auth',
  initState,
  reducers: {
    authFailed(state) {
      state.loggedIn = false;
    },
    login(state, { payload }) {
      state.loggedIn = true;
      state.user = payload.user;
      state.redirectTo = payload.redirectTo;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
      state.redirectTo = null;
    }
  }
});

export const { login, logout, authFailed } = authSlice.actions;

export default authSlice.reducer;

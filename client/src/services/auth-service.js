import store from '../store/index';
import { login, authFailed, logout } from '../store/auth-slice';
import SessionService from './local-storage-service';
import { axiosInstance } from './helpers/axios-instance';

const AuthService = new (class AuthService {
  constructor() {
    const token = SessionService.get('auth_token');

    this.requester = axiosInstance;
    if (token) {
      this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.authenticate(token);
    } else {
      store.dispatch(authFailed());
    }
  }

  setAuth(token) {
    this.token = token;
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async login({ email, password }) {
    try {
      const {
        data: { user, token }
      } = await this.requester.post('/authentication/login', { email, password });
      SessionService.set('auth_token', token);
      this.setAuth(token);

      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async register({ firstName, lastName, email, password, repeatPassword }) {
    try {
      const registerFormData = {
        firstName,
        lastName,
        email,
        password,
        repeatPassword
      };
      const response = await this.requester.post('/authentication/register', registerFormData);
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);

      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async authenticate(token) {
    try {
      const { data: user } = await this.requester.post('/authentication', { token });
      store.dispatch(login({ user }));
      this.setAuth(token);
    } catch (error) {
      store.dispatch(authFailed());
      throw new Error(error.message);
    }
  }

  logout() {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    store.dispatch(logout());
  }
})();

export default AuthService;

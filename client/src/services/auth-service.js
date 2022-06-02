import axios from 'axios';
import store from '../store/index';
import { login, authFailed, logout } from '../store/auth-reducer';
import SessionService from './session-service';

const AuthService = new (class AuthService {
  constructor() {
    const token = SessionService.get('auth_token');

    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/authentication',
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
      } = await this.requester.post('/login', { email, password });
      SessionService.set('auth_token', token);
      this.setAuth(token);

      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async authenticate(token) {
    try {
      const { data: user } = await this.requester.post('/', { token });
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

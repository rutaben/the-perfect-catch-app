import axios from 'axios';
import store from '../store/index';
import { login, authFailed } from '../store/auth-reducer';

const AuthService = new (class AuthService {
  constructor() {
    const token = JSON.parse(localStorage.getItem('auth_token'));

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
      localStorage.setItem('auth_token', JSON.stringify(token));
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
})();

export default AuthService;

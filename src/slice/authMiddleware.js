
import { logout } from './authSlice';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === 'auth/logout') {
    localStorage.removeItem('token');
  }

  return next(action);
};

export default authMiddleware;

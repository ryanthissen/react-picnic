export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signup = (user) => ({
  type: SIGNUP,
  payload: user
});

export const login = (user) => ({
  type: LOGIN,
  payload: user
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  payload: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  payload: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

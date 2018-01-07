import { SEND_LOGIN } from './actionList';
import { loginUser } from '../util/index';

export const sendLogin = user => {
  return dispatch => {
    return fetch('/login', { method: 'POST', body: user })
      .then(res => {
        loginUser();
        window.location = '/#/kerdoiv-lista';
      })
      .catch(console.log);
  };
};

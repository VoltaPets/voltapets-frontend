import {API_BASE_URL} from '../../constant';

export const LOGIN = `${API_BASE_URL}/usuario/login`;


export const isLoginResponse = (response) => {
  return typeof response.token === 'string';
};

// export const isUsuarioToken = (response) => { typeof response === 'object'};

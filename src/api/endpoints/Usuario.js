import { API_BASE_URL } from '../../constant';

// Creación de usuarios
export const CREATE_USER_IMG = `${API_BASE_URL}/usuario/RegistrarImagen`;
export const CREATE_TUTOR = `${API_BASE_URL}/tutor/registrar`;
export const CREATE_PASEADOR = `${API_BASE_URL}/paseador/registrar`;

// Obtención de usuario de un token
export const USER_TOKEN = `${API_BASE_URL}/usuario/getUsuarioToken`;

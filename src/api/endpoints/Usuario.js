import { API_BASE_URL } from '../../constant';

// Creación de usuarios
export const CREATE_USER_IMG = `${API_BASE_URL}/usuario/RegistrarImagen`;
export const CREATE_TUTOR = `${API_BASE_URL}/tutor/registrar`;
export const CREATE_PASEADOR = `${API_BASE_URL}/paseador/registrar`;

// Obtención de usuario de un token
export const USER_TOKEN = `${API_BASE_URL}/usuario/getUsuarioToken`;

// Perfil de Paseador
export const PASEADOR_PROFILE = `${API_BASE_URL}/paseador/perfil`;
export const PASEADOR_LABORALES = `${API_BASE_URL}/paseador/laboral`;

// Actualización de imagen de perfil
export const UPDATE_USER_IMG = `${API_BASE_URL}/usuario/cambiarImagen`;

// Información laboral
export const LABORAL_INFO = `${API_BASE_URL}/paseador/laboral`;

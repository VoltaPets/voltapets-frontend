import { API_BASE_URL } from '../../constant';

// Usuario
export const CREATE_USER_IMG = `${API_BASE_URL}/usuario/RegistrarImagen`;
export const USER_TOKEN = `${API_BASE_URL}/usuario/getUsuarioToken`;
export const UPDATE_USER_IMG = `${API_BASE_URL}/usuario/cambiarImagen`;
export const FORGET_PASSWORD = `${API_BASE_URL}/usuario/forgetPassword`;
export const RESET_PASSWORD = `${API_BASE_URL}/usuario/resetPassword`;

// Tutor
export const CREATE_TUTOR = `${API_BASE_URL}/tutor/registrar`; // POST
export const TUTOR_PROFILE = `${API_BASE_URL}/tutor/perfil`; // GET
export const UPDATE_TUTOR_PROFILE = `${API_BASE_URL}/tutor/editarPerfil`; // PUT

// Paseador
export const CREATE_PASEADOR = `${API_BASE_URL}/paseador/registrar`; // POST
export const PASEADOR_PROFILE = `${API_BASE_URL}/paseador/perfil`; // GET
export const PASEADOR_LABORALES = `${API_BASE_URL}/paseador/laboral`; // GET
export const UPDATE_PASEADOR_PROFILE = `${API_BASE_URL}/paseador/editarPerfil`; // PUT
export const LABORAL_INFO = `${API_BASE_URL}/paseador/laboral`; // GET
export const GET_PASEADORES_CERCANOS = `${API_BASE_URL}/paseador/ObtenerCercanos`; // GET

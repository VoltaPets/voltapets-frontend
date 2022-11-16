import { API_BASE_URL } from '../../constant';

// Usuario
export const CREATE_USER_IMG = `${API_BASE_URL}/usuario/RegistrarImagen`;
export const USER_TOKEN = `${API_BASE_URL}/usuario/getUsuarioToken`;
export const UPDATE_USER_IMG = `${API_BASE_URL}/usuario/cambiarImagen`;

// Tutor
export const CREATE_TUTOR = `${API_BASE_URL}/tutor/registrar`;

// Paseador
export const CREATE_PASEADOR = `${API_BASE_URL}/paseador/registrar`; // POST
export const PASEADOR_PROFILE = `${API_BASE_URL}/paseador/perfil`; // GET
export const PASEADOR_LABORALES = `${API_BASE_URL}/paseador/laboral`; // GET
export const UPDATE_PROFILE = `${API_BASE_URL}/paseador/editarPerfil`; // PUT
export const LABORAL_INFO = `${API_BASE_URL}/paseador/laboral`; // GET

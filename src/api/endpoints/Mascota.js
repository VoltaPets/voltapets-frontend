import { API_BASE_URL } from '../../constant';

// Mascota
export const CREATE_MASCOTA = `${API_BASE_URL}/mascota/registrar`; // POST
export const GET_MASCOTA = (codigoMascota) => `${API_BASE_URL}/mascota/obtener/${codigoMascota}`; // GET - Obtener mascota por codigo
export const GET_MASCOTAS = `${API_BASE_URL}/mascota/obtener/misMascotas`; // GET - Obtener todas las mascotas de un usuario
export const UPDATE_MASCOTA_IMG = (codigoMascota) =>
  `${API_BASE_URL}/mascota/cambiarImagen/${codigoMascota}`; // PUT - Actualizar imagen de mascota

// Recordatorios
export const CREATE_RECORDATORIO = `${API_BASE_URL}/recordatorio/registrar`; // POST
export const GET_RECORDATORIOS = (codigoMascota) =>
  `${API_BASE_URL}/recordatorio/obtener/${codigoMascota}`; // GET

export const GET_RAZAS = `${API_BASE_URL}/raza/obtener/`; // GET - Obtener todas las razas de un mascota
export const GET_SIZE = `${API_BASE_URL}/tamanio/obtener/`; // GET - Obtener todos los tamaños de un mascota
export const GET_SEXO = `${API_BASE_URL}/sexo/obtener/`; // GET - Obtener todos los sexos de un mascota

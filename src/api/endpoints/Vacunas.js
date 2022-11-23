import { API_BASE_URL } from '../../constant';

export const GET_VACUNAS_PET = (codigoMascota) => `${API_BASE_URL}/vacunaMascota/obtener/${codigoMascota}`; // GET - Obtener vacunas de una mascota
export const REGISTRAR_VACUNA = `${API_BASE_URL}/vacunaMascota/registrar`; // POST - Registrar vacuna
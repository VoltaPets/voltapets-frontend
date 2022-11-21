import { API_BASE_URL } from '../../constant';

export const GET_VACUNAS = (codigoMascota) => `${API_BASE_URL}/vacunaMascota/obtener/${codigoMascota}`;
export const REGISTRAR_VACUNA = () => `${API_BASE_URL}/vacunaMascota/registrar`;
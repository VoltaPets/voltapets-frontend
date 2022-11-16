import { API_BASE_URL } from '../../constant';

// Obtención de comunas
export const GET_COMUNAS = (codigoRegion) => `${API_BASE_URL}/comuna/${codigoRegion}`;

// Obtención de regiones

export const GET_REGIONES = `${API_BASE_URL}/region`;

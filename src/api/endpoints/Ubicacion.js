import { API_BASE_URL } from '../../constant';

// Obtención de comunas
export const GET_COMUNAS = (codigoRegion) => `${API_BASE_URL}/comuna/${codigoRegion}`;

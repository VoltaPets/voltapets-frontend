import axios from 'axios';

/**
 * Intercepta la petición para inyectar configuraciones, como por ejemplo: headers de
 * autorización.
 */
// axios.interceptors.request.use(
//   (config) => {
//     const interceptedConfig = config;
//     const token = localStorage.getItem('token');
//     if (token) {
//       interceptedConfig.headers = {
//         authorization: 'Bearer ' + token
//       };
//     }
//     return interceptedConfig;
//   },
//   (error) => Promise.reject(error)
// );

export const request = (request) => axios.request(request);
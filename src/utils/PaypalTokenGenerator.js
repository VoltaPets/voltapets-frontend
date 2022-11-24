import axios from 'axios';

const base = 'https://api-m.sandbox.paypal.com';

import { PAYPAL_CLIENT_ID, PAYPAL_SECRET } from '../constant/';

// Llamada a la API de Paypal para obtener el token de cliente
async function generateClienToken() {
  const accessToken = await generateAccessToken();
  const response = await fetch(`${base}/v1/identity/generate-token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Accept-Language": "en_US",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json(); 
  return data.client_token;
}

// Access Token se usa para autenticar los Request REST de la API
export async function generateAccessToken() {
  const response = await axios({
    url: `${base}/v1/oauth2/token`,
    method: 'post',
    data: 'grant_type=client_credentials',
    auth: {
      username: PAYPAL_CLIENT_ID,
      password: PAYPAL_SECRET,
    }
  });
  return response.data;
}

// Libraries
import * as yup from 'yup';

export const recoverySchema = yup.object().shape({
  email: yup
    .string()
    .email('Debes ingresar un correo válido')
    .required('Debes tu correo electrónico')
});

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email('Debes ingresar un correo válido (ejemplo@mail.com)')
    .required('Debes ingresar un correo'),
  password: yup.string().required('Debes ingresar una contraseña')
});

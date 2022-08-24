// Libraries
import * as yup from 'yup';
import 'yup-phone';
import getUnixTime from 'date-fns/getUnixTime';
import { rutValidate, parseToUnix } from '../utils';

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

export const registerSchema = yup.object().shape({
  nombre: yup.string().required('Debes ingresar tu nombre'),
  apellido: yup.string().required('Debes ingresar tu apellido'),
  telefono: yup
    .string()
    .matches(
      /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,
      'Debes ingresar un número válido (Ej: +569xxxxxxxx)'
    )
    .phone('CL', true, 'Debes ingresar un número chileno  válido')
    .required('Debes ingresar un número de teléfono'),
  correo: yup
    .string()
    .email('Debes ingresar un correo válido (Ej: ejemplo@mail.com)')
    .required('Debes ingresar un correo'),
  region: yup.string().required('Debes ingresar una región'),
  comuna: yup.string().required('Debes ingresar una comuna'),
  direccion: yup.string().required('Debes ingresar tu dirección'),
  password: yup
    .string()
    .required('Debes ingresar una contraseña')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-\.,]).{6,}$/g,
      'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
    )
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20, 'La contraseña debe tener máximo 20 caracteres'),
  confirmarPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Debes confirmar tu contraseña'),
  tipoVivienda: yup.string().required('Debes elegir un tipo de vivienda')
});

// Libraries
import * as yup from 'yup';
import 'yup-phone';
import getUnixTime from 'date-fns/getUnixTime';
import { rutValidate } from '../utils/rutValidate';
import { parseToUnix } from '../utils/parseToUnix';

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

export const schemaRegistroTutor = yup.object().shape({
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
  email: yup
    .string()
    .email('Debes ingresar un correo válido (Ej: ejemplo@mail.com)')
    .required('Debes ingresar un correo'),
  region: yup.string().required('Debes ingresar una región'),
  codigoComuna: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Debes elegir una comuna'),
  direccion: yup.string().required('Debes ingresar tu dirección', 22),
  password: yup
    .string()
    .required('Debes ingresar una contraseña')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-\.,]).{6,}$/g,
      'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
    )
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20, 'La contraseña debe tener máximo 20 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Debes confirmar tu contraseña')
});

export const schemaRegistroPaseador = yup.object().shape({
  nombre: yup.string().required('Debes ingresar tu nombre'),
  apellido: yup.string().required('Debes ingresar tu apellido'),
  telefono: yup
    .string()
    .matches(
      /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,
      'Debes ingresar un número válido (Ej: +569xxxxxxxx)'
    )
    .phone('CL', true, 'Debes ingresar un número válido')
    .required('Debes ingresar un número de teléfono'),
  email: yup
    .string()
    .email('Debes ingresar un correo válido (Ej: ejemplo@mail.com)')
    .required('Debes ingresar un correo'),
  region: yup.string().required('Debes ingresar una región'),
  codigoComuna: yup
    .number()
    .required('Debes ingresar una comuna')
    .transform((value) => (isNaN(value) ? undefined : value)),
  direccion: yup.string().required('Debes ingresar tu dirección'),
  imagen: yup.mixed().required('Debes ingresar una imagen'),
  rutDv: yup
    .string()
    .min(10, 'Debes ingresar un rut válido')
    .required('Ingresa tu rut')
    .test(
      'rut',
      'El rut no es válido. Ingresa tu rut sin puntos (Ej: 11222333-4)',
      async (value) => {
        return await rutValidate(value);
      }
    ),
  password: yup
    .string()
    .required('Debes ingresar una contraseña')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-\.,]).{6,}$/g,
      'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
    )
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20, 'La contraseña debe tener máximo 20 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Debes confirmar tu contraseña')
});

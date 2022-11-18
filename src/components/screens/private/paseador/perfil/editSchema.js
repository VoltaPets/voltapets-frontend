// Librerías

import * as Yup from 'yup';
import 'yup-phone';

// Validaciones

export const schemaEdicionPerfil = Yup.object().shape({
  codigoComuna: Yup.number()
    .required('Debes ingresar una comuna')
    .transform((value) => (isNaN(value) ? undefined : value)),
  direccion: Yup.string().trim().required('Debes ingresar tu dirección', 22),
  departamento: Yup.string().trim(),
  telefono: Yup.string()
    .trim()
    .matches(
      /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,
      'Debes ingresar un número válido (Ej: +569xxxxxxxx)'
    )
    .phone('CL', true, 'Debes ingresar un número chileno  válido')
    .required('Debes ingresar un número de teléfono'),
  descripcion: Yup.string()
    .trim()
    .required('Debes ingresar una descripción')
    .max(500, 'La descripción debe tener máximo 500 caracteres'),
  isChangePassword: Yup.boolean(),
  password: Yup.string().nullable().when('isChangePassword', {
    is: true,
    then: Yup.string().trim().required('Debes ingresar una contraseña')
  }),
  newPassword: Yup.string().nullable().when('isChangePassword', {
    is: true,
    then: Yup.string()
      .trim()
      .required('Debes ingresar una contraseña')
      .min(8, 'La contraseña debe tener mínimo 8 caracteres')
      .max(20, 'La contraseña debe tener máximo 20 caracteres')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un caracter especial'
      )
  }),
  confirmNewPassword: Yup.string().nullable().when('isChangePassword', {
    is: true,
    then: Yup.string()
      .trim()
      .oneOf([Yup.ref('newPassword'), null], 'Las contraseñas no coinciden')
      .required('Debes confirmar tu contraseña')
  })
});

// Libraries
import * as yup from 'yup';

export const mascotaSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es requerido'),
  descripcion: yup.string().required('La descripción es requerida'),
  fechaNacimiento: yup.date().nullable().required('La fecha de nacimiento es requerida'),
  isFechaNacimiento: yup.boolean().required('La fecha de nacimiento es requerida'),
  isYear: yup
    .boolean()
    .required('Debes seleccionar si es año o mes')
    .transform((value) => (value === null ? undefined : Boolean(value))),
  esterilizado: yup
    .boolean()
    .required('La esterilización es requerida')
    .transform((value) => (value === null ? undefined : Boolean(value))),
  edadRegistro: yup
    .number()
    .required('La edad de registro es requerida')
    .min(1, 'La edad de registro debe ser mayor a 0')
    .max(30, 'La edad de registro debe ser menor a 30')
    .transform((values) => (isNaN(values) ? undefined : Number(values))),
  codigoSexo: yup
    .number()
    .required('El sexo es requerido')
    .min(1, 'El sexo es requerido')
    .transform((values) => (isNaN(values) ? undefined : Number(values))),
  codigoTamanio: yup
    .number()
    .required('El tamaño es requerido')
    .transform((values) => (isNaN(values) ? undefined : Number(values))),
  codigoRaza: yup
    .number()
    .required('La raza es requerida')
    .transform((values) => (isNaN(values) ? undefined : Number(values)))
});

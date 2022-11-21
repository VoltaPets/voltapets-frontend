import * as Yup from 'yup';

export const recordatoriosSchema = Yup.object().shape({
  codigoMascota: Yup.number().required(),
  titulo: Yup.string().required('El titulo es requerido'),
  descripcion: Yup.string()
    .required('La descripcion es requerida')
    .max(500, 'La descripcion no puede tener mas de 500 caracteres')
});

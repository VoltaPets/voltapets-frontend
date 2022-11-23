import * as yup from 'yup';

export const vacunaSchema = yup.object().shape({
  fechaVacunacion: yup
    .date()
    .nullable()
    .required('La fecha de la vacuna es requerida')
    .typeError('La fecha de la vacuna es requerida')
    .default(null)
});

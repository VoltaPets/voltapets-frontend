/**
 *
 * @param {*} rut
 * @returns Validación de rut
 */
export const rutValidate = (rut) => {
  if (!/^[0-9]+-[0-9kK]{1}/.test(rut)) {
    return false;
  }

  let splittedRut = rut.split('-');
  let digitos = splittedRut[0];
  let verificador = splittedRut[1];

  if (verificador == 'K') verificador = 'k';

  return verifyDV(digitos) == verificador;
};

/**
 * Realiza una verificación del número verificador del rut chileno
 * @param {*} digitos
 * @returns
 */
const verifyDV = (digitos) => {
  let M = 0;
  let S = 1;

  for (; digitos; digitos = Math.floor(digitos / 10)) {
    S = (S + (digitos % 10) * (9 - (M++ % 6))) % 11;
  }

  return S ? S - 1 : 'k';
};

// Librerías
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import {
  Dialog,
  Grid,
  Card,
  CardMedia,
  Divider,
  Button,
  IconButton,
  Box,
  Typography
} from '@mui/material';

// Relative imports
import CardMascotaRegistrada from './CardMascotaRegistrada';
import FormInput from '../../../../commons/FormInput';
import FormSelect from '../../../../commons/FormSelect';
import FormRadio from '../../../../commons/FormRadio';
import FormDatePicker from '../../../../commons/FormDatePicker';

const ModalCreacionMascota = ({ open, onClose }) => {
  // Estados
  const [mascotaSelected, setMascotaSelected] = useState(null);
  const [editMode, setEditMode] = useState(false);

  //Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nombre: '',
      descripcion: '',
      fechaNacimiento: null,
      isFechaNacimiento: false,
      isYear: false,
      esterilizado: false,
      edadRegistro: 0,
      codigoSexo: 0,
      codigoTamanio: 0,
      codigoRaza: 0
    }
  });

  // Funciones
  const handleSelected = (mascota) => {
    setMascotaSelected(mascota);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: 'inherit', fontWeight: 'bold', flex: 0.1 }}
        >
          Cerrar
        </Button>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Administrar Mis Mascota
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Typography variant="subtitle2" sx={{ textAlign: 'justify' }}>
            En este panel podrás administrar tus mascotas, puedes crear, editar o eliminar una
            mascota. Para crear una mascota debes llenar todos los campos del formulario y dar click
            en el botón "Crear Mascota". Para editar o eliminar una mascota debes seleccionar una
            mascota de la lista y dar click en el botón "Editar" o "Eliminar" respectivamente.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
            Mascotas Registradas
          </Typography>
          <Grid container spacing={2} sx={{ maxHeight: 268, overflowY: 'scroll', mb: 2 }}>
            {[1, 2, 3].map((mascota) => (
              <CardMascotaRegistrada key={mascota} />
            ))}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Card
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          variant="outlined"
          sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 4 }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Agregar Mascota
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box
              sx={{
                flex: 0.4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}
            >
              <CardMedia
                component="img"
                image="/logo.jpg"
                alt="Mascota"
                sx={{ height: 200, width: 200, borderRadius: '50%', mx: 'auto' }}
              />
              <Button
                variant="contained"
                color="info"
                sx={{
                  width: 'fit-content',
                  mx: 'auto',
                  textTransform: 'inherit',
                  fontWeight: 'bold'
                }}
              >
                Elegir Imagen
              </Button>
            </Box>

            <Box sx={{ width: '100%', flex: 1  }}>
              <Grid container spacing={2} sx={{ width: '100%', mb: 2 }}>
                <FormInput
                  noMb
                  width={6}
                  control={control}
                  name="nombre"
                  labelText="Nombre"
                  placeholderText="Firulais"
                  errorName={errors.nombre}
                  errorText={errors.nombre?.message}
                />

                <FormSelect
                  width={3}
                  control={control}
                  name="codigoRaza"
                  dataArray={[
                    { id: 1, descripcion: 'Husky' },
                    { id: 2, descripcion: 'Samoyedo' }
                  ]}
                  labelText="Raza"
                  errorName={errors.codigoRaza}
                  errorText={errors.codigoRaza?.message}
                />
                <FormSelect
                  width={3}
                  control={control}
                  name="codigoTamanio"
                  dataArray={[
                    { id: 1, descripcion: 'Joven' },
                    { id: 2, descripcion: 'Adulto' }
                  ]}
                  labelText="Tamaño"
                  errorName={errors.codigoTamanio}
                  errorText={errors.codigoTamanio?.message}
                />
              </Grid>

              <Grid container sx={{ gap: 2, mb: 2 }}>
                <Card variant="outlined" sx={{ flex: 1, p: 1 }}>
                  <FormInput
                    noMb
                    width={12}
                    control={control}
                    name="edadRegistro"
                    labelText="Edad Aprox."
                    placeholderText="3 años"
                    errorName={errors.edadRegistro}
                    errorText={errors.edadRegistro?.message}
                  />
                  <FormRadio
                    control={control}
                    name="isYear"
                    labelText=""
                    errorName={errors.isYear}
                    errorText={errors.isYear?.message}
                    width={12}
                    dataArray={[
                      { id: 1, nombre: 'Años', valor: true },
                      { id: 2, nombre: 'Meses', valor: false }
                    ]}
                  />
                </Card>

                <Card variant="outlined" sx={{ flex: 1, p: 1 }}>
                  <FormDatePicker
                    control={control}
                    name={'fechaNacimiento'}
                    labelText={'Fecha Adopción'}
                    errorName={errors.fechaNacimiento}
                    errorText={errors.fechaNacimiento?.message}
                    width={12}
                  />
                  <FormRadio
                    control={control}
                    name="isFechaNacimiento"
                    labelText=""
                    errorName={errors.isFechaNacimiento}
                    errorText={errors.isFechaNacimiento?.message}
                    width={12}
                    dataArray={[
                      { id: 1, nombre: 'Nacimiento', valor: true },
                      { id: 2, nombre: 'Adopción', valor: false }
                    ]}
                  />
                </Card>
              </Grid>

              <Grid container mb={4}>
                <FormRadio
                  control={control}
                  name="codigoSexo"
                  labelText="Sexo"
                  errorName={errors.codigoSexo}
                  errorText={errors.codigoSexo?.message}
                  width={6}
                  dataArray={[
                    { id: 1, nombre: 'Macho', valor: 1 },
                    { id: 2, nombre: 'Hembra', valor: 2 }
                  ]}
                />
                <FormRadio
                  control={control}
                  name="esterilizado"
                  labelText="Esterilizado"
                  errorName={errors.esterilizado}
                  errorText={errors.esterilizado?.message}
                  width={6}
                  dataArray={[
                    { id: 1, nombre: 'Si', valor: true },
                    { id: 2, nombre: 'No', valor: false }
                  ]}
                />
              </Grid>
              <Grid container mb={8}>
                <FormInput
                  noMb
                  variant="outlined"
                  width={12}
                  rows={4}
                  multiline
                  control={control}
                  maxLength={500}
                  name="descripcion"
                  labelText="Cuentanos más sobre tu mascota"
                  placeholderText="Descripción de la mascota"
                  errorName={errors.descripcion}
                  errorText={errors.descripcion?.message}
                />
              </Grid>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', flex: 1 }}
                >
                  Cancelar
                </Button>
                <Button
                  disabled={!editMode}
                  variant="contained"
                  color="warning"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', flex: 1 }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  type="submit"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', flex: 1 }}
                >
                  Guardar
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Dialog>
  );
};

export default ModalCreacionMascota;

// Libraries
import { useForm } from 'react-hook-form';

// MUI
import { Box, Card, Button, Grid, Typography } from '@mui/material';

// Relative Imports
import FormInput from '../../../commons/FormInput';
import FormSelect from '../../../commons/FormSelect';
import { regiones, comunas } from '../../../../mock/dataArray';
import PaseadorServicioCard from './PaseadorServicioCard';

const formSettings = {
  defaultValues: {
    region: 1,
    comuna: '',
    calle: '',
    numero: ''
  }
};

const paseadores = [
  {
    id: 1,
    imagenPerfil: 'https://cl.paseaperros.com/uploads/thumbs/User/300x300/317171/received-464217591094846.jpeg',
    nombre: 'Alejandro Perez',
    experiencia: '2 años',
    descripcion:
      'Me considero una persona responsable y entuciasta con los animales, en especial con los perros. Soy una persona que le gusta salir a caminar y me gustaría poder hacerlo con tu mascota.',
    calificacion: 3.0,
    necesidadesBasicas: 5000,
    juegoMascota: 5500,
    socializacionMascota: 6000
  },
  {
    id: 2,
    imagenPerfil: 'https://media-exp1.licdn.com/dms/image/C4E03AQGu5IDOD3WdKg/profile-displayphoto-shrink_800_800/0/1659981098878?e=2147483647&v=beta&t=pGoQyOulpWalBBTSkyYFg45XLblwFSZH_QcznUunF88',
    nombre: 'Anthony Rodríguez',
    experiencia: '1 años',
    descripcion:
      'Me encanta salir de paseo con perros. Ellos disfrutan mucho la buena compañía, recorrer distintos lugares y jugar en algún parque libres, donde pueden gastar su energía de buena forma.',
    calificacion: 4.0,
    necesidadesBasicas: 4000,
    juegoMascota: 5500,
    socializacionMascota: 6500
  },
  {
    id: 3,
    imagenPerfil: 'https://images.mubicdn.net/images/cast_member/58895/cache-574742-1652166339/image-w856.jpg?size=800x',
    nombre: 'Farith Mujica',
    experiencia: '5 años',
    descripcion:
      'Tengo 36 años, trabajo desde casa, me encantan los perritos, a lo largo de la vida he tenido varios compañeros y sobrinos peludos: Benito, Dana, Dani, Dollar, Lupita, Miranda, París y Thor',
    calificacion: 5.0,
    necesidadesBasicas: 7500,
    juegoMascota: 8000,
    socializacionMascota: 8500
  },
  {
    id: 4,
    imagenPerfil: 'https://cl.paseaperros.com/uploads/thumbs/User/300x300/200115/A0830D90-B059-4A7D-A5FC-8FC718016C0A.jpeg',
    nombre: 'Roxana Pino',
    experiencia: '3 años',
    descripcion:
      'Hola, me encantan los animales y caminar, por ello, ofrezco mi servicio de paseadora de perros, el cual se caracteriza por el respeto a los intereses de las mascotas, tiempo para olfatear y limpieza',
    calificacion: 4.5,
    necesidadesBasicas: 6000,
    juegoMascota: 6500,
    socializacionMascota: 8000
  }
];

const BusquedaMascota = () => {
  const { control, handleSubmit, reset } = useForm(formSettings);

  const handleReset = () => {
    reset(formSettings.defaultValues);
    replace('/adopcion?region=1');
  };

  const onSubmit = (data) => console.log('data', data);

  return (
    <Box
      sx={{
        py: 4,
        bgcolor: 'primary.main'
      }}
    >
      <Box mb={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          Búsqueda de Paseadores
        </Typography>
        <Card variant="outlined" sx={{ p: 1, borderRadius: 4, bgcolor: 'white', width: '90%' }}>
          <Grid
            container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            spacing={2}
            sx={{ alignItems: 'center', width: '100%', p: 1 }}
          >
            <FormSelect
              disabled
              noHelperText
              width={4}
              name="region"
              labelText="Región"
              control={control}
              dataArray={regiones}
            />
            <FormSelect
              noHelperText
              width={2}
              name="comuna"
              labelText="Comuna"
              control={control}
              dataArray={comunas}
            />
            <FormInput noHelperText width={2} name="calle" labelText="Calle" control={control} />
            <FormInput noHelperText width={1} name="numero" labelText="Número" control={control} />
            <Grid item xs sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                Buscar
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleReset}
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Resultados
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            width: '90%',
            borderRadius: 4,
            bgcolor: 'white',
            minHeight: 400,
            maxHeight: 800,
            overflowY: 'scroll',
            pb: 2,
            pr: 2
          }}
        >
          {paseadores.map((paseador) => (
            <PaseadorServicioCard key={paseador.id} paseador={paseador} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BusquedaMascota;

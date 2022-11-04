// Librerías
import { useState, useEffect } from 'react';
import { addHours } from 'date-fns';
import { useForm, Controller } from 'react-hook-form';

// MUI
import { DataGrid } from '@mui/x-data-grid';
import {
  Grid,
  Box,
  Chip,
  Card,
  CardMedia,
  Divider,
  Typography,
  Select,
  Checkbox,
  MenuItem,
  FormControl
} from '@mui/material';

// Relative Imports
import FormSelect from '../../../commons/FormSelect';
import { meses, semanas, minutos } from '../../../../mock/reservaData';
import Agenda from './Agenda';

const formSettings = {
  defaultValues: {
    mes: '',
    semana: ''
  }
};

const SelectMinutos = ({ value, fn }) => {
  return (
    <FormControl sx={{ width: '50%' }}>
      <Select autoWidth value={value} onChange={fn}>
        <MenuItem value="0">--</MenuItem>
        <MenuItem value="15">15 min</MenuItem>
        <MenuItem value="30">30 min</MenuItem>
        <MenuItem value="45">45 min</MenuItem>
        <MenuItem value="60">1 hora</MenuItem>
      </Select>
    </FormControl>
  );
};

const MascotaCard = ({ petImg, nombre, fn }) => {
  return (
    <Card variant="outlined" sx={{ flex: 1, p: 2 }}>
      <CardMedia
        component="img"
        image={petImg}
        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
      <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
        {nombre}
      </Typography>
      <Checkbox value={nombre} onChange={fn} />
    </Card>
  );
};

const AgendaPaseos = ({ mascota }) => {
  // Estados
  const [fecha, setFecha] = useState(new Date().toLocaleDateString().slice(0, 10));
  const [hora, setHora] = useState(new Date().toLocaleTimeString().slice(0, 5));
  const [paseoBasico, setPaseoBasico] = useState(0);
  const [juegoMascota, setJuegoMascota] = useState(0);
  const [socializacionMascota, setSocializacionMascota] = useState(0);
  const [totalMinutos, setTotalMinutos] = useState(0);
  const [mascotas, setMascotas] = useState([]);

  console.log('Mascotas: ', mascotas);

  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(formSettings);

  // Funciones
  const handleTotalMinutos = () => {
    setTotalMinutos(paseoBasico + juegoMascota + socializacionMascota);
  };

  const handlePaseoBasico = (e) => {
    setPaseoBasico(Number(e.target.value));
  };

  const handleJuegoMascota = (e) => {
    setJuegoMascota(Number(e.target.value));
  };

  const handleSocializacion = (e) => {
    setSocializacionMascota(Number(e.target.value));
  };

  const handleMascota = (e) => {
    
  };

  useEffect(() => {
    handleTotalMinutos();
  }, [paseoBasico, juegoMascota, socializacionMascota]);

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
        Agenda la fecha y hora de tu paseo
      </Typography>

      {/* Reserva */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        {/* Agenda de Reserva */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 2,
              borderRadius: 4,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#e5e5e5'
            }}
          >
            {/* Selectores */}
            <Grid
              container
              component={Card}
              variant="outlined"
              sx={{ borderRadius: 4, mb: 4, p: 2 }}
            >
              <FormSelect
                dataArray={meses}
                labelText="Mes"
                name="mes"
                control={control}
                noHelperText
                width={6}
              />
              <FormSelect
                dataArray={semanas}
                labelText="Semana"
                name="semana"
                control={control}
                noHelperText
                width={6}
              />
            </Grid>

            {/* Calendario */}
            <Grid container component={Card} variant="outlined" sx={{ borderRadius: 4 }}>
              <Agenda />
            </Grid>
          </Card>
        </Grid>

        {/* Resumen Reserva */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
        >
          <Card variant="outlined" sx={{ p: 4, borderRadius: 4, flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'start', mb: 4 }}>
              Resumen Hora Reservada
            </Typography>

            {/* Fecha elegida */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
              <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
                Fecha:
              </Typography>
              <Chip size="small" label={fecha} sx={{ fontWeight: 'bold' }} />
            </Box>

            {/* Horas de paseo */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
                Hora:
              </Typography>
              <Chip size="small" label="15:00" /> -
              <Chip size="small" label="16:00" />
            </Box>

            {/* Cantidad de mascotas */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: 'start',
                mt: 4,
                mb: 2
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Cantidad de mascotas
              </Typography>
              <Chip size="small" label={`${1} mascota`} />
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }} gutterBottom>
              Duración
            </Typography>

            <Grid container component={Card} variant="outlined" sx={{ gap: 1, p: 2 }}>
              {/* Paseo necesidades básicas */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle2" sx={{ flex: 1 }}>
                    Paseo de necesidades básicas
                  </Typography>
                  <Typography variant="subtitle2">{paseoBasico} min</Typography>
                </Box>
              </Grid>

              {/* Tiempo juego con mascota */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle2" sx={{ flex: 1 }}>
                    Tiempo de juego con la mascota
                  </Typography>
                  <Typography variant="subtitle2">{juegoMascota} min</Typography>
                </Box>
              </Grid>

              {/* Socialización otras mascotas */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle2" sx={{ flex: 1 }}>
                    Socialización con otras mascotas
                  </Typography>
                  <Typography variant="subtitle2">{socializacionMascota} min</Typography>
                </Box>
              </Grid>

              {/* Duración total */}
              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle2" sx={{ flex: 1, fontWeight: 'bold' }}>
                    Duración total
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {totalMinutos} min
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* Personaliza tu paseo */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 2,
              borderRadius: 4,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Personaliza */}
            <Box sx={{ width: '100%', mb: 6 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                Personaliza tu paseo
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                {/* Fecha seleccionada */}
                <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                  <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                    Fecha <br /> seleccionada:
                  </Typography>
                  <Chip size="medium" label={fecha} sx={{ fontWeight: 'bold' }} />
                </Card>

                {/* Hora inicio */}
                <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                  <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                    Hora de inicio <br />
                    seleccionada:
                  </Typography>
                  <Chip size="medium" label="15:00" sx={{ fontWeight: 'bold' }} />
                </Card>

                {/* Hora término */}
                <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                  <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                    Hora de término <br />
                    seleccionada:
                  </Typography>
                  <Chip size="medium" label="16:00" sx={{ fontWeight: 'bold' }} />
                </Card>
              </Box>
            </Box>

            {/* Duración paseo */}
            <Box sx={{ width: '100%', mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                Fija la duración de tu paseo
              </Typography>

              <Box sx={{ width: '100%', display: 'flex', gap: 2, mb: 2 }}>
                {/* Paseo Básico */}
                <Card
                  variant="outlined"
                  sx={{
                    flex: 1,
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
                  >
                    Servicio Básico
                  </Typography>

                  <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                    Tiempo de juego <br />
                    con la Mascota
                  </Typography>

                  <SelectMinutos value={paseoBasico} fn={handlePaseoBasico} />
                </Card>

                {/* Servicio de Bienestar Integral */}
                <Card variant="outlined" sx={{ display: 'flex', flexWrap: 'wrap', p: 1 }}>
                  <Box component="header" sx={{ width: '100%' }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
                    >
                      Servicio de Bienestar Integral
                    </Typography>
                  </Box>

                  {/* Juego Mascota */}
                  <Box
                    sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                      Tiempo de juego <br />
                      con la Mascota
                    </Typography>

                    <SelectMinutos value={juegoMascota} fn={handleJuegoMascota} />
                  </Box>

                  {/* Socialización con otras mascotas */}
                  <Box
                    sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                      Socialización con <br />
                      otras mascotas
                    </Typography>

                    <SelectMinutos value={socializacionMascota} fn={handleSocializacion} />
                  </Box>
                </Card>
              </Box>

              <Box sx={{ p: 2, display: 'flex', justifyContent: 'end' }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 'bold',
                    border: 1,
                    borderRadius: 2,
                    borderColor: 'divider',
                    p: 1
                  }}
                >
                  Duración total: {totalMinutos} min
                </Typography>
              </Box>
            </Box>

            {/* Selecciona Mascota */}
            <Box sx={{ width: '100%', mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                Selecciona las mascotas para el paseo
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <MascotaCard
                  petImg="https://bestforpets.cl/tienda/img/cms/Blog/RAZAS/Pastor-aleman1.jpg"
                  nombre="Firulais"
                  fn={handleMascota}
                />
                <MascotaCard
                  petImg="https://www.publimetro.cl/resizer/zPavlS9VGbupdf6V5psc6Jm17pE=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/FSVO2OKVDFCA5AFMIIKRUNT4UE.jpg"
                  nombre="Luna"
                  fn={handleMascota}
                />
                <MascotaCard
                  petImg="https://www.nombresdeperros.eu/wp-content/uploads/2020/04/macho-de-samoyedo-en-el-jardin.jpg"
                  nombre="Nube"
                  fn={handleMascota}
                />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Bienestar */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
        >
          <Card variant="outlined" sx={{ p: 4, borderRadius: 4, flex: 1 }}>
            a
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AgendaPaseos;

// Librerías
import { useState, useEffect } from 'react';
import { addDays, addMonths, hoursToMinutes } from 'date-fns';
import { es } from 'date-fns/locale';
import { useForm, Controller } from 'react-hook-form';

// MUI
import {
  Grid,
  Box,
  Chip,
  Card,
  Divider,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Switch
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// Relative Imports
import { meses, semanas, parques } from '../../../../../mock/reservaData';
import { horarios } from './datosAgenda';
import FormSelect from '../../../../commons/FormSelect';
import Horario from './Horario';
import SelectMinutos from './SelectMinutos';
import PersonalizaPaseo from './PersonalizaPaseo';

const formSettings = {
  defaultValues: {
    mes: '',
    semana: ''
  }
};

const AgendaPaseos = ({ mascota }) => {
  // Estados
  const [mascotas, setMascotas] = useState([]);
  const [date, setDate] = useState(new Date());

  // Tarifas
  const [paseoBasico, setPaseoBasico] = useState(0);
  const [juegoMascota, setJuegoMascota] = useState(0);
  const [socializacionMascota, setSocializacionMascota] = useState(0);

  const [totalMinutos, setTotalMinutos] = useState(0);
  const [horaFinal, setHoraFinal] = useState('--');
  const [hora, setHora] = useState(0);
  const [selected, setSelected] = useState(false);
  const [servicioBienestar, setServicioBienestar] = useState(false);

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

  const handleBienestar = (e) => {
    setServicioBienestar(e.target.checked);
  };

  const handleTerminoPaseo = () => {
    const minutos = totalMinutos % 60;
    const horas = totalMinutos % 60 === 0 ? totalMinutos / 60 : Math.floor(totalMinutos / 60);

    if (minutos % 60 === 0) {
      setHoraFinal(`${hora}:00`);
    }

    setHoraFinal(`${hora + horas}:${minutos > 9 ? minutos : `0${minutos}`}`);
  };

  const handleToggleMascota = (e) => {
    const currentIndex = mascotas.indexOf(e.target.value);
    const newChecked = [...mascotas];

    if (currentIndex === -1) {
      newChecked.push(e.target.value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setMascotas(newChecked);
  };

  // Variables
  const personalizarPaseoProps = {
    date,
    hora,
    servicioBienestar,
    horaFinal,
    mascotas,
    paseoBasico,
    juegoMascota,
    socializacionMascota,
    totalMinutos,
    handlePaseoBasico,
    handleSocializacion,
    handleToggleMascota,
    handleBienestar,
    control
  };

  // Efectos
  useEffect(() => {
    handleTotalMinutos();
    handleTerminoPaseo();
  }, [paseoBasico, juegoMascota, socializacionMascota, hora, totalMinutos]);

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
            <Grid
              container
              component={Card}
              variant="outlined"
              sx={{ borderRadius: 4, display: 'flex' }}
            >
              <Grid item xs={5}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                  <StaticDatePicker
                    disablePast
                    renderInput={(params) => <TextField {...params} />}
                    minDate={addDays(new Date(), 3)}
                    shouldDisableMonth={() => addMonths(new Date(), 2)}
                    displayStaticWrapperAs="desktop"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Grid>

              <Divider variant="middle" orientation="vertical" flexItem mx={1} />

              {/* Horarios */}
              <Grid
                item
                xs
                p={2}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                  Horarios disponibles
                </Typography>

                {/* Lista de horarios disponibles */}
                <Grid container sx={{ flex: 1, width: '100%' }} spacing={1}>
                  {horarios.map((horario) => (
                    <Horario
                      key={horario.id}
                      setHora={setHora}
                      hora={horario.hora}
                      estado={horario.estado}
                    />
                  ))}
                </Grid>
              </Grid>
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
              <Chip
                size="small"
                label={date.toLocaleDateString('es-CL').split(0.6)}
                sx={{ fontWeight: 'bold' }}
              />
            </Box>

            {/* Horas de paseo */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
                Hora:
              </Typography>
              <Chip size="small" label={`${hora}:00`} /> -
              <Chip size="small" label={horaFinal} />
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
              <Chip
                size="small"
                label={
                  mascotas.length === 0
                    ? 'No hay mascotas seleccionadas'
                    : mascotas.length > 1
                    ? `${mascotas.length} Mascotas`
                    : `${mascotas.length} Mascota`
                }
              />
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

      {}

      {/* Personaliza tu paseo */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        <PersonalizaPaseo {...personalizarPaseoProps} />
      </Grid>
    </>
  );
};

export default AgendaPaseos;

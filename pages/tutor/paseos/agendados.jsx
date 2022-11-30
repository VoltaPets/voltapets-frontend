// Librerías
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Card,
  Box,
  Divider,
  Button
} from '@mui/material';

// Relative Imports
import Layout from '../../../src/components/commons/Layout';
import BuscadorPaseosAgendados from '../../../src/components/screens/private/tutor/paseos/BuscadorPaseosAgendados';
import FormInput from '../../../src/components/commons/FormInput';

const createData = (
  id,
  nombrePaseador,
  fecha,
  horaInicio,
  horaTermino,
  cantidadMascota,
  tiempoRestante,
  seleccion
) => {
  return {
    id,
    nombrePaseador,
    fecha,
    horaInicio,
    horaTermino,
    cantidadMascota,
    tiempoRestante,
    seleccion
  };
};

const rows = [
  createData(1, 'Marco Perez', '03/06/2023', '14:00', '16:00', 2, '2 días'),
  createData(2, 'Roger Sánchez', '11/02/2023', '09:00', '11:00', 1, '1 días'),
  createData(3, 'Alma Díaz', '01/11/2023', '12:00', '14:00', 1, '1 días'),
  createData(4, 'Pepe Lota', '20/05/2023', '16:00', '17:00', 2, '3 días')
];

const PaginaPaseosAgendados = () => {
  // Hooks
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm();

  return (
    <Layout
      title="Paseos Agendados"
      description="Página para ver los paseos agendados"
      nextPage="tutor/paseos-agendados"
      tutorRequired
      authRequired
    >
      <Grid container sx={{ bgcolor: 'primary.main', height: '100%' }}>
        <BuscadorPaseosAgendados mb={4} />

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TableContainer component={Card} sx={{ width: '90%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Nombre Paseador</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">
                    Fecha
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">
                    Hora Inicio
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">
                    Hora Término
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">
                    Cantidad de Mascotas
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">
                    Tiempo Restante
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* Datos */}
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} sx={{ '&:hover': { cursor: 'pointer' } }}>
                    <TableCell component="th" scope="row">
                      {row.nombrePaseador}
                    </TableCell>
                    <TableCell align="center">{row.fecha}</TableCell>
                    <TableCell align="center">{row.horaInicio}</TableCell>
                    <TableCell align="center">{row.horaTermino}</TableCell>
                    <TableCell align="center">{row.cantidadMascota}</TableCell>
                    <TableCell align="center">{row.tiempoRestante}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              height: 'fit-content'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              ¿Desea cancelar el paseo?
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }} />
            <Box sx={{ width: '100%', display: 'flex', gap: 2, mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Dueño:
              </Typography>
              <Typography variant="subtitle2">Nombre del dueño de la mascota</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Fecha:
              </Typography>
              <Typography variant="subtitle2">Fecha del paseo</Typography>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Hora Inicio:
              </Typography>
              <Typography variant="subtitle2">Hora de inicio del paseo</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Hora Término:
              </Typography>
              <Typography variant="subtitle2">Hora de término del paseo</Typography>
            </Box>

            <Box sx={{ width: '100%', gap: 2, mt: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} gutterBottom>
                Razones:
              </Typography>
              <FormInput
                control={control}
                name="razones"
                labelText=""
                variant="outlined"
                multiline
                rows={5}
                errorName={errors.razones}
                errorText={errors.razones?.message}
              />
              <Box sx={{ mt: 10, display: 'flex', justifyContent: 'end' }}>
                <Button
                  color="info"
                  variant="contained"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
                >
                  Cancelar Paseo
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PaginaPaseosAgendados;

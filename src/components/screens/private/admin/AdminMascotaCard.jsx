// Librería
import { useRouter } from 'next/router';

// MUI
import { Box, Card, Grid, Typography, Divider } from '@mui/material';

const AdminMascotaCard = ({ mascota }) => {
  // Variables
  const nombre = mascota?.nombre;
  const estado = mascota.estadoMascota?.descripcion;
  const vacunas = mascota?.vacunaMascotas;
  const etario = mascota.grupoEtario?.descripcion;
  const tutorFullname = `${mascota.tutor?.nombre} ${mascota.tutor?.apellido}`;

  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleRedirect = () => {
    push('/administracion?tab=mascotas');
  };

  return (
    <Grid key={mascota.id} item xs={4} sx={{ display: 'flex', gap: 1, height: '100%' }}>
      <Card
        variant="outlined"
        onClick={handleRedirect}
        sx={{
          borderRadius: 4,
          p: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          height: 200,
          '&:hover': {
            cursor: 'pointer'
          }
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', gap: 1 }}>
          {/* Nombre */}
          <Box sx={{ flex: 0.8 }}>
            <Typography
              variant="caption"
              color="secondary.main"
              sx={{ textDecoration: 'underline' }}
            >
              Nombre
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {nombre}
            </Typography>
          </Box>
          <Divider sx={{ flex: 0.1 }} orientation="vertical" flexItem />

          {/* Tutor */}
          <Box sx={{ flex: 0.5 }}>
            <Typography variant="caption" color="secondary.main">
              Tutor
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {tutorFullname}
            </Typography>
          </Box>
        </Box>

        <Grid container sx={{ width: '100%', display: 'flex', flex: 1 }}>
          {/* Estado */}
          <Grid item xs={4}>
            <Typography
              variant="caption"
              color="secondary.main"
              sx={{ textDecoration: 'underline', textAlign: 'center', width: '100%' }}
            >
              Estado
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {estado}
            </Typography>
          </Grid>

          {/* Vacunas */}
          <Grid item xs={4}>
            <Typography
              variant="caption"
              color="secondary.main"
              sx={{ textDecoration: 'underline', textAlign: 'center', width: '100%' }}
            >
              Vacunas
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {vacunas?.map((vacunaMascota) => vacunaMascota.vacuna?.descripcion).join(', ')}
            </Typography>
          </Grid>

          {/* Grupo etario */}
          <Grid item xs={4}>
            <Typography
              variant="caption"
              color="secondary.main"
              sx={{ textDecoration: 'underline', textAlign: 'center', width: '100%' }}
            >
              Grupo Etario
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {etario}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default AdminMascotaCard;

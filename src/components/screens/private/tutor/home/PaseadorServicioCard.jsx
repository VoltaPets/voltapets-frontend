// Librerías
import { useRouter } from 'next/router';

// MUI
import { Card, Chip, CardMedia, Rating, Divider, Grid, Box, Typography } from '@mui/material';

// Relative Imports
import { clpFormatter } from '../../../../../utils/currencyFormat';

const TutorServicioCard = ({ paseador }) => {
  // Variables
  const fullName = `${paseador?.nombre} ${paseador?.apellido}` || 'Nombre Apellido';
  const descripcion = paseador?.descripcion || 'No hay descripción';
  const calificacion = paseador?.calificacion || 0;
  const experiencia = paseador.experienciaPaseador?.descripcion || 'Sin Asignar';
  const img = paseador.usuario.imagen?.url + paseador.usuario.imagen?.path || '/pawBg.png';
  const tarifaNormal = paseador?.tarifaActual?.basico || 0;
  const tarifaJuego = paseador?.tarifaActual?.juego || 0;
  const tarifaSocial = paseador?.tarifaActual?.social || 0;

  // Hooks
  const { push } = useRouter();

  // Handlers
  const handleClick = () => {
    push(`/tutor/paseos/agendar/${paseador.id}`);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card
        elevation={2}
        onClick={handleClick}
        sx={{
          height: 300,
          borderRadius: 2,
          bgcolor: 'white',
          display: 'flex',
          '&:hover': {
            cursor: 'pointer'
          }
        }}
      >
        <Box
          sx={{
            flex: 0.7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            p: 2
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt="Paseador de perros"
            sx={{ width: '100%', height: 200, borderRadius: 2, mb: 1 }}
          />
          <Rating precision={0.5} defaultValue={0} readOnly value={calificacion} size="medium" />
          <Box
            sx={{
              textAlign: 'center',
              fontSize: '0.7em',
              mt: 1,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            $
            <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
              {tarifaNormal * 60}
            </Typography>
            <br /> / hr
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box sx={{ flex: 1, p: 2 }}>
          <Box mb={2}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                {fullName}
              </Typography>
            </Box>
            <Chip label={experiencia} color="secondary" size="small" />
          </Box>

          <Box sx={{ mb: 2, height: 80, overflow: 'hidden' }}>
            <Typography variant="body2">{descripcion}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              <b>Necesidades Básicas:</b> {clpFormatter.format(tarifaNormal)}
            </Typography>
            <Typography variant="body2">
              <b>Juego con la mascota:</b> {clpFormatter.format(tarifaJuego)}
            </Typography>
            <Typography variant="body2">
              <b>Socialización con mascotas:</b> {clpFormatter.format(tarifaSocial)}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default TutorServicioCard;

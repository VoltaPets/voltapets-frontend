// MUI
import { Card, Chip, CardMedia, Rating, Divider, Grid, Box, Typography } from '@mui/material';

const TutorServicioCard = ({ paseador }) => {
  const fullName = `${paseador?.nombre} ${paseador?.apellido}` || 'Nombre Apellido';
  const calificacion = paseador?.calificacion || 0;
  const img = paseador?.img || '/pawBg.png';
  const tarifaNormal = paseador?.tarifaActual?.basico || 0;
  const tarifaJuego = paseador?.tarifaActual?.juego || 0;
  const tarifaSocial = paseador?.tarifaActual?.social || 0;

  return (
    <Grid item xs={12} sm={6}>
      <Card
        elevation={2}
        sx={{
          height: 300,
          borderRadius: 2,
          bgcolor: 'white',
          display: 'flex',
          '&:hover': {
            cursor: 'pointer',
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
          <Rating
            precision={0.5}
            defaultValue={0}
            readOnly
            value={calificacion}
            size="medium"
          />
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
              {paseador.necesidadesBasicas}
            </Typography>
            <br /> / paseo
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box sx={{ flex: 1, p: 2 }}>
          <Box mb={2}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                {paseador.nombre}
              </Typography>
            </Box>
            <Chip label={`${paseador.experiencia} de experiencia`} color="secondary" size="small" />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">{paseador.descripcion}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              <b>Necesidades Básicas:</b> ${paseador.necesidadesBasicas}
            </Typography>
            <Typography variant="body2">
              <b>Juego con la mascota:</b> ${paseador.juegoMascota}
            </Typography>
            <Typography variant="body2">
              <b>Socialización con mascotas:</b> ${paseador.socializacionMascota}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default TutorServicioCard;

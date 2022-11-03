import { Card, Chip, CardMedia, Rating, Grid, Box, Typography } from '@mui/material';

const TutorServicioCard = ({ paseador }) => {
  console.log('paseador', paseador);
  return (
    <Grid item xs={12} sm={6}>
      <Card
        elevation={2}
        sx={{
          height: 300,
          borderRadius: 2,
          bgcolor: 'white',
          display: 'flex'
        }}
      >
        <Box
          sx={{
            flex: 0.7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start'
          }}
        >
          <CardMedia
            component="img"
            image={paseador.imagenPerfil}
            alt="Paseador de perros"
            sx={{ width: '100%', height: 200, borderRadius: 2, mb: 1 }}
          />
          <Rating
            precision={0.5}
            defaultValue={0}
            readOnly
            value={paseador.calificacion}
            size="medium"
          />
          <Box sx={{ textAlign: 'center', fontSize: '0.7em', mt: 1, display: 'flex', alignItems: 'center' }}>
            $
            <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
              {paseador.necesidadesBasicas}
            </Typography>
            <br /> / paseo
          </Box>
        </Box>
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

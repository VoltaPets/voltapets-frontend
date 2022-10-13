// Librerias
import { useState } from 'react';

// MUI
import { Grid, Box, Card, Chip, Button, CardMedia, Typography } from '@mui/material';

// Relative Imports
import ModalAdopcion from './MascotaModal';

const MascotaCard = ({ isAdopcion, mascota }) => {
  // Estados
  const [openModal, setOpenModal] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      {/* <ModalAdopcion open={openModal} setOpen={setOpenModal} adopcion={mascota} /> */}
      <Card
        elevation={2}
        // onClick={() => setOpenModal(true)}
        sx={{
          py: 1,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          '&:hover': { cursor: 'pointer' }
        }}
      >
        <Box sx={{ width: '100%', px: 1, mb: 2 }}>
          <CardMedia
            component="img"
            image={mascota.imagen}
            sx={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 2 }}
            onError={(e) => {
              e.currentTarget.img = '/logo.jpg';
              e.onError = null;
            }}
          />
        </Box>

        <Box sx={{ flex: 1, px: 2 }}>
          {/* Título */}
          <Box mb={2} component="header">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant="h6"
                component="h1"
                sx={{ fontSize: '1em', fontWeight: 800 }}
                gutterBottom
              >
                {isAdopcion ? mascota.titulo : mascota.nombreMascota}
              </Typography>
            </Box>

            {/* Comuna y tipo de anuncio */}
            <Box mb={2} sx={{ display: 'flex', gap: 2 }}>
              <Chip
                label={mascota.comuna}
                size="small"
                color="info"
                variant="outlined"
                sx={{ fontWeight: 'bold' }}
              />
              <Chip
                size="small"
                label={isAdopcion ? 'Adopción' : 'Perdido'}
                color={isAdopcion ? 'primary' : 'secondary'}
                sx={{ color: 'white', fontWeight: 'bold' }}
              />
            </Box>

            {/* Responsable  y Recompensa*/}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {!isAdopcion && (
                <Typography variant="subtitle1" mb={1}>
                  <b>Recompensa:</b> ${mascota.recompensa}
                </Typography>
              )}
              <Typography variant="subtitle2">
                <b>Responsable:</b> {mascota.responsable}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }} color="info.main">
                {mascota.telefono}
              </Typography>
            </Box>

            <Box>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => setOpenModal(true)}
                sx={{ mt: 2, textTransform: 'inherit', fontWeight: 'bold' }}
              >
                Más Información
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default MascotaCard;

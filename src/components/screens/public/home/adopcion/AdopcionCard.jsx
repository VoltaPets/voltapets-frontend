// Librerias
import { useState } from 'react';

// MUI
import { Grid, Box, Card, Chip, Button, CardMedia, Typography } from '@mui/material';

// Relative Imports
import ModalAdopcion from './AdopcionModal';

const AdopcionCard = ({ adopcion }) => {
  // Estados
  const [openModal, setOpenModal] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ModalAdopcion open={openModal} setOpen={setOpenModal} adopcion={adopcion} />
      <Card
        elevation={2}
        onClick={() => setOpenModal(true)}
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
            image={adopcion.imagen}
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
            <Typography
              variant="h6"
              component="h1"
              sx={{ fontSize: '1em', fontWeight: 800 }}
              gutterBottom
            >
              {adopcion.titulo}
            </Typography>

            {/* Comuna y contacto */}
            <Box>
              <Chip
                label={adopcion.comuna}
                size="small"
                color="info"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="subtitle2">
                  <b>Usuario:</b> {adopcion.usuario.username}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }} color="info.main">
                  {adopcion.telefono}
                </Typography>
              </Box>
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

export default AdopcionCard;

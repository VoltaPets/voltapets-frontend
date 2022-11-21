import React from 'react';

// MUI
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Card, Box, CardMedia, Typography, IconButton } from '@mui/material';

const CardMascotaRegistrada = ({ handleSelected, mascota }) => {
  const imgMascota = mascota?.imagen.url + mascota?.imagen.path;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
        <Box sx={{ width: '100%', position: 'relative' }}>
          <CardMedia
            component="img"
            image={imgMascota}
            alt="Mascota"
            sx={{ height: 250, width: '100%', mx: 'auto' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: 'rgba(0,0,0,0.6)'
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}
            >
              {mascota?.nombre}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, px: 2 }}>
              <IconButton
                color="primary"
                sx={{ fontSize: '1em' }}
                onClick={handleSelected(mascota)}
              >
                <SettingsIcon />
                Editar
              </IconButton>
              <IconButton color="warning" sx={{ fontSize: '1em' }}>
                <DeleteIcon />
                Eliminar
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardMascotaRegistrada;

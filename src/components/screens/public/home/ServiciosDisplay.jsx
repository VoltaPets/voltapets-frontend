// Librerías
// MUI
import { Card, CardMedia, Box, Button, Grid, Typography } from '@mui/material';

const ServiciosDisplay = ({ servicio, telefono, autor, direccion, descripcion, image }) => {
  return (
    <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card elevation={0} sx={{ borderRadius: 4, borderColor: '#fff' }}>
        <CardMedia
          component="img"
          image={image}
          alt="Otros Servicios"
          sx={{
            border: 1,
            borderColor: 'grey.300',
            borderRadius: 4,
            height: 200,
            objectFit: 'cover'
          }}
        />
        <Box sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" color="secondary.main">
              {servicio}
            </Typography>
            <Typography variant="subtitle2">{telefono}</Typography>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
          >
            <Typography variant="caption">{autor}</Typography>
            <Typography variant="subtitle2">{direccion}</Typography>
          </Box>
          <Typography variant="body2" align="justify" color="grey.700">
            {descripcion}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default ServiciosDisplay;

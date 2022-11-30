// Librerías
import { CardMedia, Box, Grid, Typography } from '@mui/material';

const ServiciosCard = ({
  width = 12,
  img,
  subtitulo,
  descripcionUno,
  descripcionDos,
  singleParagraph
}) => {
  return (
    <Grid
      item
      xs={width}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box component="header" sx={{ flex: 0.5 }}>
        <CardMedia
          component="img"
          image={img}
          alt="Paseo de necesidades básicas"
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 4,
            border: 1,
            borderColor: 'info.main'
          }}
        />
      </Box>

      <Box component="main" sx={{ flex: 1, px: 4 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '1em', mb: 1 }}>
          {subtitulo}
        </Typography>
        <Typography variant="body2" align="justify" mb={singleParagraph ? 0 : 2}>
          {descripcionUno}
        </Typography>
        <Typography variant="body2" align="justify">
          {descripcionDos}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ServiciosCard;

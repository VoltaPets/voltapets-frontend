// MUI
import { Grid, Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const AdopcionCard = ({
  imagen = "/logo.jpg",
  titulo = 'Título',
  tipo = 'Perro',
  raza = 'Pastor Alemán',
  tamaño = 'Mediano',
  sexo = 'Macho',
  descripcion = 'Hola, soy un perro muy lindo y cariñoso. Me gustan los paseos y los juegos. Si quieres adoptarme, escríbeme a mi correo.',
  comuna = 'Santiago',
  grupoEtario = 'Adulto',
  edad = '3 años',
  telefono = '+569 1234 5678'
}) => {
  return (
    <Grid item xs={12}>
      <Card elevation={2} sx={{ borderRadius: 2, display: 'flex', height: {md: 400} }}>
        <Box sx={{ width: 100, height: 100 }}>
          <CardMedia
            component="img"
            image={imagen}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.img = "/logo.jpg"
              e.onError = null
            }}
          />
        </Box>

        <Box sx={{ flex: 1, p: 2 }}>
          {/* Título y comuna */}
          <Box mb={2}>
            <Typography variant="h5" component="h1" sx={{fontSize: '2em'}}>
              {titulo}
            </Typography>
            <Typography variant="caption">{comuna}</Typography>
            <Typography variant="body2">{telefono}</Typography>
          </Box>

          {/* Descripción */}
          <Box mb={2}>
            <Typography variant="subtitle2" color="secondary">
              Descripción:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Opcion titulo="Tipo" descripcion={tipo} />
              <Opcion titulo="Raza" descripcion={raza} />
              <Opcion titulo="Tamaño" descripcion={tamaño} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Opcion titulo="Sexo" descripcion={sexo} />
              <Opcion titulo="Grupo etario" descripcion={grupoEtario} />
              <Opcion titulo="Edad" descripcion={edad} />
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

const Opcion = ({ titulo, descripcion }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="subtitle2" color="secondary">
        {titulo}:
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {descripcion}
      </Typography>
    </Box>
  );
};

export default AdopcionCard;

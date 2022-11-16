// Librerías
import { useRouter } from 'next/router';

// MUI
import { Box, Card, Button, CardMedia, Typography, Divider } from '@mui/material';

const DisplayPerfilTutor = () => {
  // Hooks
  const { push } = useRouter();

  return (
    <Card variant="outlined" sx={{ borderRadius: 4, p: 2, width: '90%', display: 'flex' }}>
      {/* Imagen y nombre */}
      <Box
        sx={{
          flex: 0.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Botón volver */}
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', width: '100%' }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
            onClick={() => push('/tutor/profile')}
          >
            Volver
          </Button>
        </Box>
        <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
              mb: 4
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 250, height: 250, borderRadius: '50%' }}
              image="/logo.jpg"
              alt="Logo"
            />
            <Button
              variant="contained"
              color="info"
              sx={{
                textTransform: 'inherit',
                fontWeight: 'bold',
                width: 'fit-content',
                mx: 'auto'
              }}
            >
              Cambiar Imagen
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Nombre Tutor
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Datos */}
      <Box sx={{ flex: 1, border: 1 }}>
        <Card variant="outlined">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Información personal
            </Typography>
            <Button
              variant="contained"
              color="info"
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
            >
              Editar Perfil
            </Button>
          </Box>
        </Card>
      </Box>
    </Card>
  );
};

export default DisplayPerfilTutor;

// Librerías
import { useRouter } from 'next/router';

// MUI
import { Box, Card, Button, CardMedia, Typography } from '@mui/material';

// Relative imports
import DisplayInfo from '../../../../commons/DisplayInfo';

const DisplayPerfilTutor = ({ perfil }) => {
  // Hooks
  const { push } = useRouter();

  // Variables
  const fullName = `${perfil.nombre} ${perfil.apellido}`;
  const imgPerfil = perfil?.imagen.url + perfil?.imagen.path;
  const telefonoPerfil = perfil?.telefono.match(/.{1,4}/g).join(' ');

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
              image={imgPerfil}
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
              {fullName}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Datos */}
      <Box sx={{ flex: 1 }}>
        <Card
          variant="outlined"
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between'
          }}
        >
          {/* Información personal */}
          <Box mb={4}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}
            >
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
            <Box sx={{ display: 'flex', mt: 2 }}>
              <DisplayInfo titulo="Nombre" contenido={perfil?.nombre} />
              <DisplayInfo titulo="Apellido" contenido={perfil?.apellido} />
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <DisplayInfo titulo="Correo" contenido={perfil?.email} />
              <DisplayInfo titulo="Telefono" contenido={telefonoPerfil} />
            </Box>
          </Box>

          {/* Domicilio */}
          <Box mb={4}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Domicilio
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <DisplayInfo titulo="Región" contenido={perfil?.region} />
              <DisplayInfo titulo="Comuna" contenido={perfil?.comuna} />
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <DisplayInfo titulo="Dirección" contenido={perfil?.direccion} />
              <DisplayInfo titulo="Departamento" contenido={perfil?.departamento} />
            </Box>
          </Box>

          {/* Descripción */}
          <Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Descripción
              </Typography>
            </Box>
            <Card variant="outlined" sx={{ p: 1, bgcolor: 'rgba(0,0,0,0.1)', minHeight: 80 }}>
              <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                {perfil?.descripcion
                  ? perfil?.descripcion
                  : 'Editar perfil para agregar una descripción'}
              </Typography>
            </Card>
          </Box>
        </Card>
      </Box>
    </Card>
  );
};

export default DisplayPerfilTutor;

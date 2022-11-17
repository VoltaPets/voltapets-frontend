// Librerías
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Card, CardMedia, Typography, Button } from '@mui/material';

// Relative imports
import MascotaProfileCard from '../../tutor/mascotas/MascotaProfileCard';
import DisplayInfo from '../../../../commons/DisplayInfo';
import ModalCreacionMascota from './ModalCreacionMascota';

const DisplayMascotasProfile = () => {
  // Estados
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openCreacionMascota, setOpenCreacionMascota] = useState(false);

  // Funciones
  const handleSelected = (mascota) => {
    console.log(mascota);
  };

  const handleCreacionMascota = () => {
    setOpenCreacionMascota(true);
  };

  return (
    <>
      <ModalCreacionMascota
        open={openCreacionMascota}
        onClose={() => setOpenCreacionMascota(false)}
      />
      <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
        {/* Mis mascotas */}
        <Card variant="outlined" sx={{ flex: 0.5, p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
            Mis Mascotas
          </Typography>
          <Card
            variant="outlined"
            sx={{
              bgcolor: 'rgba(0,0,0,0.1)',
              height: 350,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center',
              overflowY: 'scroll',
              gap: 1,
              p: 2
            }}
          >
            {loading ? (
              <BeatLoader size={10} />
            ) : mascotas.length > 0 ? (
              mascotas.map((mascota) => (
                <MascotaProfileCard
                  key={mascota.id}
                  nombre={mascota.nombre}
                  estado={mascota.estado}
                  img={mascota.img}
                  onSelected={() => handleSelected(mascota)}
                />
              ))
            ) : (
              <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                No tienes mascotas registradas
              </Typography>
            )}
          </Card>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCreacionMascota}
              sx={{ mt: 2, width: '100%', fontWeight: 'bold', textTransform: 'inherit' }}
            >
              Administrar Mascotas
            </Button>
          </Box>
        </Card>

        {/* Perfil mascota */}
        <Card variant="outlined" sx={{ flex: 1, display: 'flex', gap: 1, p: 2 }}>
          {/* Imagen */}
          <Box
            sx={{
              flex: 0.6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CardMedia
              component="img"
              image="/logo.jpg"
              alt="Mascota"
              sx={{ height: 240, width: 240, borderRadius: '50%', mx: 'auto' }}
            />
            <Button
              color="info"
              variant="contained"
              sx={{
                mt: 2,
                width: '100%',
                fontWeight: 'bold',
                textTransform: 'inherit',
                width: 'fit-content',
                mx: 'auto'
              }}
            >
              Cambiar Imagen
            </Button>
          </Box>

          {/* Información */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Nombre:
                </Typography>
                <Typography variant="h5">Nombre de la mascota</Typography>
              </Box>

              <Card
                variant="outlined"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, mb: 4 }}
              >
                <Box sx={{ display: 'flex' }}>
                  <DisplayInfo titulo="Edad" contenido="1 año" />
                  <DisplayInfo titulo="Grupo Etario" contenido="Adulto" />
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <DisplayInfo titulo="Raza" contenido="Husky" />
                  <DisplayInfo titulo="Tamaño" contenido="Mediano" />
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <DisplayInfo titulo="Sexo" contenido="Macho" />
                  <DisplayInfo titulo="Esterilizado" contenido="Sí" />
                </Box>
              </Card>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Información Adicional
                </Typography>
                <Card variant="outlined" sx={{ p: 1 }}>
                  <Typography variant="body2" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                    Quisquam quae, quod, voluptate, voluptates quidem voluptatibus quibusdam quos
                    quia necessitatibus voluptatum. Quisquam, quae. Quisquam quae, quod, voluptate,
                    voluptates quidem voluptatibus quibusdam quos quia necessitatibus voluptatum.
                  </Typography>
                </Card>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default DisplayMascotasProfile;

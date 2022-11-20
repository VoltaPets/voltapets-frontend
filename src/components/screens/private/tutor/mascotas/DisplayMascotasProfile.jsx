// Librerías
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Card, CardMedia, Typography, Button } from '@mui/material';

// Relative imports
import MascotaProfileCard from '../../tutor/mascotas/MascotaProfileCard';
import DisplayInfo from '../../../../commons/DisplayInfo';
import ModalCreacionMascota from './ModalCreacionMascota';
import { request } from '../../../../../api';
import { GET_RAZAS, GET_SIZE, GET_SEXO } from '../../../../../api/endpoints/Datos';

const DisplayMascotasProfile = ({ mascotas, handleSelected, selectedMascota, clearSelected }) => {
  // Estados
  const [razas, setRazas] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openCreacionMascota, setOpenCreacionMascota] = useState(false);

  // Variables
  const mascotaImg = selectedMascota.imagen?.url + selectedMascota.imagen?.path;

  // Funciones
  const handleCreacionMascota = () => {
    setOpenCreacionMascota(true);
  };

  const getSize = async () => {
    try {
      const { data } = await request({
        url: GET_SIZE,
        method: 'GET'
      });
      setSizes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRazas = async () => {
    try {
      const { data } = await request({
        method: 'GET',
        url: GET_RAZAS
      });
      setRazas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSexo = async () => {
    try {
      const { data } = await request({
        method: 'GET',
        url: GET_SEXO
      });
      setSexo(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Effects
  useEffect(() => {
    getRazas();
    getSize();
    getSexo();
  }, []);

  useEffect(() => {
    if (mascotas) {
      setLoading(false);
    }
  }, [mascotas]);

  return (
    <>
      <ModalCreacionMascota
        open={openCreacionMascota}
        onClose={() => setOpenCreacionMascota(false)}
        razas={razas}
        sizes={sizes}
        sexo={sexo}
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
            ) : (
              mascotas.map((mascota) => (
                <MascotaProfileCard
                  key={mascota.id}
                  nombre={mascota.nombre}
                  estado={mascota.estado}
                  img={mascota.imagen?.url + mascota.imagen?.path}
                  selected={selectedMascota?.id === mascota.id}
                  onSelected={() => handleSelected(mascota)}
                />
              ))
            )}
          </Card>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 2 }}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCreacionMascota}
              sx={{ mt: 2, flex: 1, fontWeight: 'bold', textTransform: 'inherit' }}
            >
              Administrar Mascotas
            </Button>
          </Box>
        </Card>

        {/* Perfil mascota */}
        <Card variant="outlined" sx={{ flex: 1, display: 'flex', gap: 1, p: 2 }}>
          {selectedMascota ? (
            <>
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
                  image={mascotaImg.toString()}
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
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <Typography variant="h4">{selectedMascota.nombre}</Typography>
                  </Box>

                  <Card
                    variant="outlined"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, mb: 4 }}
                  >
                    <Box sx={{ display: 'flex' }}>
                      <DisplayInfo titulo="Edad" contenido={selectedMascota.edadRegistro} />
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
                        Quisquam quae, quod, voluptate, voluptates quidem voluptatibus quibusdam
                        quos quia necessitatibus voluptatum. Quisquam, quae. Quisquam quae, quod,
                        voluptate, voluptates quidem voluptatibus quibusdam quos quia necessitatibus
                        voluptatum.
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <Card variant="outlined" sx={{ p: 4, m: 'auto' }}>
              No has seleccionado una mascota
            </Card>
          )}
        </Card>
      </Box>
    </>
  );
};

export default DisplayMascotasProfile;

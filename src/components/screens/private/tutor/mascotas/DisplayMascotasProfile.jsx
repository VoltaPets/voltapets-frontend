// Librerías
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Card, CardMedia, Typography, Button, Skeleton } from '@mui/material';

// Relative imports
import MascotaProfileCard from '../../tutor/mascotas/MascotaProfileCard';
import DisplayInfo from '../../../../commons/DisplayInfo';
import ModalCreacionMascota from './ModalCreacionMascota';
import { request } from '../../../../../api';
import { GET_RAZAS, GET_SIZE, GET_SEXO } from '../../../../../api/endpoints/Datos';

const DisplayMascotasProfile = ({ mascotas, handleSelected, selectedMascota = {} }) => {
  // Estados
  const [razas, setRazas] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openCreacionMascota, setOpenCreacionMascota] = useState(false);

  // Variables
  const mascotaImg = selectedMascota.imagen?.url + selectedMascota.imagen?.path;
  const mascotaNombre = selectedMascota.nombre || 'Nombre mascota';
  const mascotaEdad = selectedMascota.edadRegistro || 'NN';
  const mascotaEtario = selectedMascota.grupoEtario?.descripcion || 'Adulto';
  const mascotaRaza = selectedMascota.raza?.descripcion || 'Husky';
  const mascotaSexo = selectedMascota.sexo?.descripcion || 'Macho';
  const mascotaSize = selectedMascota.tamanio?.descripcion || 'Grande';
  const mascotaNeutered = selectedMascota.esterilizado ? 'Sí' : 'No';
  const mascotaInfo = selectedMascota.descripcion || 'Descripción mascota';

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
      console.log(selectedMascota);
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
                {loading ? (
                  <Skeleton variant="circular" width={200} height={200} />
                ) : (
                  <CardMedia
                    component="img"
                    image={mascotaImg.toString()}
                    onError={(e) => {
                      e.currentTarget.src = '/images/paw.png';
                      e.currentTarget.onerror = null;
                    }}
                    alt="Mascota"
                    sx={{ height: 240, width: 240, borderRadius: '50%', mx: 'auto' }}
                  />
                )}
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
                    <Typography variant="h4">{mascotaNombre}</Typography>
                  </Box>

                  <Card
                    variant="outlined"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, mb: 4 }}
                  >
                    <Box sx={{ display: 'flex' }}>
                      <DisplayInfo loading={loading} titulo="Edad" contenido={mascotaEdad} />
                      <DisplayInfo
                        loading={loading}
                        titulo="Grupo Etario"
                        contenido={mascotaEtario}
                      />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <DisplayInfo loading={loading} titulo="Raza" contenido={mascotaRaza} />
                      <DisplayInfo loading={loading} titulo="Tamaño" contenido={mascotaSize} />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <DisplayInfo loading={loading} titulo="Sexo" contenido={mascotaSexo} />
                      <DisplayInfo
                        loading={loading}
                        titulo="Esterilizado"
                        contenido={mascotaNeutered}
                      />
                    </Box>
                  </Card>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Información Adicional
                    </Typography>
                    <Card variant="outlined" sx={{ p: 1 }}>
                      <Typography variant="body2" align="justify">
                        {mascotaInfo}
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

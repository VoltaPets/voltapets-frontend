// Librerías
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Box, Card, CardMedia, Typography, Button, Skeleton } from '@mui/material';

// Relative imports
import MascotaProfileCard from '../../tutor/mascotas/MascotaProfileCard';
import ModalProfileImg from '../../../../commons/ModalProfileImg';
import DisplayInfo from '../../../../commons/DisplayInfo';
import ModalCreacionMascota from './ModalCreacionMascota';
import { request } from '../../../../../api';
import { GET_MASCOTA } from '../../../../../api/endpoints/Mascota';

const DisplayMascotasProfile = ({ selectedMascota }) => {
  const mascotaID = selectedMascota;

  // Estados
  const [loading, setLoading] = useState(true);
  const [openCreacionMascota, setOpenCreacionMascota] = useState(false);
  const [openProfileImg, setOpenProfileImg] = useState(false);
  const [mascotaProfile, setMascotaProfile] = useState({});

  // Funciones
  const getMascota = async (id) => {
    if (id) {
      setLoading(true);
      try {
        const { data } = await request({
          method: 'GET',
          url: GET_MASCOTA(id)
        });
        setMascotaProfile(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const handleCloseModalCreacionMascota = () => {
    setOpenCreacionMascota(false);
  };

  const handleOpenImgModal = () => {
    setOpenProfileImg(true);
  };

  const handleCloseImgModal = () => {
    setOpenProfileImg(false);
    getMascota(mascotaID);
  };

  // Effect
  useEffect(() => {
    getMascota(mascotaID);
  }, [mascotaID]);

  useEffect(() => {
    if (mascotaProfile) {
      setLoading(false);
    }
  }, [mascotaProfile]);

  console.log(Object.entries(mascotaProfile));

  return (
    <>
      <ModalCreacionMascota open={openCreacionMascota} onClose={handleCloseModalCreacionMascota} />

      <ModalProfileImg
        open={openProfileImg}
        setOpen={setOpenProfileImg}
        mascota
        mascotaID={mascotaID}
        onClose={handleCloseImgModal}
      />
      {/* Perfil mascota */}
      <Card
        variant="outlined"
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: 1,
          p: 2
        }}
      >
        {loading ? (
          <BeatLoader size={10} style={{ margin: 'auto' }} />
        ) : Object.entries(mascotaProfile).length > 0 ? (
          <>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
              <Typography variant="h3" sx={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
                {mascotaProfile?.nombre}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 0.6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                p: 2
              }}
            >
              <CardMedia
                component="img"
                image={mascotaProfile.imagen?.url + mascotaProfile.imagen?.path}
                onError={(e) => {
                  e.currentTarget.src = '/images/paw.png';
                  e.currentTarget.onerror = null;
                }}
                alt="Mascota"
                sx={{
                  height: 300,
                  width: '100%',
                  borderRadius: 4,
                  border: 1,
                  borderColor: 'divider',
                  mx: 'auto'
                }}
              />
              <Button
                color="info"
                variant="contained"
                sx={{
                  mt: 2,
                  width: 'fit-content',
                  mx: 'auto',
                  fontWeight: 'bold',
                  textTransform: 'inherit'
                }}
                onClick={handleOpenImgModal}
              >
                Cambiar Foto
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
                <Card
                  variant="outlined"
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, mb: 4 }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <DisplayInfo loading={loading} titulo="Edad" contenido={mascotaProfile?.edad} />
                    <DisplayInfo
                      loading={loading}
                      titulo="Grupo Etario"
                      contenido={mascotaProfile.grupoEtario?.descripcion}
                    />
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <DisplayInfo
                      loading={loading}
                      titulo="Raza"
                      contenido={mascotaProfile.raza?.descripcion}
                    />
                    <DisplayInfo
                      loading={loading}
                      titulo="Tamaño"
                      contenido={mascotaProfile.tamanio?.descripcion}
                    />
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <DisplayInfo
                      loading={loading}
                      titulo="Sexo"
                      contenido={mascotaProfile.sexo?.descripcion}
                    />
                    <DisplayInfo
                      loading={loading}
                      titulo="Esterilizado"
                      contenido={mascotaProfile?.esterilizado ? 'Si' : 'No'}
                    />
                  </Box>
                </Card>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Información Adicional
                  </Typography>
                  <Card variant="outlined" sx={{ p: 1, height: 120, overflowY: 'scroll' }}>
                    <Typography variant="body2" align="justify">
                      {mascotaProfile?.descripcion}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 4,
              m: 'auto',
              borderRadius: 4
            }}
          >
            <SearchOffIcon color="info" sx={{ fontSize: '4em' }} />
            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              No hay mascotas registradas
            </Typography>
          </Card>
        )}
      </Card>
    </>
  );
};

export default DisplayMascotasProfile;

// Librerías
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Card, Button, CardMedia, Typography, Skeleton } from '@mui/material';

// Relative imports
import DisplayInfo from '../../../../commons/DisplayInfo';
import ModalProfileImg from '../../../../commons/ModalProfileImg';
import ModalEdicion from '../../../../commons/ModalEdicion';
import { GET_COMUNAS } from '../../../../../api/endpoints/Ubicacion';
import { request } from '../../../../../api';

const DisplayPerfilTutor = ({ perfil }) => {
  // Hooks
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  // Estados
  const [loading, setLoading] = useState(true);
  const [openProfileImg, setOpenProfileImg] = useState(false);
  const [openEdicion, setOpenEdicion] = useState(false);
  const [comunasArray, setComunasArray] = useState([]);

  // Handlers
  const handleOpenProfileImg = () => {
    setOpenProfileImg(true);
  };

  const handleCloseProfileImg = () => {
    setOpenProfileImg(false);
  };

  const handleOpenEdicion = () => {
    setOpenEdicion(true);
  };

  const handleCloseEdicion = () => {
    setOpenEdicion(false);
  };

  const getComunas = async (idComuna) => {
    try {
      const { data } = await request({
        url: GET_COMUNAS(idComuna),
        method: 'GET'
      });
      setComunasArray(data);
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Error al obtener las comunas', { variant: 'error' });
    }
  };

  // Variables
  const fullName = `${perfil?.nombre} ${perfil?.apellido}`;
  const imgPerfil = perfil?.imagen.url + perfil?.imagen.path;
  const telefonoPerfil = perfil?.telefono.match(/.{1,4}/g).join(' ');

  // Effect
  useEffect(() => {
    if (perfil) {
      setLoading(false);
      getComunas(7);
    }
  }, [perfil]);

  return (
    <>
      <ModalProfileImg open={openProfileImg} onClose={handleCloseProfileImg} />
      <ModalEdicion
        tutor
        open={openEdicion}
        onClose={handleCloseEdicion}
        comunas={comunasArray}
        Profile={perfil ? perfil : null}
      />
      <Card
        variant="outlined"
        sx={{ borderRadius: 4, p: 2, width: '90%', display: 'flex', gap: 2 }}
      >
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
          <Box
            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', width: '100%' }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              onClick={() => push('/tutor/profile')}
            >
              Volver
            </Button>
          </Box>
          <Box
            sx={{ py: 4, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 2,
                mb: 4
              }}
            >
              {loading ? (
                <Skeleton variant="circular" sx={{ width: 250, height: 250 }} />
              ) : (
                <CardMedia
                  component="img"
                  sx={{ width: 250, height: 250, borderRadius: '50%' }}
                  image={imgPerfil}
                />
              )}
              <Button
                disabled={loading}
                variant="contained"
                color="info"
                onClick={handleOpenProfileImg}
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

            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {loading ? <Skeleton variant="text" /> : fullName}
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
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 4
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Información personal
                </Typography>
                <Button
                  disabled={loading}
                  variant="contained"
                  color="info"
                  sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
                  onClick={handleOpenEdicion}
                >
                  Editar Perfil
                </Button>
              </Box>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <DisplayInfo titulo="Nombre" contenido={perfil?.nombre} loading={loading} />
                <DisplayInfo titulo="Apellido" contenido={perfil?.apellido} loading={loading} />
              </Box>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <DisplayInfo titulo="Correo" contenido={perfil?.email} loading={loading} />
                <DisplayInfo titulo="Telefono" contenido={telefonoPerfil} loading={loading} />
              </Box>
            </Box>

            {/* Domicilio */}
            <Box mb={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Domicilio
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <DisplayInfo titulo="Región" contenido={perfil?.region} loading={loading} />
                <DisplayInfo titulo="Comuna" contenido={perfil?.comuna} loading={loading} />
              </Box>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <DisplayInfo titulo="Dirección" contenido={perfil?.direccion} loading={loading} />
                <DisplayInfo titulo="Depto" contenido={perfil?.departamento} loading={loading} />
              </Box>
            </Box>

            {/* Descripción */}
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Descripción
                </Typography>
              </Box>
              <Card variant="outlined" sx={{ p: 1, bgcolor: 'rgba(0,0,0,0.1)', minHeight: 80 }}>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  {loading ? (
                    <BeatLoader size={10} />
                  ) : perfil?.descripcion ? (
                    perfil?.descripcion
                  ) : (
                    'Editar perfil para agregar una descripción'
                  )}
                </Typography>
              </Card>
            </Box>
          </Card>
        </Box>
      </Card>
    </>
  );
};

export default DisplayPerfilTutor;

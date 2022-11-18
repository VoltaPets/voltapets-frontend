// Libraries
import { useState, useEffect } from 'react';

// MUI
import { Card, Skeleton, Button, Box, Typography, Rating, CardMedia } from '@mui/material';

// Relative Imporst
import DisplayInfo from './perfil/DisplayInfo';
import ModalProfileImg from '../../../commons/ModalProfileImg';
import ModalEdicion from '../../../commons/ModalEdicion';
import { request } from '../../../../api';
import { GET_COMUNAS } from '../../../../api/endpoints/Ubicacion';

const DisplayPerfil = ({ perfil }) => {
  // Variables
  const descripcionPerfil = perfil?.descripcion ? perfil.descripcion : '';
  const imagenPerfil = perfil?.imagen.url + perfil?.imagen.path;
  const telefonoPerfil = perfil?.telefono.match(/.{1,4}/g).join(' ');
  const fullName = `${perfil?.nombre} ${perfil?.apellido}`;
  const fullAddress = perfil?.departamento
    ? `${perfil?.direccion}, Depto. ${perfil?.departamento}`
    : perfil?.direccion;
  const calificacion = perfil?.calificacion ? perfil?.calificacion : 0;

  // Estados
  const [openProfileImg, setOpenProfileImg] = useState(false);
  const [openEdicion, setOpenEdicion] = useState(false);
  const [comunasArray, setComunasArray] = useState([]);
  const [loading, setLoading] = useState(true);

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
        open={openEdicion}
        onClose={handleCloseEdicion}
        comunas={comunasArray}
        Profile={perfil ? perfil : null}
      />
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          width: '90%'
        }}
      >
        <Box sx={{ display: 'flex', gap: 8, alignItems: 'start' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
            Mi Perfil
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box
            sx={{
              pr: 2,
              flex: 0.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 4
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
              {/* Foto */}
              {loading ? (
                <Skeleton
                  variant="rounded"
                  sx={{ width: 220, height: 220, borderRadius: 8, mb: 2 }}
                />
              ) : (
                <CardMedia
                  component="img"
                  src={imagenPerfil}
                  sx={{
                    width: 220,
                    height: 220,
                    borderRadius: 8,
                    mb: 2,
                    border: '2px solid #fff',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/logo.jpg';
                    e.currentTarget.onerror = null;
                  }}
                />
              )}
              <Button
                variant="contained"
                color="info"
                size="small"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'inherit',
                  borderRadius: 8,
                  width: 'fit-content',
                  mx: 'auto'
                }}
                onClick={handleOpenProfileImg}
              >
                Cambiar imagen
              </Button>
            </Box>

            {/* Nombre y descripcion */}
            <Box mt={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {loading ? (
                <Skeleton sx={{ mt: 2, mb: 1, height: 32 }} />
              ) : (
                <Typography
                  variant="h5"
                  sx={{ textAlign: 'center', fontWeight: 'bold', mt: 2, mb: 1 }}
                >
                  {fullName}
                </Typography>
              )}
              <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                {loading ? (
                  <>
                    <Skeleton sx={{ width: '100%' }} />
                    <Skeleton sx={{ width: '80%' }} />
                    <Skeleton sx={{ width: '92%' }} />
                    <Skeleton sx={{ width: '32%' }} />
                  </>
                ) : (
                  <Typography variant="caption" sx={{ textAlign: 'justify' }}>
                    {descripcionPerfil
                      ? descripcionPerfil
                      : 'Editar perfil para agregar descripción'}
                  </Typography>
                )}
              </Card>
            </Box>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card variant="outlined" sx={{ p: 2, borderRadius: 4 }}>
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
                gutterBottom
              >
                Información Personal
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Domicilio
                </Typography>
                <DisplayInfo loading={loading} titulo="Calle" contenido={fullAddress} />
                <DisplayInfo loading={loading} titulo="Comuna" contenido={perfil?.comuna} />
                <DisplayInfo loading={loading} titulo="Region" contenido={perfil?.region} />
              </Box>
              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Contacto
                </Typography>
                <DisplayInfo loading={loading} titulo="Email" contenido={perfil?.email} />
                <DisplayInfo loading={loading} titulo="Teléfono" contenido={telefonoPerfil} />
              </Box>
            </Card>

            <Box>
              <Card variant="outlined" sx={{ p: 2, flex: 1, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
                  Evaluación
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <DisplayInfo titulo="Experiencia" contenido={perfil?.experiencia} />
                  <Rating
                    name="read-only"
                    value={calificacion}
                    readOnly
                    size="large"
                    sx={{ mt: 2 }}
                  />
                </Box>
              </Card>
              <Box sx={{ py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  color="info"
                  size="large"
                  variant="contained"
                  onClick={handleOpenEdicion}
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', color: '#fff', flex: 1 }}
                >
                  Editar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DisplayPerfil;

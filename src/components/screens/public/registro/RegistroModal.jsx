// Librerías
import { useRouter } from 'next/router';

// MUI
import CancelIcon from '@mui/icons-material/Cancel';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Button, Dialog, Typography, IconButton } from '@mui/material';

const RegistroModal = ({ open, setOpen, paseador = false, reset }) => {
  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleLogin = () => {
    reset();
    push('/usuarios/login');
    setOpen(false);
  };

  const handleHome = () => {
    reset();
    push('/');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%', px: 1 }}>
        <IconButton onClick={handleClose}>
          <CancelIcon sx={{ fontSize: '1.5em' }} color="secondary" />
        </IconButton>
      </Box>
      <Box
        sx={{
          my: 2,
          textAlign: 'center',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4
        }}
      >
        <Typography variant="h3">Registro exitoso </Typography>
        <TaskAltIcon color="success" sx={{ fontSize: '4em' }} />
      </Box>
      <Box sx={{ p: 2 }}>
        {paseador ? (
          <Typography variant="body1" align="justify" mb={4}>
            Gracias por registrarte en <b>VoltaPets</b>,Tu cuenta ha sido creada exitosamente, ahora
            puedes iniciar sesión y comenzar a ofrecer tus servicios como paseador de mascotas y
            ganar dinero extra paseando a las mascotas de nuestra comunidad.
          </Typography>
        ) : (
          <Typography variant="body1" align="justify" mb={4}>
            Gracias por registrarte en <b>VoltaPets</b>, ahora puedes iniciar sesión y comenzar a
            buscar a tu paseador ideal. Además podrás usar todos los servicios adicionales que
            ofrecemos, como por ejemplo, publicar anuncios de mascotas perdidas o adoptar mascotas.
          </Typography>
        )}
        <Typography variant="body1" align="justify">
          Para poder <b>ingresar</b> a tu cuenta usa el correo electrónico y la contraseña que
          ingresaste en el registro.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, p: 2 }}>
        <Button
          sx={{ flex: 1, textTransform: 'inherit', fontWeight: 'bold', color: 'white' }}
          variant="contained"
          color="info"
          onClick={handleLogin}
        >
          Ingresar
        </Button>
        <Button
          sx={{ flex: 1, textTransform: 'inherit', fontWeight: 'bold', color: 'white' }}
          variant="contained"
          color="warning"
          onClick={handleHome}
        >
          Ir al Inicio
        </Button>
      </Box>
    </Dialog>
  );
};

export default RegistroModal;

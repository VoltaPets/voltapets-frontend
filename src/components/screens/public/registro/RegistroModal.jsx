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
    push('/');
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
        <Typography variant="h3" color="warning.main" sx={{fontWeight: 'bold', fontSize: '2.5em'}}>Registro exitoso </Typography>
        <TaskAltIcon color="warning" sx={{ fontSize: '4em' }} />
      </Box>
      <Box sx={{ p: 2 }}>
        {paseador ? (
          <>
            <Typography
              variant="h6"
              align="justify"
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
              mb={2}
            >
              Gracias por registrarte en nuestra plataforma
            </Typography>
            <Typography variant="body1" align="center" mb={4}>
              Hemos recibido exitosamente tu postulación para <br />
              <b>Paseador</b>.
            </Typography>
            <Typography variant="body1" align="justify" mb={2}>
              Revisaremos tu postulación y nos pondremos en contacto contigo mediante el correo que
              nos has proporcionado para concretar una entrevista y asegurarnos que puedas brindar
              un servicio de calidad a nuestros clientes y sus mascotas.
            </Typography>
          </>
        ) : (
          <Typography variant="body1" align="justify" mb={4}>
            Gracias por registrarte en <b>VoltaPets</b>, ahora puedes iniciar sesión y comenzar a
            buscar a tu paseador ideal. Además podrás usar todos los servicios adicionales que
            ofrecemos, como por ejemplo, publicar anuncios de mascotas perdidas o adoptar mascotas.
          </Typography>
        )}
        {!paseador && (
          <Typography variant="body1" align="justify">
            Para poder <b>ingresar</b> a tu cuenta usa el correo electrónico y la contraseña que
            ingresaste en el registro.
          </Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', gap: 1, p: 2 }}>
        {paseador ? (
          <Button
            variant="contained"
            color="info"
            sx={{ textTransform: 'inherit', fontWeight: 'bold', mx: 'auto' }}
            onClick={handleHome}
          >
            Terminar mi postulación
          </Button>
        ) : (
          <>
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
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default RegistroModal;

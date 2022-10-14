// Librerias
import { forwardRef } from 'react';

// MUI
import ClearIcon from '@mui/icons-material/Clear';
import {
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  CardMedia,
  Slide
} from '@mui/material';

const Transicion = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MascotasModal = ({ open, setOpen, mascota, isAdopcion = false }) => {
  // Funciones
  const handleClose = () => {
    setOpen(false);
  };

  console.log(mascota)

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      TransitionComponent={Transicion}
      PaperProps={{ sx: { borderRadius: 4 } }}
    >
      {/* Header */}
      <DialogTitle sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ flex: 1, fontWeight: 600 }}>
            {isAdopcion ? mascota.titulo : mascota.nombreMascota}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={handleClose}>
            <ClearIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Contenido */}
      <DialogContent sx={{ p: 2 }}>
        <Box sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            image={mascota.imagen}
            alt={mascota.titulo}
            sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 2 }}
            onError={(e) => {
              e.currentTarget.img = '/image/paw.png';
              e.onerror = null;
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start'
          }}
        >
          {/* Descripcion */}
          <Box sx={{ textAlign: 'justify', mt: 2, mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Descripción
            </Typography>
            <Typography variant="body2">{mascota.descripcion}</Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>

          {/* Características */}
          <Box sx={{ mb: 4, width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Características
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Opcion titulo="Tipo" descripcion={mascota.tipo} />
                <Opcion titulo="Raza" descripcion={mascota.raza} />
                <Opcion titulo="Edad" descripcion={mascota.edad} />
              </Grid>
              <Grid item xs sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {isAdopcion && <Opcion titulo="Grupo Etario" descripcion={mascota.grupoEtario} />}
                <Opcion titulo="Tamaño" descripcion={mascota.tamaño} />
                <Opcion titulo="Sexo" descripcion={mascota.sexo} />
              </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }} />
          </Box>

          {/* Contacto */}
          <Box sx={{ mb: 4, width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Contacto
            </Typography>
            <Typography variant="subtitle2">
              <b>Responsable:</b> {`${mascota.responsable}`}
            </Typography>
            <Typography variant="subtitle2">
              <b>Teléfono:</b> {mascota.telefono}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          color="info"
          sx={{ textTransform: 'inherit', fontWeight: 800 }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Opcion = ({ titulo, descripcion }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="subtitle2" color="secondary" sx={{ fontWeight: 800 }}>
        {titulo}:
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {descripcion}
      </Typography>
    </Box>
  );
};

export default MascotasModal;

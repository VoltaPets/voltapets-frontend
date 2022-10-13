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

const MascotasModal = ({ open, setOpen, adopcion, perdida, isAdopcion = true }) => {
  // Funciones
  const handleClose = () => {
    setOpen(false);
  };

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
            {adopcion.titulo}
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
            image={adopcion.imagen}
            alt={adopcion.titulo}
            sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 2 }}
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
            <Typography variant="body2">{adopcion.descripcion}</Typography>
            <Divider sx={{mt: 2}} />
          </Box>

          {/* Características */}
          <Box sx={{ mb: 4, width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Características
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Opcion titulo="Tipo" descripcion={adopcion.tipo} />
                <Opcion titulo="Raza" descripcion={adopcion.raza} />
                <Opcion titulo="Edad" descripcion={adopcion.edad} />
              </Grid>
              <Grid item xs sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Opcion titulo="Grupo Etario" descripcion={adopcion.grupoEtario} />
                <Opcion titulo="Tamaño" descripcion={adopcion.tamaño} />
                <Opcion titulo="Sexo" descripcion={adopcion.sexo} />
              </Grid>
            </Grid>
          <Divider sx={{ mt: 2}} />
          </Box>

          {/* Contacto */}
          <Box sx={{ mb: 4, width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Contacto
            </Typography>
            <Typography variant="subtitle2">
              <b>Responsable:</b> {`${adopcion.usuario.nombre}`}
            </Typography>
            <Typography variant="subtitle2">
              <b>Teléfono:</b> {adopcion.telefono}
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

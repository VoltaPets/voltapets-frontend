// Librerías
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import PulseLoader from 'react-spinners/PulseLoader';

// MUI
import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardMedia,
  Button
} from '@mui/material';

// Relative imports
import { CLOUDINARY_URL } from '../../constant';
import { request } from '../../../src/api';
import { UPDATE_USER_IMG } from '../../../src/api/endpoints/Usuario';
import { UPDATE_MASCOTA_IMG } from '../../api/endpoints/Mascota';

const ModalProfileImg = ({ open, onClose, tutor = false, mascota = false, mascotaID }) => {
  // Estados
  const [imgFile, setImgFile] = useState(null);
  const [public_id, setPublic_id] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  // Hooks
  const { enqueueSnackbar } = useSnackbar();

  // Funciones
  const handleImageChange = (e) => {
    let imagenElegida = document.getElementById('imagen-elegida');
    let reader = new FileReader();
    let file = e.target.files[0];
    setIsSelected(true);

    reader.readAsDataURL(file);
    reader.onload = () => {
      imagenElegida.src = reader.result;
    };
  };

  const onSubmit = async () => {
    setIsSelected(false);
    setLoading(true);
    try {
      let imagenElegida = document.getElementById('nueva-imagen');
      const formData = new FormData();
      formData.append('file', imagenElegida.files[0]);
      formData.append(
        'upload_preset',
        tutor ? 'profile_tutor' : mascota ? 'mascotas' : 'profile_paseador'
      );

      const data = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData
      }).then((res) => res.json());

      const formatURL = new URL(data.secure_url);
      const url = formatURL.origin;
      const path = formatURL.pathname;

      const imagen = {
        url,
        path,
        public_id: data.public_id
      };

      mascota
        ? await request({
            method: 'PUT',
            url: UPDATE_MASCOTA_IMG(mascotaID),
            data: imagen
          })
        : await request({
            url: UPDATE_USER_IMG,
            method: 'PUT',
            data: imagen
          });
      setLoading(false);
      enqueueSnackbar('Imagen subida con éxito', { variant: 'success' });
      onClose();
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Hubo un error al subir la imagen', { variant: 'error' });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {mascota ? 'Imagen de Mascota' : 'Imagen de Perfil'}
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', p: 0 }}>
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <CardMedia
            component="img"
            id="imagen-elegida"
            src="/pawBg.png"
            sx={{ width: 300, height: 300 }}
          />
          <input id="nueva-imagen" type="file" onChange={handleImageChange} />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', p: 2 }}>
        {loading ? (
          <PulseLoader />
        ) : (
          <>
            <Button
              fullWidth
              onClick={onClose}
              variant="contained"
              color="secondary"
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              disabled={!isSelected}
              onClick={onSubmit}
              variant="contained"
              color="info"
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
            >
              Guardar
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalProfileImg;

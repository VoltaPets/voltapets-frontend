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
import {
  CLOUDINARY_URL,
  CLOUDINARY_DESTROY_URL,
  CLOUDINARY_API_KEY,
  API_BASE_URL
} from '../../../../../constant';
import { request } from '../../../../../api';
import { UPDATE_USER_IMG } from '../../../../../api/endpoints/Usuario';

const ModalProfileImg = ({ open, onClose, onChange, img }) => {
  // Estados
  const [imgFile, setImgFile] = useState(null);
  const [public_id, setPublic_id] = useState(null);
  const [signature, setSignature] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
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
      formData.append('upload_preset', 'profile');

      const data = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData
      }).then((res) => res.json());

      setImgFile(data.secure_url);
      setPublic_id(data.public_id);
      setSignature(data.signature);
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Hubo un error al subir la imagen', { variant: 'error' });
    }
  };

  const cambiarImagen = async () => {
    const imgURL = new URL(imgFile);
    let path = imgURL.pathname;
    let url = imgURL.origin;

    const imagen = {
      url,
      path,
      public_id,
      signature
    };

    try {
      await request({
        url: UPDATE_USER_IMG,
        method: 'PUT',
        data: imagen
      });

      setLoading(false);
      enqueueSnackbar('Imagen subida con éxito', { variant: 'success' });
      onClose();
      window.location.reload(false);
    } catch (error) {
      setLoading(false);
      await request({
        url: CLOUDINARY_DESTROY_URL,
        method: 'POST',
        data: { public_id }
      });
      if (error.isAxiosError) {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
      enqueueSnackbar('Ha ocurrido un error al subir la imagen', { variant: 'error' });
    }
  };

  // Efectos
  useEffect(() => {
    if (imgFile) {
      cambiarImagen();
    }
    return () => {
      setImgFile(null);
    };
  }, [imgFile]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Imagen de Perfil</DialogTitle>
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
            src="/logo.jpg"
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
            <Button onClick={onClose} variant="contained" color="secondary">
              Cancelar
            </Button>
            <Button disabled={!isSelected} onClick={onSubmit} variant="contained" color="info">
              Guardar
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalProfileImg;

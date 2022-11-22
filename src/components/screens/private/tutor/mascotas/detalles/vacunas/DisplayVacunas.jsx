import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Typography, Button } from '@mui/material';

// Relative Imports
import ModalEdicionVacunas from './ModalEdicionVacunas';

const Vacunas = ({ vacunasArray, mascotaID }) => {
  // Estados
  const [openEditVacunas, setOpenEditVacunas] = useState(false);
  const [loading, setLoading] = useState(true);

  // Funciones
  const handleCloseEditVacunas = () => {
    setOpenEditVacunas(false);
  };

  const handleOpenEditVacunas = () => {
    setOpenEditVacunas(true);
  };

  // Effects
  useEffect(() => {
    if (vacunasArray.length > 0) {
      setLoading(false);
    }
  }, [vacunasArray]);

  return (
    <>
      <ModalEdicionVacunas
        mascotaID={mascotaID}
        open={openEditVacunas}
        onClose={handleCloseEditVacunas}
      />
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
            Vacunas
          </Typography>
          <Button
            variant="contained"
            color="info"
            sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
            onClick={handleOpenEditVacunas}
          >
            Modificar
          </Button>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle2" align="justify">
            En este apartado podrás ver las vacunas que ha recibido tu mascota. Si no has registrado
            ninguna vacuna, puedes hacerlo en el botón "Modificar"
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {loading ? (
            <BeatLoader size={10} style={{ margin: 'auto', paddingTop: '1em' }} />
          ) : (
            vacunasArray.map((vacuna) => (
              <Box
                key={vacuna.codigoVacuna}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1,
                  bgcolor: 'rgba(0,0,0,0.1)',
                  borderRadius: 1
                }}
              >
                <Typography variant="subtitle2">{vacuna.nombreVacuna}</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography variant="subtitle2">
                    {vacuna.fechaVacunacion ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="secondary" />
                    )}
                  </Typography>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default Vacunas;

// Librerías
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Dialog, Box, Typography } from '@mui/material';

// Relative imports
import FormSelect from '../../../../commons/FormSelect';
import { comunas } from '../../../../../mock/dataArray';
import { GET_COMUNAS } from '../../../../../api/endpoints/Ubicacion';
import { request } from '../../../../../api';

const ModalEdicion = ({ open, onClose, comunas }) => {
  // Estados
  const [enablePassword, setEnablePassword] = useState(false);

  // Hooks
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      comuna: ''
    }
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box sx={{ p: 2 }}>
        <Box component="header">
          <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
            Editar perfil
          </Typography>
        </Box>
        <Box component="main" sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ flex: 0.5 }}>
            <FormSelect
              comuna
              control={control}
              name="comuna"
              label="Comuna"
              dataArray={comunas}
              labelText="Comunas"
              error={errors.comuna}
              errorText={errors.comuna?.message}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalEdicion;

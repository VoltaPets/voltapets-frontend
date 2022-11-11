import React from 'react';

import { Close, Check } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';

const CheckCloseOption = ({ opt }) => {
  return opt ? (
    <Check sx={{ fontSize: '1.5em', flex: 0.3 }} color="info.main" />
  ) : (
    <Close sx={{ fontSize: '1.5em', flex: 0.3 }} color="secondary" />
  );
};

const PerrosAceptados = ({ toy = false, sm = false, md = false, lg = false, xl = false }) => {
  return (
    <Grid container>
      <Grid item xs={6} py={1} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Toy
          </Typography>
          <CheckCloseOption opt={toy} />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Pequeño
          </Typography>
          <CheckCloseOption opt={sm} />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Mediano
          </Typography>
          <CheckCloseOption opt={md} />
        </Box>
      </Grid>

      <Grid item xs={6} py={1} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Grande
          </Typography>
          <CheckCloseOption opt={lg} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Gigante
          </Typography>
          <CheckCloseOption opt={xl} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PerrosAceptados;

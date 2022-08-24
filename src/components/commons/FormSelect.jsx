// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Grid, TextField, IconButton, InputAdornment, MenuItem } from '@mui/material';

export default function FormSelect({ control, labelText, name }) {
  return (
    <Grid item xs={12} sx={{ height: 80 }}>
      <Controller name={name} />
    </Grid>
  );
}

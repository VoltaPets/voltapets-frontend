// Librerías
import { Controller } from 'react-hook-form';
import { es } from 'date-fns/locale';
import { useState } from 'react';

// MUI
import { TextField, Grid } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FormDatePicker({
  control,
  labelText,
  name,
  errorName,
  errorText = null,
  disabled = false,
  width = 12,
  noMb = false
}) {
  const [value, setValue] = useState(null);

  return (
    <Grid item xs={width} sx={{ height: 50, mb: noMb ? 0 : 2 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
        <Controller
          name={name}
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <DatePicker
              label={labelText}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              {...rest}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  error={errorName ? true : false}
                  helperText={errorText}
                  disabled={disabled}
                  {...params}
                />
              )}
            />
          )}
        />
      </LocalizationProvider>
    </Grid>
  );
}

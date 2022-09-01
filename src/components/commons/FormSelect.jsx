// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Grid, InputLabel, FormControl, FormHelperText, Select, MenuItem } from '@mui/material';

export default function FormSelect({
  control,
  locations,
  labelText,
  name,
  width,
  errorName,
  errorText,
  vivienda
}) {
  return (
    <Grid item xs={width} sx={{ height: 80 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl variant="standard" size="small" error={errorName ? true : false} fullWidth>
            <InputLabel id="demo-simple-select-label" color="secondary">
              {labelText}
            </InputLabel>
            <Select
              {...field}
              labelId="demo-simple-select-standard-label"
              fullWidth
              label={labelText}
              color="secondary"
            >
              {locations
                ? locations.map((location) => (
                    <MenuItem key={location.id} value={location.id}>
                      {location.nombre}
                    </MenuItem>
                  ))
                : vivienda.map((vivienda) => (
                    <MenuItem key={vivienda.id} value={vivienda.id}>
                      {vivienda.nombre}
                    </MenuItem>
                  ))}
            </Select>
            <FormHelperText>{errorText}</FormHelperText>
          </FormControl>
        )}
      />
    </Grid>
  );
}

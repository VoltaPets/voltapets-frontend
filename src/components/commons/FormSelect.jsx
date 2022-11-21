// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Grid, InputLabel, FormControl, FormHelperText, Select, MenuItem } from '@mui/material';

export default function FormSelect({
  control,
  disabled,
  labelText,
  name,
  width = 12,
  errorName,
  errorText,
  dataArray,
  noHelperText = false,
  comuna = false,
  region = false,
  size = false,
  raza = false,
  sexo = false
}) {
  const type = comuna ? 'comuna' : region ? 'region' : size ? 'size' : raza ? 'raza' : null;

  return (
    <Grid item xs={12} sm={width} sx={{ height: noHelperText ? 'auto' : 80 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl
            fullWidth
            disabled={disabled}
            variant="standard"
            size="small"
            error={errorName ? true : false}
          >
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
              <MenuItem value="">Elegir {`${labelText}`}</MenuItem>
              {dataArray?.map((data) => (
                <MenuItem key={data.id} value={data.id}>
                  {data.descripcion}
                </MenuItem>
              ))}
            </Select>
            {noHelperText ? null : <FormHelperText>{errorText}</FormHelperText>}
          </FormControl>
        )}
      />
    </Grid>
  );
}

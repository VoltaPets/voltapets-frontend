// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Grid, InputLabel, FormControl, FormHelperText, Select, MenuItem } from '@mui/material';

export default function FormSelect({
  control,
  disabled,
  labelText,
  name,
  width,
  errorName,
  errorText,
  dataArray,
  noHelperText
}) {
  return (
    <Grid item xs={width} sx={{ height: noHelperText ? 'auto' : 80 }}>
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
              {dataArray?.map((location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.nombre}
                </MenuItem>
              ))}
            </Select>
            {noHelperText ? <FormHelperText>{errorText}</FormHelperText> : null}
          </FormControl>
        )}
      />
    </Grid>
  );
}

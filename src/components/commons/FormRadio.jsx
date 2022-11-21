// Librerías
import { Controller } from 'react-hook-form';

// MUI
import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio
} from '@mui/material';

export default function FormRadio({
  control,
  disabled = false,
  labelText,
  name,
  width = 12,
  dataArray,
  errorText,
  noHelperText = false,
}) {
  return (
    <Grid item xs={12} sm={width} sx={{ height: noHelperText ? 'auto' : 50 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl disabled={disabled}>
            <FormLabel>{labelText}</FormLabel>
            <RadioGroup {...field} row>
              {dataArray?.map((option) => (
                <FormControlLabel
                  key={option.id}
                  value={option.valor}
                  control={<Radio size="small" />}
                  label={option.descripcion}
                />
              ))}
            </RadioGroup>
            <FormHelperText sx={{ color: 'secondary.main' }}>{errorText}</FormHelperText>
          </FormControl>
        )}
      />
    </Grid>
  );
}

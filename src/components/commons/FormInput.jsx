// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { Grid, TextField, IconButton, InputAdornment } from '@mui/material';

export default function FormInput({
  control,
  labelText,
  placeholderText,
  name,
  type,
  errorName,
  errorText = null,
  maxLength,
  handleShowPassword,
  disabled = false,
  width = 12
}) {
  return (
    <Grid item xs={width} sx={{ height: 80, mb: 2 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="standard"
            color="secondary"
            fullWidth
            required
            disabled={disabled}
            id={name}
            name={name}
            label={labelText}
            placeholder={placeholderText}
            error={errorName ? true : false}
            helperText={errorText}
            type={type}
            inputProps={{ maxLength: maxLength }}
            InputProps={
              name === 'password'
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                : null
            }
          />
        )}
      />
    </Grid>
  );
}

// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { Grid, TextField, IconButton, InputAdornment } from '@mui/material';

export default function FormInput({
  variant = 'standard',
  control,
  labelText,
  placeholderText,
  name,
  type = 'text',
  errorName,
  errorText = null,
  maxLength,
  handleShowPassword,
  disabled = false,
  width = 12,
  multiline = false,
  pwd = false,
  noMb = false,
  numeric = false,
  rows
}) {
  return (
    <Grid item xs={width} sx={{ height: 80, mb: noMb ? 0 : 2 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant={variant}
            color="secondary"
            multiline={multiline}
            rows={rows}
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
            inputProps={{
              maxLength: maxLength,
              inputMode: numeric ? 'numeric' : 'text',
              pattern: numeric ? '[0-9]*' : null
            }}
            InputProps={
              name === 'password' || pwd
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

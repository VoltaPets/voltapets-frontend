// Libraries
import { Controller } from 'react-hook-form';

// MUI
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { TextField, IconButton, InputAdornment } from '@mui/material';

function FormInput({
  control,
  labelText,
  placeholderText,
  name,
  type,
  errorName,
  errorText,
  maxLength,
  handleShowPassword
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          required
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
  );
}

export default FormInput;

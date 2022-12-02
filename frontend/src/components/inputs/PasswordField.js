import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import InputMask from "react-input-mask";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/system";

function PasswordField(props) {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const handleOnClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      fullWidth
      id={props.id}
      error={props.error}
      required={props.required}
      variant="filled"
      name={props.name}
      autoFocus={props.autoFocus}
      helperText={props.helperText != null ? props.helperText : " "}
      inputProps={props.inputProps}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" color={theme.palette.primary.main}>
            <IconButton onClick={handleOnClick}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordField;
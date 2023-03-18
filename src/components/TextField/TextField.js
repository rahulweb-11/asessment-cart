import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import "./TextField.css";

export default function index({
  type,
  label,
  icon,
  value,
  onChange,
  name,
  placeholder,
  error,
  helperText,
  onBlur,
  className,
  pattern,
  autoComplete,

  ...props
}) {
  return (
    <TextField
      className={className}
      value={value}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      autoComplete={autoComplete}
      InputProps={{
        startAdornment: (
          <>
            <InputAdornment position="start">
              <img src={icon} alt="icon" />
            </InputAdornment>
          </>
        ),
      }}
      Boolean
      InputLabelProps={{ shrink: false }}
      error={error}
      helperText={helperText}
      name={name}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      margin="dense"
      size="large"
      fullWidth
      sx={{ "& legend": { display: "none" }, "& fieldset": { top: 0 } }}
      {...props}
    />
  );
}

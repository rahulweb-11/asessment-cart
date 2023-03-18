import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function Inputs({
  id,
  title,
  placeholder,
  classNames,
  rows,
  multiline,
  Iconbttn,
  makeStyles,
  createStyles,
  style,
  isPlaceholder,
  isAdornment,
  Formik,
  Form,
  error,
  helperText,
  name,
  type,
  value,
  onChange,
  ref,
  handleChange,
  ...props
}) {
  const x = (isAdornment) => {
    return isAdornment
      ? {
          endAdornment: (
            <InputAdornment position="end">{Iconbttn}</InputAdornment>
          ),
        }
      : {
          startAdornment: (
            <InputAdornment position="start">{Iconbttn}</InputAdornment>
          ),
        };
  };

  console.log(x, "ghhhhgf");

  return (
    <div>
      <InputLabel id="label" className={classNames}>
        {title}
      </InputLabel>
      <FormControl fullWidth>
        <TextField
          ref={ref}
          error={error}
          helperText={helperText}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          handleChange={handleChange}
          fullWidth
          // Formik={Formik}
          // Form={Form}
          // storedRegister={}
          placeholder={placeholder}
          style={style}
          id={id}
          rows={rows}
          // multiline
          InputProps={x(isAdornment)}
          InputLabelProps={{ shrink: false }}
          // autoFocus={true}
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            // "& .MuiOutlinedInput-root": {
            //   "& > fieldset": {

            //     border: "none"
            //   }
            // }
          }}
          {...props}
        />
      </FormControl>
    </div>
  );
}

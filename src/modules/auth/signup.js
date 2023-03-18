import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Inputs from "../../components/inputs";
import "./singup.css";
import "../auth.scss";
import loginIcon from "../../assets/images/loginIcon.png";
import sms from "../../assets/images/sms.svg";
import TextFields from "../../components/TextField/TextField";
import lock from "../../assets/images/lock.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as yup from "yup";
import { userLogin } from "../../redux/action/auth/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const logInSchema = yup.object({
    username: yup
      .string()
      .trim()

      .required("Please Enter username"),
    password: yup
      .string("Please Enter Your Password")
      .required("Please Enter Password")
      
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: (values) => {
      dispatch(userLogin(values,(res)=>{
        localStorage.setItem("user",JSON.stringify(res.data.token));
        navigate("/products")
      }))
    },
  });

  const { handleChange, values, handleSubmit, setFieldValue } = formik;

  function AvoidSpace(event) {
    const key = event.keyCode || event.which;
    const keyChar = String.fromCharCode(key);
    if (/\s/.test(keyChar)) {
      event.preventDefault();
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} className={"login_bg"}></Grid>
        <Grid item xs={12} sm={12} md={5} className="right_grid">
          {/* mobile view logo */}

          <Box component="div" className="form_waraper">
            <img className="logo_res" src={loginIcon} alt="logo" />
            <Typography variant="h4">Log In</Typography>
            <Box
              className="input_wraper"
              component="form"
              // autoComplete="false"
              onSubmit={handleSubmit}
            >
              <div>
                <TextFields
                  inputProps={{
                    maxLength: 20,
                  }}
                  name="username"
                  placeholder="Username"
                  type="text"
                  icon={sms}
                  onChange={handleChange}
                  value={values?.email}
                  {...formik.getFieldProps("username")}
                  onKeyPress={(event) => AvoidSpace(event)}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>

              <div className="pas-style">
                <FormControl fullWidth>
                  <OutlinedInput
                    value={values.password}
                    startAdornment={
                      <>
                        <InputAdornment position="start">
                          <img
                            alt="icon"
                            src={lock}
                            style={{ marginRight: ".5rem" }}
                          ></img>
                        </InputAdornment>
                      </>
                    }
                    type={showPassword ? "text" : "password"}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {!showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    name="password"
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Password"
                    fullWidth
                    //onKeyPress={onKeyPress}
                  />
                </FormControl>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>

              <Box className="forget_password">
                <Typography
                  variant="p"
                  className="text1"
                  sx={{ textAlign: "Right" }}
                ></Typography>
              </Box>
              <Box className="btn_bx">
                <Button type="submit" variant="primary" className="login_btn">
                  Login
                </Button>
                <Button
                  onClick={()=>navigate("/register")}
                  variant="outlined"
                  color="secondary"
                  className="registration_btn"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

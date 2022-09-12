import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Register.css";
import { theme } from "../../../theme";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../actions/auth";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setAuthInfo({ ...authInfo, [input.name]: input.value });
    console.log(authInfo);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        console.log(authInfo);
        dispatch(register(authInfo, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <div className="ptb-80">
          <Box sx={{ width: "100%", m: "auto", textAlign: "center", mb: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              }}
            >
              REGISTER
            </Typography>
            <div
              className="darkbar"
              style={{ margin: "auto", marginTop: "20px" }}
            ></div>
          </Box>
          <div className="container">
            <div
              className="auth-form"
              style={{ backgroundColor: theme.palette.background.default }}
            >
              <div className="auth-head">
                <a href="index.html">{/* <img src="assets/img/logo.png"> */}</a>
                <Typography variant='h6'>Create a new account</Typography>
              </div>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">
                    <Typography variant='h6'>Email</Typography>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    value={authInfo.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <Typography variant='h6'>Password</Typography>
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    value={authInfo.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <Typography variant='h6'>Confirm Password</Typography>
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    value={authInfo.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  <Typography sx={{ color: theme.palette.background.default }} variant='h6'>
                    Sign Up
                  </Typography>
                </button>
              </form>
              <div className="foot">
                <Typography variant='h6'>
                  Already have an account yet?
                  <Link to="/login" style={{ textDecoration: "none", color: theme.palette.primary.main,
                        marginLeft: 5, }}>
                      Login
                  </Link>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SignUp;

import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css"; // Import the CSS file
import theme from "../../theme/theme";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { Button, ThemeProvider } from "@mui/material";

const Login = () => {
  const [loggedin, setLoggedin] = useState(false);

  const handleSubmit = () => {
    console.log("triger");
    setTimeout(() => {
      setLoggedin(true);
      navigate("/home"); // Use the navigate function for navigation
    }, 1000); // Simulate a delay of 1 second
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .email("Invalid email Address")
      .min(9, "Minimum length is 9 characters")
      .required("User name is required"),

    password: Yup.string()
      .min(5, "Minimum length is 5 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();

  return (
    <div>
      <div className="body">
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          render={(formikProps) => (
            <div className="login-container">
              <h1>Login</h1>

              <div className="form-group">
                <label htmlFor="userName" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-input"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.userName}
                />
                <p className="error-message">{formikProps.errors.userName}</p>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.password}
                />
                <p className="error-message">{formikProps.errors.password}</p>
              </div>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  className="submit-button"
                  onClick={handleSubmit}
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                >
                  {formikProps.isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
              </ThemeProvider>

              <p>
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Login;

import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css"; // Import the CSS file
import theme from "../../theme/theme";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button, ThemeProvider } from "@mui/material";
class Login extends Component {
  state = {
    loggedin: false,
  };

  handleSubmit = (values) => {
    // Simulate successful login
    setTimeout(() => {
      console.log(values);
      this.setState({
        loggedin: true,
      });
    }, 1000); // Simulate a delay of 1 second
  };

  validationSchema = Yup.object().shape({
    userName: Yup.string()
      .email("Invalid email Address")
      .min(9, "Minimum length is 9 characters")
      .required("User name is required"),

    password: Yup.string()
      .min(5, "Minimum length is 5 characters")
      .required("Password is required"),
  });

  render() {
    return (
      <div>
        {this.state.loggedin ? (
          <div className="login-success">Successfully logged in</div>
        ) : (
          <div className="body">
            <Formik
              initialValues={{ userName: "", password: "" }}
              onSubmit={this.handleSubmit}
              validationSchema={this.validationSchema}
              render={(formikProps) => (
                <div className="login-container">
                  <h1>Login</h1>

                  <div className="form-group">
                    <label htmlFor="userName" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="form-input"
                      onChange={formikProps.handleChange}
                      value={formikProps.values.userName}
                    />
                    <p className="error-message">
                      {formikProps.errors.userName}
                    </p>
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
                    <p className="error-message">
                      {formikProps.errors.password}
                    </p>
                  </div>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      className="submit-button"
                      onClick={formikProps.handleSubmit}
                      disabled={
                        !formikProps.isValid || formikProps.isSubmitting
                      }
                    >
                      {formikProps.isSubmitting ? "Signing in..." : "Sign in"}
                    </Button>
                  </ThemeProvider>

                  <p>
                    Don't have an account? <a href="/register">Register here</a>
                  </p>
                </div>
              )}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Login;

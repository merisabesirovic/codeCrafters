import React from "react";
import { Formik } from "formik";
import theme from "../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material"; // Import Mui components
import "./Register.css"; // Import the CSS file
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate(); // Declare useNavigate here
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Number is required"),
  });

  const handleLogout = () => {
    navigate("/");
  };
  const handleSubmit = () => {
    toast.success("Account created successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
    // Navigate to login page after toast is closed
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <ThemeProvider theme={theme}>
        {/* Wrap the form with ThemeProvider */}
        <Formik
          initialValues={{ name: "", surname: "", email: "", number: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          render={(formikProps) => (
            <form onSubmit={formikProps.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <TextField
                  type="text"
                  id="name"
                  name="name"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.name}
                />
                {formikProps.errors.name && (
                  <div className="error-message">{formikProps.errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <TextField
                  type="text"
                  id="surname"
                  name="surname"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.surname}
                />
                {formikProps.errors.surname && (
                  <div className="error-message">
                    {formikProps.errors.surname}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.email}
                />
                {formikProps.errors.email && (
                  <div className="error-message">
                    {formikProps.errors.email}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="number">Number</label>
                <TextField
                  type="text"
                  id="number"
                  name="number"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.number}
                />
                {formikProps.errors.number && (
                  <div className="error-message">
                    {formikProps.errors.number}
                  </div>
                )}
              </div>
              <Button onClick={handleLogout} variant="contained">
                Cancel
              </Button>{" "}
              {/* Use Mui Button */}
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="outlined"
                disabled={!formikProps.isValid || formikProps.isSubmitting}
              >
                {formikProps.isSubmitting
                  ? "Creating account..."
                  : "Create account"}
              </Button>
            </form>
          )}
        />
      </ThemeProvider>
    </div>
  );
};

export default Register;

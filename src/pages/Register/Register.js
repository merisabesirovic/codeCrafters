import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Register.css'; // Import the CSS file


const handleClick = () => {
    const text =  "Hello World!";

    const value =  new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);

}

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    number: Yup.string().required('Number is required'),
  });
  const handleSubmit = (values) => {
    console.log(values);
    // Perform registration logic here
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <Formik
        initialValues={{ name: '', surname: '', email: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        render={(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formikProps.handleChange}
                value={formikProps.values.name}
              />
              {formikProps.errors.name && <div className="error-message">{formikProps.errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                onChange={formikProps.handleChange}
                value={formikProps.values.surname}
              />
              {formikProps.errors.surname && <div className="error-message">{formikProps.errors.surname}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formikProps.handleChange}
                value={formikProps.values.email}
              />
              {formikProps.errors.email && <div className="error-message">{formikProps.errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input
                type="text"
                id="number"
                name="number"
                onChange={formikProps.handleChange}
                value={formikProps.values.number}
              />
              {formikProps.errors.number && <div className="error-message">{formikProps.errors.number}</div>}
            </div>
            <button onClick={handleClick} >Citaj</button>
            <button type="submit" disabled={!formikProps.isValid || formikProps.isSubmitting}>
              {formikProps.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default Register;

import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./form.css";

const Form = ({
  onSubmitEvent,
  initialUserValues: { name, lastName, country, city, email },
}) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: name,
      lastName: lastName,
      country: country,
      city: city,
      email: email,
    },
    onSubmit: (values) => {
      onSubmitEvent(values);
      history.push("/");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      }
      return errors;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="country">Country</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Edit</button>
    </form>
  );
};

export default Form;

Form.defaultProps = {
  name: "",
  lastName: "",
  country: "",
  city: "",
  email: "",
};

Form.propTypes = {
  onSubmitEvent: PropTypes.func.isRequired,
  name: PropTypes.string,
  lastName: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
};

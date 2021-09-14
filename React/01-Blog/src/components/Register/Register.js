import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formState, setFormState] = useState({});

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log(formState);
  };

  return <form onSubmit={handleSubmit}>
    <label>Name: <input onChange={handleChange} type="text" name="name" /></label>
    <br />
    <label>Password: <input onChange={handleChange} type="password" name="password" /></label>
    <br />
    <label>Confirm Password: <input onChange={handleChange} type="password" name="confirmPassword" /></label>
    <br />
    <button type="submit">Submit</button>
  </form>;
};

export default Register;
import { useState } from 'react';
import './Register.css';

const Register = () => {
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    password: '',
    password2: '',
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setError('');
    if (formState.password !== formState.password2) {
      setError("Passwords don't match");
      return;
    }
    console.log('formState', formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>
          Name
          <input
            type='text'
            name='name'
            onChange={handleChange}
            defaultValue={formState.name}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            onChange={handleChange}
            defaultValue={formState.password}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor='password2'>
          Confirm Password
          <input
            type='password'
            name='password2'
            onChange={handleChange}
            defaultValue={formState.password2}
            required
          />
        </label>
      </div>
      {error && <p className='error'>{error}</p>}
      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;

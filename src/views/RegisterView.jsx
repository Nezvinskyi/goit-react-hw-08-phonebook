import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const RegisterView = ({ onRegister }) => {
  const [{ name, email, password }, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister({ name, email, password });
    setCredentials({ name: '', email: '', password: '' });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          E-mail
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

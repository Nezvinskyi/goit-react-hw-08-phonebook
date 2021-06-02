import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const LoginView = ({ onLogin }) => {
  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ email, password });
    setCredentials({ email: '', password: '' });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);

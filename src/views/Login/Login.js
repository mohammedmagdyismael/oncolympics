import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Layout from '../../components/Layout/Layout';
import { LoginContainer, LoginForm, LoginInput, LoginButton } from './Login.style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://oncolympics-api.onrender.com/api/users/login', {
        username,
        password,
      });

      if (response.data.status === 200) {
        const { token, role } = response.data.data;
        // Save to cookies
        Cookies.set('token', token);
        Cookies.set('username', username);
        Cookies.set('role', role);
        // Redirect to groups page
        window.location.href = '/groups'
      } else {
        setError('Something went wrong');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </LoginButton>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
};

export default Login;

// Login.js
import React, { useState } from 'react';
import { LoginContainer, LoginForm, LoginInput, LoginButton } from './Login.style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    window.location.href = '/groups'
  };

  return (
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
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

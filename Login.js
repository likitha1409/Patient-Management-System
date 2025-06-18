import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Optional: Add default user for testing if not present
  const defaultUser = {
    email: 'test@example.com',
    password: '123456'
  };
  if (!localStorage.getItem(defaultUser.email)) {
    localStorage.setItem(defaultUser.email, JSON.stringify(defaultUser));
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
      localStorage.setItem('auth', 'true'); // must be string "true"
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
}

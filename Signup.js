import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { email, name, mobile, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Signup successful. Please login.");
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>📝 Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

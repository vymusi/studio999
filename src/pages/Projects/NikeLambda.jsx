import React, { useState } from 'react';
import Loader from '../../components/Loader'; 

export default function NikeLamda() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const correctPassword = 'NikeSNKRS'; // 🔑

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };

  if (!authenticated) {
    return (
      <Loader>
        <div style={styles.lockScreen}>
          <h2>Protected Page</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input 
              type="password" 
              placeholder="Enter password..." 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Unlock</button>
          </form>
        </div>
      </Loader>
    );
  }

  return (
    <Loader>
      <div className="protected-content">
        <h1>NIKE Lamda PROJECT</h1>
        <p>Your project content here...</p>
      </div>
    </Loader>
  );
}

const styles = {
  lockScreen: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0f0f0f',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  form: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid #555',
    background: '#1a1a1a',
    color: 'white',
    fontSize: '1rem',
    width: '250px',
  },
  button: {
    padding: '0.8rem 1rem',
    background: 'linear-gradient(135deg, #8E7DBE, #6DAEDB)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'white',
    fontSize: '1rem',
  },
};

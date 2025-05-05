import React, { useState, useEffect } from 'react';

// --- IMPORTANT ---
// Hardcoding the password here is NOT secure for production.
// Consider environment variables or a backend check for real applications.
const CORRECT_PASSWORD = 'Harrison6401!!'; // CHANGE THIS!
// --- IMPORTANT ---

const PasswordProtect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check session storage on initial load
    const authStatus = sessionStorage.getItem('site_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('site_authenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password.');
      setPassword(''); // Clear the input field on error
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Basic inline styles for the overlay and form
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's on top
    color: 'white',
    fontFamily: 'sans-serif',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    background: 'rgba(50, 50, 50, 0.8)', // Slightly lighter box
    borderRadius: '8px',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    padding: '8px',
    fontSize: '1rem',
    minWidth: '200px', // Make input wider
  };

  const buttonStyle: React.CSSProperties = {
    padding: '8px 15px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

   const errorStyle: React.CSSProperties = {
    color: 'red',
    marginTop: '5px',
    minHeight: '1em' // Reserve space for error message
  };


  return (
    <div style={overlayStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
         <h2>Enter Password to Access Site</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
          autoFocus // Focus the input field on load
        />
        <button type="submit" style={buttonStyle}>Enter</button>
         <div style={errorStyle}>{error}</div>
      </form>
    </div>
  );
};

export default PasswordProtect; 
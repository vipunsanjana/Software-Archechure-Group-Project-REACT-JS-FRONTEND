import React, { useState } from 'react';
import Layout from "./../../components/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle as fabGoogle, faFacebook as fabFacebook } from '@fortawesome/free-brands-svg-icons';
import "../../styles/Loginpage.css"

// Add the imported icons to the library
library.add( fabGoogle, fabFacebook);

function Login()  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Check for empty fields
    if (!username || !password) {
        setError('Please enter both email and password.');
        return;
      }
      // Check email format (basic check for example purposes)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(username)) {
        setError('Please enter a valid email address.');
        return;
      }
  
      // Simulate authentication (Replace with actual authentication logic)
      if (username === 'user@example.com' && password === 'password') {
        console.log('Logged in successfully!');
        // Here you can redirect the user to another page
      } else {
        setError('Invalid username or password');
      }
  };

  return (
    <Layout title="Login - Ecommer App">
    <div className="login-page">
    
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>
               Email
            </label>
            <input
              type="email" 
              placeholder='enter your email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Password
            </label>
            <input
              type="password"
              placeholder='enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div >
            <button className='login-btn' type="submit">Login</button>
          </div>
        </form>
        <div className="additional-options">
          <a href="#forgot" className="forgot-password">
            Forgot Password?
          </a><br />
          <p>-Or-</p>
          <div className="social-login">
            <button className="google-login">
              <FontAwesomeIcon icon={fabGoogle} /> 
            </button>
            <button className="facebook-login">
              <FontAwesomeIcon icon={fabFacebook} /> 
            </button>
          </div>
          <div className='signup-option'>
             <p>Don't have an account? <a href="#signup">Sign Up</a></p>
          </div>
          
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Login;

// src/pages/auth/Login.tsx
import React, { useState } from 'react';
import styles from './Login.module.css';
import logoImg from '../../assets/logo.png'; // ✅ Import your logo image

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempt:', { username, password, rememberMe });
    // TODO: Replace with actual authentication logic
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    // TODO: Replace with navigation to sign up page
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // TODO: Replace with forgot password logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img src={logoImg} alt="Logo" className={styles.logoImage} />
          <h1 className={styles.welcomeTitle}>Hi, welcome back</h1>
          <p className={styles.welcomeSubtitle}>
            Please fill in your details to log in
          </p>
        </div>

        {/* Login Form */}
        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Student No / Employee No"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className={styles.formOptions}>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={styles.checkbox}
              />
              <span className={styles.checkboxLabel}>Remember me</span>
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className={styles.forgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className={styles.signInButton}
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Link */}
        <div className={styles.signUpSection}>
          <p className={styles.signUpText}>
            Don't have an account?{' '}
            <button 
              onClick={handleSignUp}
              className={styles.signUpLink}
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © 2025- ABNO Softwares International</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

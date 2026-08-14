import { useState } from 'react';
import './LoginForm.css';

const isEmailValid = (value) => /\S+@\S+\.\S+/.test(value);

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = 'Please enter your email address.';
    } else if (!isEmailValid(email)) {
      validationErrors.email = 'Enter a valid email address.';
    }

    if (!password) {
      validationErrors.password = 'Please enter your password.';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters.';
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      setStatus('');
      return;
    }

    setIsSubmitting(true);
    setStatus('Signing you in…');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus(`Welcome back, ${email.split('@')[0]}!`);
    }, 1300);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <label className="login-label">
        Email address
        <input
          className={`login-input ${errors.email ? 'input-error' : ''}`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="username"
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </label>

      <label className="login-label">
        Password
        <input
          className={`login-input ${errors.password ? 'input-error' : ''}`}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 6 characters"
          autoComplete="current-password"
        />
        {errors.password && <span className="error-text">{errors.password}</span>}
      </label>

      <div className="login-meta">
        <label className="remember-label">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          Remember me
        </label>
        <a href="https://example.com/forgot">Forgot password?</a>
      </div>

      <button className="submit-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in…' : 'Log in'}
      </button>

      {status && <p className="status-text">{status}</p>}
    </form>
  );
}

export default LoginForm;

import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="app-shell">
      <p className="logo">Sunny Systems</p>
      <div className="app-card">
        <h1 className="card-title">Welcome back</h1>
        <p className="card-subtitle">Log in to continue to your dashboard</p>
        <LoginForm />
        <div className="card-footer">
          <span>Don’t have an account?</span>
          <a href="https://example.com/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default App;

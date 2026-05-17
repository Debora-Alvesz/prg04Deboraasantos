import LoginForm from '../components/LoginForm';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-page__brand">
        <h1>Lumina</h1>
        <p>Gerencie suas tarefas com foco total</p>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;

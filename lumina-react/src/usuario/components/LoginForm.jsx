import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail]     = useState('');
  const [senha, setSenha]     = useState('');
  const [erros, setErros]     = useState({ email: false, senha: false });

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e) {
    e.preventDefault();

    const novosErros = {
      email: email.trim() === '' || !regexEmail.test(email.trim()),
      senha: senha.trim() === '',
    };

    setErros(novosErros);

    if (!novosErros.email && !novosErros.senha) {
      // Simulação de login bem-sucedido
      navigate('/dashboard');
    }
  }

  return (
    <div className="login-container fade-down">
      <div className="form-card">
        <h2 style={{ textAlign: 'center', marginBottom: '6px' }}>
          Bem-vindo de volta
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '28px' }}>
          Acesse o painel administrativo
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">E-mail ou Usuário</label>
            <input
              type="text"
              id="email"
              placeholder="seu@email.com"
              autoComplete="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={erros.email ? 'input-erro' : ''}
            />
            {erros.email && (
              <span className="mensagem-erro">Por favor, informe um e-mail válido.</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="••••••••"
              autoComplete="current-password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className={erros.senha ? 'input-erro' : ''}
            />
            {erros.senha && (
              <span className="mensagem-erro">A senha é obrigatória.</span>
            )}
          </div>

          <button type="submit" className="btn-submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

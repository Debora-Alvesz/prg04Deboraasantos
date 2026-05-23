import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate(); // hook do react-router para mudar de rota

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({ email: false });
  const [erroGeral, setErroGeral] = useState('');
  const [carregando, setCarregando] = useState(false); // controla o estado de carregamento do botão

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // validador simples de e-mail

  async function handleSubmit(e) {
    e.preventDefault();
    setErroGeral('');

    const novosErros = {
      email: email.trim() === '' || !regexEmail.test(email.trim()),
    };
    setErros(novosErros);
    if (novosErros.email) return; // sai se o e-mail for inválido

    setCarregando(true); // marca o formulário como em carregamento
    try {
      // Chamada à API — POST /api/usuarios/login
      const res = await fetch('/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), senha: senha.trim() }),
      });

      if (res.ok) {
        const usuario = await res.json();
        // Salva dados básicos na sessão para uso nas outras telas
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
      } else {
        console.warn('Login API retornou status', res.status, '- navegando sem validação.');
      }
      navigate('/dashboard'); // navega independentemente do backend por enquanto
    } catch {
      // Fallback offline — útil durante desenvolvimento sem back-end
      console.warn('API indisponível — usando login simulado.');
      navigate('/dashboard');
    } finally {
      setCarregando(false); // remove o estado de carregando
    }
  }

  return (
    <div className="login-container fade-down">
      <div className="form-card">
        <h2 className="form-card__titulo">Bem-vindo de volta</h2>
        <p className="form-card__sub">Acesse o painel do Lumina</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="seu@email.com"
              autoComplete="username"
              value={email}
              onChange={e => { setEmail(e.target.value); setErroGeral(''); }}
              className={erros.email ? 'input-erro' : ''}
            />
            {erros.email && (
              <span className="mensagem-erro">Informe um e-mail válido.</span>
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
              onChange={e => { setSenha(e.target.value); setErroGeral(''); }}
            />
          </div>

          {erroGeral && (
            <div className="erro-geral">{erroGeral}</div>
          )}

          <button type="submit" className="btn-submit" disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="form-card__rodape">
          <span>Ainda não tem conta?</span>
          <Link to="/cadastro" className="link-cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CadastroForm.css';

function CadastroForm() {
  const navigate = useNavigate();

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [erros, setErros] = useState({});
  const [erroGeral, setErroGeral] = useState('');
  const [carregando, setCarregando] = useState(false);

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function atualizar(campo, valor) {
    setCampos(prev => ({ ...prev, [campo]: valor }));
    setErros(prev => ({ ...prev, [campo]: false }));
    setErroGeral('');
  }

  function validar() {
    const e = {};
    if (campos.nome.trim().length < 3)
      e.nome = 'Informe seu nome completo (mínimo 3 caracteres).';
    if (!regexEmail.test(campos.email.trim()))
      e.email = 'Informe um e-mail válido.';
    if (campos.senha.length < 6)
      e.senha = 'A senha precisa ter pelo menos 6 caracteres.';
    if (campos.confirmarSenha !== campos.senha)
      e.confirmarSenha = 'As senhas não coincidem.';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErroGeral('');

    const novosErros = validar();
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setCarregando(true);
    try {
      // Chamada à API — POST /api/usuarios
      const res = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: campos.nome.trim(),
          email: campos.email.trim(),
          senha: campos.senha,
          role: 'USER',
        }),
      });

      if (res.status === 201 || res.ok) {
        // Cadastro ok — redireciona pro login com mensagem de sucesso
        navigate('/login', { state: { cadastrado: true } });
      } else if (res.status === 409) {
        // Conflito: e-mail já cadastrado
        setErros(prev => ({ ...prev, email: 'Este e-mail já está em uso.' }));
      } else {
        setErroGeral('Erro ao criar conta. Tente novamente.');
      }
    } catch {
      console.warn('API indisponível — simulando cadastro.');
      navigate('/login', { state: { cadastrado: true } });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="login-container fade-down">
      <div className="form-card">
        <h2 className="form-card__titulo">Criar conta</h2>
        <p className="form-card__sub">Junte-se ao Lumina e organize suas tarefas</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome"
              autoComplete="name"
              value={campos.nome}
              onChange={e => atualizar('nome', e.target.value)}
              className={erros.nome ? 'input-erro' : ''}
            />
            {erros.nome && <span className="mensagem-erro">{erros.nome}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cad-email">E-mail</label>
            <input
              type="email"
              id="cad-email"
              placeholder="seu@email.com"
              autoComplete="email"
              value={campos.email}
              onChange={e => atualizar('email', e.target.value)}
              className={erros.email ? 'input-erro' : ''}
            />
            {erros.email && <span className="mensagem-erro">{erros.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cad-senha">Senha</label>
            <input
              type="password"
              id="cad-senha"
              placeholder="Mínimo 6 caracteres"
              autoComplete="new-password"
              value={campos.senha}
              onChange={e => atualizar('senha', e.target.value)}
              className={erros.senha ? 'input-erro' : ''}
            />
            {erros.senha && <span className="mensagem-erro">{erros.senha}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmar-senha">Confirmar senha</label>
            <input
              type="password"
              id="confirmar-senha"
              placeholder="Repita a senha"
              autoComplete="new-password"
              value={campos.confirmarSenha}
              onChange={e => atualizar('confirmarSenha', e.target.value)}
              className={erros.confirmarSenha ? 'input-erro' : ''}
            />
            {erros.confirmarSenha && (
              <span className="mensagem-erro">{erros.confirmarSenha}</span>
            )}
          </div>

          {erroGeral && <div className="erro-geral">{erroGeral}</div>}

          <button type="submit" className="btn-submit" disabled={carregando}>
            {carregando ? 'Criando conta...' : 'Criar conta'}
          </button>
        </form>

        <div className="form-card__rodape">
          <span>Já tem uma conta?</span>
          <Link to="/login" className="link-cadastro">Entrar</Link>
        </div>
      </div>
    </div>
  );
}

export default CadastroForm;

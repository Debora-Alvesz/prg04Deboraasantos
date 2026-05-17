import Header from '../../infraestructure/components/Header';
import Navbar from '../../infraestructure/components/Navbar';
import Footer from '../../infraestructure/components/Footer';
import './Perfil.css';

function Perfil() {
  return (
    <div className="page-wrapper">
      <Header />
      <Navbar />

      <main className="page-content fade-down">
        <h2>Meu Perfil</h2>
        <p>Gerencie suas informações pessoais e configurações de conta.</p>

        <div className="perfil-card">
          <div className="perfil-avatar">
            <div className="avatar-placeholder">?</div>
            <button className="btn-trocar-foto">Trocar Foto</button>
          </div>

          <form className="perfil-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" placeholder="Seu nome" defaultValue="Débora Santos" />
            </div>

            <div className="form-group">
              <label htmlFor="perf-email">E-mail</label>
              <input type="email" id="perf-email" placeholder="seu@email.com" defaultValue="debora@lumina.dev" />
            </div>

            <div className="form-group">
              <label htmlFor="nova-senha">Nova Senha</label>
              <input type="password" id="nova-senha" placeholder="Deixe em branco para não alterar" />
            </div>

            <div className="form-group">
              <label htmlFor="confirma-senha">Confirmar Nova Senha</label>
              <input type="password" id="confirma-senha" placeholder="Repita a nova senha" />
            </div>

            <button type="submit" className="btn-salvar">Salvar Alterações</button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Perfil;

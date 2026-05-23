import CadastroForm from '../components/CadastroForm';
import './Login.css'; /* mesma estrutura de página */

function Cadastro() {
  // Exibe a página de cadastro com o formulário de criação de conta
  return (
    <div className="login-page">
      <div className="login-page__brand">
        <h1>Lumina</h1>
        <p>Crie sua conta e comece a organizar</p>
      </div>
      <CadastroForm />
    </div>
  );
}

export default Cadastro;

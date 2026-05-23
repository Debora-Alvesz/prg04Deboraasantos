import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate(); // hook para mudar a rota
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A rota que você tentou acessar não existe.</p>
      <button onClick={() => navigate('/login')}>Voltar ao Login</button>
    </div>
  );
}

export default NotFound;

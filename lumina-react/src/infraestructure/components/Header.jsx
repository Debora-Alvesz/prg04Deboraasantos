import './Header.css';

function Header({ titulo = 'Lumina' }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">{titulo}</h1>
        <span className="badge badge--roxo">Gerenciador de Tarefas</span>
      </div>
    </header>
  );
}

export default Header;

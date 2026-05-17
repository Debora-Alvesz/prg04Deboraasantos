import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/dashboard',      label: 'Dashboard' },
  { to: '/projetos',       label: 'Projetos' },
  { to: '/perfil',         label: 'Meu Perfil' },
  { to: '/admin/usuarios', label: 'Usuários' },
];

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    // Futuramente: limpar token/sessão aqui
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <ul className="navbar__list">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  'navbar__link' + (isActive ? ' navbar__link--active' : '')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="navbar__logout" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

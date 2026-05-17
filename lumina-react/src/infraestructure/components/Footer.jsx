import './Footer.css';

function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">
        © {ano} <strong>Lumina</strong> — Gerenciador de Tarefas
      </p>
    </footer>
  );
}

export default Footer;

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Projetos.css';

const projetos = [
  { id: 1, nome: 'Lumina Web',       tarefas: 12, cor: 'roxo'  },
  { id: 2, nome: 'App Mobile',       tarefas:  5, cor: 'ciano' },
  { id: 3, nome: 'Marketing Digital', tarefas:  8, cor: 'rosa'  },
];

function Projetos() {
  return (
    <div className="page-wrapper">
      <Header />
      <Navbar />

      <main className="page-content fade-down">
        <div className="projetos__top">
          <div>
            <h2>Projetos</h2>
            <p>Agrupamento de tarefas por departamento ou cliente.</p>
          </div>
          <button className="btn-novo-projeto">+ Novo Projeto</button>
        </div>

        <div className="projetos-grid">
          {projetos.map(p => (
            <div key={p.id} className={'projeto-card projeto-card--' + p.cor}>
              <h3>{p.nome}</h3>
              <p>{p.tarefas} tarefas</p>
              <span className={'badge badge--' + p.cor}>Ativo</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Projetos;

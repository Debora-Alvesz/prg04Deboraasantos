import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

const tarefasIniciais = [
  { id: 1, titulo: 'Revisar documentação do projeto',  status: 'pendente' },
  { id: 2, titulo: 'Reunião de alinhamento com equipe', status: 'concluida' },
  { id: 3, titulo: 'Implementar tela de perfil',        status: 'pendente' },
  { id: 4, titulo: 'Deploy em ambiente de produção',    status: 'pendente' },
  { id: 5, titulo: 'Refatorar componentes do header',   status: 'concluida' },
];

function Dashboard() {
  const [tarefas, setTarefas]   = useState(tarefasIniciais);
  const [filtro, setFiltro]     = useState('todas');
  const [novaTarefa, setNova]   = useState('');
  const [addindo, setAddindo]   = useState(false);

  const tarefasFiltradas = tarefas.filter(t =>
    filtro === 'todas'    ? true :
    filtro === 'pendente' ? t.status === 'pendente' :
                            t.status === 'concluida'
  );

  function toggleStatus(id) {
    setTarefas(prev => prev.map(t =>
      t.id === id
        ? { ...t, status: t.status === 'pendente' ? 'concluida' : 'pendente' }
        : t
    ));
  }

  function adicionarTarefa(e) {
    e.preventDefault();
    if (!novaTarefa.trim()) return;
    const proxId = Math.max(...tarefas.map(t => t.id), 0) + 1;
    setTarefas(prev => [...prev, { id: proxId, titulo: novaTarefa.trim(), status: 'pendente' }]);
    setNova('');
    setAddindo(false);
  }

  return (
    <div className="page-wrapper">
      <Header />
      <Navbar />

      <main className="page-content fade-down">
        <div className="dashboard__top">
          <div>
            <h2>Minhas Tarefas</h2>
            <p>{tarefas.filter(t => t.status === 'pendente').length} pendentes · {tarefas.filter(t => t.status === 'concluida').length} concluídas</p>
          </div>
          <button className="btn-nova" onClick={() => setAddindo(v => !v)}>
            + Nova Tarefa
          </button>
        </div>

        {addindo && (
          <form className="form-nova" onSubmit={adicionarTarefa}>
            <input
              autoFocus
              type="text"
              placeholder="Descreva a nova tarefa..."
              value={novaTarefa}
              onChange={e => setNova(e.target.value)}
            />
            <button type="submit">Adicionar</button>
            <button type="button" className="btn-cancelar" onClick={() => setAddindo(false)}>Cancelar</button>
          </form>
        )}

        <div className="dashboard__filtros">
          {['todas', 'pendente', 'concluida'].map(f => (
            <button
              key={f}
              className={'filtro-btn' + (filtro === f ? ' filtro-btn--ativo' : '')}
              onClick={() => setFiltro(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <ul className="tarefa-lista">
          {tarefasFiltradas.length === 0 && (
            <li className="tarefa-vazia">Nenhuma tarefa encontrada.</li>
          )}
          {tarefasFiltradas.map(t => (
            <li key={t.id} className={'tarefa-item' + (t.status === 'concluida' ? ' tarefa-item--concluida' : '')}>
              <button
                className={'tarefa-check' + (t.status === 'concluida' ? ' tarefa-check--ok' : '')}
                onClick={() => toggleStatus(t.id)}
                aria-label="Alternar status"
              >
                {t.status === 'concluida' ? '✓' : '○'}
              </button>
              <span className="tarefa-titulo">{t.titulo}</span>
              <span className={'badge ' + (t.status === 'pendente' ? 'badge--roxo' : 'badge--verde')}>
                {t.status}
              </span>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;

import { useState } from 'react';
import './UserTable.css';

const dadosIniciais = [
  { id: '#001', nome: 'Ana Clara Oliveira', email: 'ana.oliveira@lumina.dev' },
  { id: '#002', nome: 'Bruno Mendes',       email: 'bruno.mendes@lumina.dev' },
  { id: '#003', nome: 'Carla Souza',        email: 'carla.souza@lumina.dev' },
  { id: '#004', nome: 'Diego Ferreira',     email: 'diego.ferreira@lumina.dev' },
  { id: '#005', nome: 'Elena Ribeiro',      email: 'elena.ribeiro@lumina.dev' },
];

function UserTable() {
  const [usuarios, setUsuarios] = useState(dadosIniciais);

  function handleExcluir(id) {
    if (window.confirm(`Deseja excluir o usuário ${id}?`)) {
      setUsuarios(prev => prev.filter(u => u.id !== id));
    }
  }

  function handleEditar(id) {
    // Placeholder — futuramente abrirá um modal de edição
    alert(`Editar usuário ${id} (implementar modal)`);
  }

  return (
    <div className="usertable">
      <div className="usertable__header">
        <div>
          <h2>Painel Administrativo</h2>
          <p>Gerenciamento de usuários do sistema</p>
        </div>
        <span className="badge badge--verde">● Sistema Online</span>
      </div>

      <div className="usertable__wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-dim)' }}>
                  Nenhum usuário encontrado.
                </td>
              </tr>
            ) : (
              usuarios.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nome}</td>
                  <td>{u.email}</td>
                  <td>
                    <div className="acoes">
                      <button className="btn-editar" onClick={() => handleEditar(u.id)}>Editar</button>
                      <button className="btn-excluir" onClick={() => handleExcluir(u.id)}>Excluir</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;

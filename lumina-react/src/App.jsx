import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login    from './usuario/pages/Login';
import Dashboard from './infraestructure/pages/Dashboard';
import Perfil   from './usuario/pages/Perfil';
import AdminUsuarios from './usuario/pages/AdminUsuarios';
import Projetos from './infraestructure/pages/Projetos';
import NotFound from './infraestructure/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona raiz para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Autenticação */}
        <Route path="/login" element={<Login />} />

        {/* Área do usuário */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil"    element={<Perfil />} />
        <Route path="/projetos"  element={<Projetos />} />

        {/* Área administrativa */}
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

<div align="center">
  <h1>💜</h1>

  <h2>🌀 Lumina | Gerenciador de Tarefas</h2>

  ---

  Plataforma intuitiva desenvolvida para clareza, usabilidade e organização eficiente do dia a dia. O Lumina oferece um ambiente livre de distrações, utilizando uma paleta de cores dark com detalhes em neon para maximizar o foco e o fluxo de trabalho.

  ---
</div>


## Estrutura do Projeto

```
src/
├── assets/
│   └── css/
│       └── global.css        # Variáveis CSS e estilos base (tema dark/neon)
│
├── components/               # Componentes reutilizáveis
│   ├── Header.jsx / .css     # Cabeçalho com logo e título
│   ├── Navbar.jsx / .css     # Menu de navegação entre páginas
│   ├── Footer.jsx / .css     # Rodapé com informações da autora
│   ├── UserTable.jsx / .css  # Tabela de usuários (painel admin)
│   └── LoginForm.jsx / .css  # Formulário de autenticação
│
├── pages/                    # Páginas da aplicação
│   ├── Login.jsx / .css         → /login
│   ├── Dashboard.jsx / .css     → /dashboard
│   ├── Perfil.jsx / .css        → /perfil
│   ├── AdminUsuarios.jsx        → /admin/usuarios
│   ├── Projetos.jsx / .css      → /projetos
│   └── NotFound.jsx / .css      → /* (404)
│
├── App.jsx                   # Configuração das rotas (BrowserRouter)
└── index.js                  # Ponto de entrada React

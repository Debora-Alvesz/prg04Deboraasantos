import Header from '../../infraestructure/components/Header';
import Navbar from '../../infraestructure/components/Navbar';
import Footer from '../../infraestructure/components/Footer';
import UserTable from '../components/UserTable';

function AdminUsuarios() {
  return (
    <div className="page-wrapper">
      <Header />
      <Navbar />

      <main className="page-content fade-down">
        <UserTable />
      </main>

      <Footer />
    </div>
  );
}

export default AdminUsuarios;

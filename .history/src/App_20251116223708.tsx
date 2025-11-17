import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './';
import Navbar from './assets/components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

/**
 * Componente principal da aplicação.
 * Renderiza a estrutura base com Navbar, Home e Footer.
 *
 * @returns {JSX.Element} Estrutura principal do aplicativo React.
 */

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter> 
      <Navbar />
      <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>   
    </AuthProvider>
    </>
  );
}

export default App;
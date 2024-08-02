import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Busqueda from './Busqueda';
import Registro from './Registro';
import Admin from './Admin'; // Nuevo componente

function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado, setLogueado] = useState(false);
  const [esAdmin, setEsAdmin] = useState(false); // Nuevo estado

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' });
    if (peticion.ok) {
      const data = await peticion.json();
      setLogueado(true);
      setEsAdmin(data.esAdmin); // Guardar si es admin
    } else {
      alert('Usuario o clave inválidas');
    }
  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' });
    if (peticion.ok) {
      const data = await peticion.json();
      setLogueado(true);
      setEsAdmin(data.esAdmin); // Guardar si es admin
    }
  }

  useEffect(() => {
    validar();
  }, []);

  if (logueado) {
    return esAdmin ? <Admin /> : <Busqueda />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <h2>Inicio de sesión</h2>
            <img src="imagenes/logobc.jpg" alt="Logo BuscaCole" className="logo" />
            <input
              placeholder="usuario"
              type="text"
              name="usuario"
              id="usuario"
              value={usuario}
              onChange={cambiarUsuario}
            />
            <input
              placeholder="clave"
              type="password"
              name="clave"
              id="clave"
              value={clave}
              onChange={cambiarClave}
            />
            <button onClick={ingresar}>Ingresar</button>
            <br />
            <Link to="/registro">
              <button>Registrar</button>
            </Link>
          </>
        } />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;

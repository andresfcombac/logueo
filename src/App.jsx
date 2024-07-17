import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Busqueda  from './Busqueda'

function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado, setLogueado] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave,{credentials: 'include'})
    if (peticion.ok) {
        setLogueado(true);
      } else {
        alert('Usuario o clave inválidas');
      }
    
  }

  async function validar (){
    const peticion = await fetch('http://localhost:3000/validar',{credentials: 'include'})
    if (peticion.ok) {
        setLogueado(true);
      } 
  }
  useEffect(()=>{
     validar()
  },[])


  if (logueado) {
    return <Busqueda />;
  }

  return (
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
      <button>Registrar</button>
    </>
  );
}

export default App;
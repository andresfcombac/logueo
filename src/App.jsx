import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Busqueda  from './Busqueda'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  function  cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function ingresar() {
    if (usuario == 'admin' && clave == 'admin') {
      alert('sesion iniciada')  
      setLogueado(true)
          } else {
      alert('usuario o clave incorrectos')
    }
  }
  
  if (logueado) {
    return <Busqueda/>
  }
  
  return (
    <>
  <h2>Inicio de sesión</h2>
  <img src="imagenes/logobc.jpg" alt="Logo BuscaCole" class="logo" ></img>
  <input placeholder ='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>    
  <input placeholder='clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
  <button onClick={ingresar}>ingresar</button>
  <br/>
  <button>registar </button>
      </>
  )
}

export default App

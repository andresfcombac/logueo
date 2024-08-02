import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('...');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [ubicacion, setUbicacion] = useState('Bogotá');

  async function handleSubmit(event) {
    event.preventDefault();
    const datos = { nombre, documento, tipoDocumento, correoElectronico, usuario, clave, ubicacion };

    try {
      const respuesta = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });
      if (respuesta.ok) {
        alert('Registro exitoso');
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      alert('Error en el registro');
    }
  }

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            type="text" 
            value={nombre} 
            onChange={e => setNombre(e.target.value)} 
            placeholder="Ingrese su nombre completo" 
            required 
          />
        </label>
        <label>
          Documento:
          <input 
            type="text" 
            value={documento} 
            onChange={e => setDocumento(e.target.value)} 
            placeholder="Ingrese su documento de identidad" 
            required 
          />
        </label>
        <label>
          Tipo de Documento:
          <select value={tipoDocumento} onChange={e => setTipoDocumento(e.target.value)}>
            <option value="cedula">Cédula</option>
            <option value="tarjeta">Tarjeta de Identidad</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </label>
        <label>
          Correo Electrónico:
          <input 
            type="email" 
            value={correoElectronico} 
            onChange={e => setCorreoElectronico(e.target.value)} 
            placeholder="Ingrese su correo electrónico" 
            required 
          />
        </label>
        <label>
          Usuario:
          <input 
            type="text" 
            value={usuario} 
            onChange={e => setUsuario(e.target.value)} 
            placeholder="Ingrese un nombre de usuario" 
            required 
          />
        </label>
        <label>
          Clave:
          <input 
            type="password" 
            value={clave} 
            onChange={e => setClave(e.target.value)} 
            placeholder="Ingrese una clave segura" 
            required 
          />
        </label>
        <label>
          Ubicación:
          <select value={ubicacion} onChange={e => setUbicacion(e.target.value)}>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </label>
        <button type="submit">Registrar</button>
      </form>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
}

export default Registro;

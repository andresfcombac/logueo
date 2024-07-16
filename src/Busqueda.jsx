import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Busqueda() {

  return (
    <div className="container">
      {/* Banner de Quiénes Somos y Contacto */}
      <div className="banner">
        <div className="banner-links">
          <a href="/quienes_somos">Quiénes Somos</a> |
          <a href="/contacto">Contacto</a>
        </div>
      </div>
      <img src="imagenes/logobc.jpg" alt="Logo BuscaCole" className="logo" />
      <h2>Búsqueda de Colegios</h2>
      <form action="/resultados_busqueda" method="GET">
        <div className="form-group">
          <label htmlFor="zona">Zona:</label>
          <select id="zona" name="zona">
            <option value="norte">Norte</option>
            <option value="sur">Sur</option>
            <option value="este">Este</option>
            <option value="oeste">Oeste</option>
            <option value="centro">Centro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo de Colegio:</label>
          <select id="tipo" name="tipo">
            <option value="publico">Público</option>
            <option value="privado">Privado</option>
            <option value="concertado">Concertado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ruta">Ruta de Transporte:</label>
          <input type="text" id="ruta" name="ruta" className="input-field" placeholder="Ej: Ruta 101" />
        </div>
        <div className="form-group">
          <label htmlFor="horarios">Horarios Destacados:</label>
          <input type="text" id="horarios" name="horarios" className="input-field" placeholder="Ej: 8:00 AM - 3:00 PM" />
        </div>
        <div className="form-group">
          <label htmlFor="destacado">Destacado por:</label>
          <select id="destacado" name="destacado">
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="mixto">Mixto</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="jornada">Tipo de Jornada:</label>
          <input type="text" id="jornada" name="jornada" className="input-field" placeholder="Ej: Jornada continua" />
        </div>
        <button type="submit" className="button">Buscar</button>
      </form>
      <hr />
      <h2>Historial de Búsqueda</h2>
      <ul>
        <li><a href="/busqueda1">Resultados de Búsqueda 1</a></li>
        <li><a href="/busqueda2">Resultados de Búsqueda 2</a></li>
        <li><a href="/busqueda3">Resultados de Búsqueda 3</a></li>
      </ul>
      <hr />
      <h2>Dejar Comentario</h2>
      <form action="/comentar" method="POST">
        <div className="form-group">
          <label htmlFor="colegio">Colegio:</label>
          <input type="text" id="colegio" name="colegio" className="input-field" required />
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentario:</label>
          <textarea id="comentario" name="comentario" rows="4" className="input-field" required></textarea>
        </div>
        <button type="submit" className="button">Enviar Comentario</button>
      </form>
    </div>
  );
}
 
export default Busqueda

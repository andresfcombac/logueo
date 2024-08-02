import { useEffect, useState } from 'react';

function Admin() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Configurar el temporizador de inactividad
    const timer = setTimeout(() => {
      alert('Sesión expirada por inactividad');
      window.location.href = '/login'; // Asegúrate de que esta ruta sea la correcta para tu inicio de sesión
    }, 60000); // 1 minuto

    async function fetchUsuarios() {
      try {
        const respuesta = await fetch('http://localhost:3000/usuarios', { credentials: 'include' });
        if (!respuesta.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await respuesta.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    }

    fetchUsuarios();

    // Reiniciar el temporizador de inactividad en caso de actividad del usuario
    const handleActivity = () => {
      clearTimeout(timer);
      setTimeout(() => {
        alert('Sesión expirada por inactividad');
        window.location.href = '/login'; // Asegúrate de que esta ruta sea la correcta para tu inicio de sesión
      }, 60000); // 1 minuto
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, []);

  async function eliminarUsuario(id) {
    try {
      const respuesta = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (respuesta.ok) {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
      } else {
        alert('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  }

  function volverInicioSesion() {
    window.location.href = '/login'; // Asegúrate de que esta ruta sea la correcta para tu inicio de sesión
  }

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.usuario}</td>
              <td>
                <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={volverInicioSesion}>Cerrar Sesión</button>
      <button onClick={volverInicioSesion}>Ir a Inicio de Sesión</button>
    </div>
  );
}

export default Admin;

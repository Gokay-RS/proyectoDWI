import React, { useState, useEffect } from 'react';
import obtenerPersonajePorNombre from './my-script/ManagerScript.js';

function App() {
  const [personajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

  useEffect(() => {
    const resultados = personajes.filter(personaje =>
      personaje.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultadoBusqueda(resultados);
  }, [busqueda, personajes]);

  const handleChangeBusqueda = event => {
    setBusqueda(event.target.value);
  };

  const handleBuscar = () => {
    obtenerPersonajePorNombre(busqueda)
      .then(data => {
        setResultadoBusqueda([data]);
      })
      .catch(error => {
        console.error('Error al buscar el personaje:', error);
        setResultadoBusqueda([]);
      });
  };

  return (
    <div>
      <h1>Personajes de Marvel</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar personaje"
          value={busqueda}
          onChange={handleChangeBusqueda}
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>
      <ul>
        {resultadoBusqueda.map(personaje => (
          <li key={personaje.id}>{personaje.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

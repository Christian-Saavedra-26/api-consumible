import React, { useState } from "react";

const SearchBar = ({ setSearchQuery }) => {  
  const [valorBusqueda, setValorBusqueda] = useState("");

  const manejarBusqueda = () => {
    setSearchQuery(valorBusqueda); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personajes..."
        value={valorBusqueda}
        onChange={(e) => setValorBusqueda(e.target.value)}
      />
      <button onClick={manejarBusqueda}>Buscar</button>
    </div>
  );
};

export default SearchBar;

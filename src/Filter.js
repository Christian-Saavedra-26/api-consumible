import React from 'react';

const Filter = ({ setFilterStatus }) => {
  return (
    <div>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="">Todo</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
    </div>
  );
};

export default Filter;

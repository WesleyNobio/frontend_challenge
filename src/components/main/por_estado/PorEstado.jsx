import React from 'react';
import './style.css';

const PorEstado = () => {
  return (
    <div className="por_estado">
      <h3>Por Estado</h3>
      <div>
        <input type="checkbox" id="sao_paulo" name="sao_paulo" />
        <label htmlFor="sao_paulo">São Paulo</label>
      </div>
      <div>
        <input type="checkbox" id="rio" name="rio" />
        <label htmlFor="rio">Rio de Janeiro</label>
      </div>
      <div>
        <input type="checkbox" id="minas" name="minas" />
        <label htmlFor="minas">Minas Gerais</label>
      </div>
      <div>
        <input type="checkbox" id="e_santo" name="e_santo" />
        <label htmlFor="e_santo">Esprito Santo</label>
      </div>
      <div>
        <input type="checkbox" id="bahia" name="bahia" />
        <label htmlFor="bahia">Bahia</label>
      </div>
      <div className="a_todos">
        <a href="#">Ver todos</a>
      </div>
    </div>
  );
};

export default PorEstado;

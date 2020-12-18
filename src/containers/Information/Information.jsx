import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto:</h2>
        </div>

        <div className="information-form">
          <form>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input
              type="text"
              placeholder="Edificio, apartamento, oficina"
              name="apto"
            />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Departamento" name="department" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>

        <div className="information-buttons">
          <div className="information-back">Regresar</div>

          <div className="information-next">Pagar</div>
        </div>
      </div>

      <div className="information-sidebar">
        <h3>Pedido:</h3>
        <div className="information-item">
          <div className="information-element">
            <h4>
              Item name <span>$10</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

import React from 'react';
import './Checkout.css';

import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Lista de deseos:</h3>

        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>

          <button type="button">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>

      <div className="checkout-sidebar">
        <h3>Valor total: $10</h3>
        <Link to={Routes.information.path}>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;

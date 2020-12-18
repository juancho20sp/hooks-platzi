import React, { useContext } from 'react';
import { AppContext } from '../../context';

const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">Botón de pago con paypal</div>
      </div>
    </div>
  );
};

export default Payment;

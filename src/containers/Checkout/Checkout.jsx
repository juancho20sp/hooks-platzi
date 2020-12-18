import React, { useContext } from 'react';
import './Checkout.css';

import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';

import { AppContext } from '../../context';

const Checkout = () => {
  // Treaemos el estado global
  const { state, removeFromCart } = useContext(AppContext);

  // Traemos el carrito del estado global
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;

    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de deseos:</h3>
        ) : (
          <h3>No hay productos en el carrito...</h3>
        )}

        {cart.map((item) => (
          <div className="checkout-item">
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>

            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>{`Valor total: $ ${handleSumTotal()}`}</h3>
          <Link to={Routes.information.path}>
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React, { useContext } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';

import { AppContext } from '../../context';

const Header = () => {
  // Traemos el estado global
  const { state } = useContext(AppContext);

  // Traemos el carrito del estado global
  const { cart } = state;

  return (
    <div className="header">
      <h1 className="header-title">
        <Link to={Routes.home.path}>PlatziConf Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to={Routes.checkout.path}>
          <i className="fas fa-shopping-basket"></i>
        </Link>

        {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;

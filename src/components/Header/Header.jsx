import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <Link to={Routes.home.path}>PlatziConf Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to={Routes.checkout.path}>
          <i className="fas fa-shopping-basket"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;

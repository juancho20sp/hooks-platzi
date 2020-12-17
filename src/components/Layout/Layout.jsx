import React from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

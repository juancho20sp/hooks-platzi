import React from 'react';
import './Home.css';
import initialState from '../../initialState';

// import { Products } from '../../components';
import Products from '../../components/Products/Products';

const Home = () => {
  return (
    <div className="home">
      <Products products={initialState.products}></Products>
    </div>
  );
};

export default Home;

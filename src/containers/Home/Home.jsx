import React from 'react';
import './Home.css';
import initialState from '../../initialState';

import { Products } from '../../components';

const Home = () => {
  return (
    <div className="home">
      <Products></Products>
    </div>
  );
};

export default Home;

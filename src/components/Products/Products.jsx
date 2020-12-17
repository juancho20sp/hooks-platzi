import React from 'react';
import './Products.css';

import { Product } from '../';

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

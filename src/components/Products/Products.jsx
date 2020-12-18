import React, { useContext } from 'react';
import './Products.css';

import { Product } from '../';

import { AppContext } from '../../context';

const Products = () => {
  // Traemos el estado del AppContext
  const { state, addToCart } = useContext(AppContext);

  // Traemos los productos del estado
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

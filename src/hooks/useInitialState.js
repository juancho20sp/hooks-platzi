import { useState, useEffect } from 'react';
import axios from 'axios';

import initialState from '../initialState';

const API = 'http://localhost:1337/products';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  // Traemos los productos
  useEffect(async () => {
    const response = await axios(API);

    setProducts(response.data);
  }, []);

  // Añadir al carrito
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  //   Eliminar del carrito
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  // Agregar al comprador
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  //  Agregar order
  const addNewOrder = (payload) => {
    setState({
      ...state,
      order: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    products,
  };
};

export default useInitialState;

import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

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
  };
};

export default useInitialState;

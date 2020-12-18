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

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;

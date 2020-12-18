import React, { useContext } from 'react';
import { AppContext } from '../../context';

import { useHistory } from 'react-router-dom';
import Routes from '../../routes/routes';

// Paypal
import { PayPalButton } from 'react-paypal-button';

const Payment = () => {
  const history = useHistory();

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  // Opciones de Paypal
  const paypalOptions = {
    clientId:
      'AYDgnQ81oan7mSprXcMtpfXo8F7ZhQjhslKbZ1_4ENqXAAzLU155cupiWjMcwZfnl_2TY3JofHF0FxHy',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;

    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  // Estado de la operación
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);

      history.push(Routes.success.path);
    }
  };

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Payment started')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(cancel)}
          ></PayPalButton>
        </div>
      </div>
    </div>
  );
};

export default Payment;

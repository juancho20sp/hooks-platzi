import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { Map } from '../../components';
import { useGoogleAddress } from '../../hooks';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const location = useGoogleAddress(buyer[0].address);
  console.log(location);

  return (
    <div className="success">
      <div className="success-content">
        <h2>{`Gracias por tu compra, ${buyer[0].name}`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>

        <div className="success-map">
          <Map data={location}></Map>
        </div>
      </div>
    </div>
  );
};

export default Success;

import React, { useRef, useContext } from 'react';
import './Information.css';

import { Link, useHistory } from 'react-router-dom';
import Routes from '../../routes/routes';

import { AppContext } from '../../context';

const Information = () => {
  const history = useHistory();

  // Traemos el estado
  const { state, addToBuyer } = useContext(AppContext);

  // Traemos el carrito
  const { cart } = state;

  // Referencia para el formulario
  const form = useRef(null);

  const handleSubmit = () => {
    // Capturamos la información del formulario
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    // console.log(buyer);

    addToBuyer(buyer);

    history.push(Routes.payment.path);
  };

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto:</h2>
        </div>

        <div className="information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input
              type="text"
              placeholder="Edificio, apartamento, oficina"
              name="apto"
            />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Departamento" name="department" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>

        <div className="information-buttons">
          <Link to={Routes.checkout.path}>
            <div className="information-back">Regresar</div>
          </Link>

          <div className="information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>

      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="information-item" key={item.id}>
            <div className="information-element">
              <h4>
                {item.title} <span>${item.price}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;

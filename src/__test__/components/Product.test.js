import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product/Product';

describe('<Product/>', () => {
  test('Render de product', () => {
    const product = shallow(
      <ProviderMock>
        <Product></Product>
      </ProviderMock>
    );

    expect(product.length).toEqual(1);
  });

  test('Comprobar el botón de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        ></Product>
      </ProviderMock>
    );

    wrapper.find('button'), simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

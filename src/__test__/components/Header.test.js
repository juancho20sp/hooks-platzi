import React from 'react';
import { mount, shallow } from 'enzyme';
import providerMock from '../../__mocks__/providerMock';

import Header from '../../components/Header/Header';

describe('<Header/>', () => {
  test('Render del Header', () => {
    const header = shallow(
      <providerMock>
        <Header></Header>
      </providerMock>
    );

    //   Si se montó el componente
    expect(header.length).toEqual(1);
  });

  test('Render del título', () => {
    const header = mount(
      <providerMock>
        <Header></Header>
      </providerMock>
    );

    expect(header.find('.header-title').text()).toEqual('Platzi Store');
  });
});

import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer/Footer';

describe('<Footer/>', () => {
  test('Render del componente Footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });

  test('Render del título', () => {
    const footer = mount(<Footer></Footer>);
    expect(footer.find('.footer-title').text()).toEqual('Platzi Conf Merch');
  });
});

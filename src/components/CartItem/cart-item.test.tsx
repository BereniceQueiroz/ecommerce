import React from 'react';

import theme from '@/styles/themes';
import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';

import {CartItem} from './cart-item';

import '@testing-library/jest-dom';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('CartItem', () => {
  const item = {
    id: '1',
    image: 'image-url',
    description: 'Produto',
    title: 'Nome',
    price: 1000,
  };
  const quantity = 2;
  const removeItem = vi.fn();
  const increment = vi.fn();
  const decrement = vi.fn();

  it('should render component with item details', () => {
    const {debug} = renderWithTheme(
      <CartItem
        item={item}
        quantity={quantity}
        removeItem={removeItem}
        increment={increment}
        decrement={decrement}
      />,
    );

    debug();
  });
});

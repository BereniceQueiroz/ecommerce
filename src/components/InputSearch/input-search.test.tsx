import theme from '@/styles/themes';
import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';

import {InputSearch} from './input-search';

const onSearch = vi.fn();

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: InputSearch', () => {
  it('should be render component with debug', () => {
    const {debug} = renderWithTheme(<InputSearch onSearch={onSearch} />);

    debug();
  });

  it('should be render component', () => {
    const wrapper = renderWithTheme(<InputSearch onSearch={onSearch} />);

    expect(wrapper.getByPlaceholderText('Procure um produto'));
  });
});

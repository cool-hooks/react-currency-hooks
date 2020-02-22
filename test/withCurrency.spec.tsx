import React from 'react';
import { render } from '@testing-library/react';

import { withCurrency } from '../src';

const App = ({ gbp }: any) => {
  return <p>{gbp}</p>;
};

const rates = {
  GBP: 0.92,
  EUR: 1.0,
  CHF: 1.08,
  USD: 1.12
};

const AppHOC = withCurrency(App as any, 200, {
  from: 'USD',
  to: ['GBP'],
  base: 'EUR',
  rates
});

describe('withCurrency', () => {
  it('should', () => {
    const { container } = render(<AppHOC />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        164.28571428571428
      </p>
    `);
  });
});

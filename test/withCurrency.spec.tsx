import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withCurrency } from '../src/withCurrency';

class App extends Component {
  render() {
    return <p></p>;
  }
}

const rates = {
  GBP: 0.92,
  EUR: 1.0,
  CHF: 1.08,
  USD: 1.12
};

const AppHOC = withCurrency(App, 200, {
  from: 'USD',
  to: 'GBP',
  base: 'EUR',
  rates
});

describe('withCurrency', () => {
  const {} = render(<AppHOC />);

  it('should', () => {});
});

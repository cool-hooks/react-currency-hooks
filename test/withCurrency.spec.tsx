import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withCurrency } from '../src';

const rates = {
  GBP: 0.92,
  EUR: 1.0,
  CHF: 1.08,
  USD: 1.12
};

describe('withCurrency usage with functional component', () => {
  const FunctionalComponent = ({ convert }: any) => {
    const value = convert(200, {
      from: 'USD',
      to: 'GBP',
      base: 'EUR',
      rates
    });

    return <p>{value}</p>;
  };

  const FunctionalComponentHOC = withCurrency(FunctionalComponent);

  it('should render converted value', () => {
    const { container } = render(<FunctionalComponentHOC />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        164.28571428571428
      </p>
    `);
  });
});

describe('withCurrency usage with class component', () => {
  class ClassComponent extends Component<any> {
    render() {
      const { convert } = this.props;

      const value = convert(200, {
        from: 'USD',
        to: 'GBP',
        base: 'EUR',
        rates
      });

      return <p>{value}</p>;
    }
  }

  const ClassComponentHOC = withCurrency(ClassComponent);

  it('should render converted value', () => {
    const { container } = render(<ClassComponentHOC />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        164.28571428571428
      </p>
    `);
  });
});

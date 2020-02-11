import React from 'react';

import { useCurrency } from './useCurrency';

import { Options } from './interfaces/Options';

export const withCurrency = (
  WrappedComponent: React.ComponentClass,
  amount: number,
  options: Options
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useCurrency(amount, options)} />
);

import React from 'react';

import { useCurrency } from './useCurrency';

export const withCurrency = (WrappedComponent: React.ComponentType<any>) => (
  props: React.ComponentProps<any>
) => <WrappedComponent {...props} currency={useCurrency} />;

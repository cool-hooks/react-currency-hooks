import { useState, useEffect } from 'react';

import { hasKey } from './helpers/hasKey';

import { Options } from './interfaces/Options';

import type { Rates } from './types/rates';

export const useCurrency = (amount: number, options: Options) => {
  const { from, to, base, rates, keepPrecision = true } = options;

  const [conversion, setConversion] = useState<number | Rates | undefined>(
    to instanceof Array ? {} : undefined
  );

  const getRate = (to: string) => {
    if (from === base && hasKey(rates, to)) {
      return rates[to];
    }

    if (to === base && hasKey(rates, from)) {
      return 1 / rates[from];
    }

    if (hasKey(rates, from) && hasKey(rates, to)) {
      return rates[to] * (1 / rates[from]);
    }

    throw new Error(
      '`rates` object does not contain either `from` or `to` currency!'
    );
  };

  const convert = (to: string) => {
    const convertedValue = amount * 100 * getRate(to);

    return (keepPrecision ? convertedValue : Math.round(convertedValue)) / 100;
  };

  useEffect(() => {
    if (to instanceof Array) {
      const converted: Rates = {};

      to.map((currency) => {
        converted[currency.toLowerCase()] = convert(currency);
      });

      setConversion(converted);
    } else if (typeof to === 'string') {
      setConversion(convert(to));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return conversion;
};

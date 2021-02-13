import { useState, useEffect, useCallback } from 'react';

import { hasKey } from './helpers/hasKey';

import { Options } from './interfaces/Options';

import type { Rates } from './types/rates';

export const useCurrency = (amount: number, options: Options) => {
  const { from, to, base, rates, keepPrecision = true } = options;

  const [conversion, setConversion] = useState<number | Rates | undefined>(
    to instanceof Array ? {} : undefined
  );

  const getRate = useCallback(
    (to: string) => {
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
    },
    [base, from, rates]
  );

  const convert = useCallback(
    (to: string) => {
      const convertedValue = amount * 100 * getRate(to);

      return (
        (keepPrecision ? convertedValue : Math.round(convertedValue)) / 100
      );
    },
    [amount, getRate, keepPrecision]
  );

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

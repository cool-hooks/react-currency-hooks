import { useCallback } from 'react';

import { hasKey } from './helpers/hasKey';

import { Options } from './interfaces/Options';

import type { Rates } from './types/rates';

type ConvertCurrencyCallback = (
  amount: number,
  options?: Options
) => number | Record<string, number> | undefined;

export const useCurrency = (rootOptions?: Options) => {
  return useCallback<ConvertCurrencyCallback>(
    (amount, options) => {
      const { from, to, base, rates, keepPrecision = true } = {
        ...rootOptions,
        ...options,
      };

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

      // TODO rename function
      const convert = (to: string) => {
        const convertedValue = amount * 100 * getRate(to);

        return (
          (keepPrecision ? convertedValue : Math.round(convertedValue)) / 100
        );
      };

      // TODO refactor
      if (to instanceof Array) {
        const converted: Rates = {};

        to.map((currency) => {
          converted[currency.toLowerCase()] = convert(currency);
        });

        return converted;
      } else if (typeof to === 'string') {
        return convert(to);
      }

      return undefined;
    },
    [rootOptions]
  );
};

import { useState, useEffect } from 'react';

import { hasKey } from './helpers/hasKey';

import { Options } from './interfaces/Options';

import { Conversion } from './types/conversion';

export const useCurrency = (
  amount: number,
  { from, to, base, rates }: Options
) => {
  const [conversion, setConversion] = useState<number | Conversion | undefined>(
    to instanceof Array ? {} : undefined
  );

  useEffect(() => {
    const convert = (to: string) => {
      const getRate = () => {
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

      return (amount * 100 * getRate()) / 100;
    };

    if (to instanceof Array) {
      const converted: Conversion = {};

      to.map(currency => {
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

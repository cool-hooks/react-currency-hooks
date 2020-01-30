import { hasKey } from './helpers/hasKey';

import { Options } from './interfaces/Options';

export const useCurrency = (
  amount: number,
  { from, to, base, rates }: Options
) => {
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

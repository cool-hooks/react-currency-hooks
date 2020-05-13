import { Rates } from '../types/rates';

export const hasKey = <T>(
  obj: Rates,
  key: string | number | symbol
): key is keyof T => {
  return key in obj;
};

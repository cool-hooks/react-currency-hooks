import { Rates } from '../types/rates';

export interface Options {
  from: string;
  to: string;
  base: string;
  rates: Rates;
}

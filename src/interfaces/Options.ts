import type { Rates } from '../types/rates';

export interface Options {
  readonly from: string;
  readonly to: string | string[];
  readonly base: string;
  readonly rates: Readonly<Rates>;
  readonly keepPrecision?: boolean;
}

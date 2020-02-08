import { Options } from './interfaces/Options';
import { Rates } from './types/rates';
export declare const useCurrency: (amount: number, { from, to, base, rates }: Options) => number | Rates | undefined;

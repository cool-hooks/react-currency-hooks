import { Options } from './interfaces/Options';
import { Conversion } from './types/conversion';
export declare const useCurrency: (amount: number, { from, to, base, rates }: Options) => number | Conversion | undefined;

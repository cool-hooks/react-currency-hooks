import { Options } from './interfaces/Options';
export declare const useCurrency: (amount: number, { from, to, base, rates, keepPrecision }: Options) => number | Record<string, number> | undefined;

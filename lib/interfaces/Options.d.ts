import { Rates } from '../types/rates';
export interface Options {
    readonly from: string;
    readonly to: string;
    readonly base: string;
    readonly rates: Rates;
}

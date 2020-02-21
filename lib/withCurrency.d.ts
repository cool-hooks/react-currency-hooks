import React from 'react';
import { Options } from './interfaces/Options';
export declare const withCurrency: (WrappedComponent: React.ComponentClass<{}, any>, amount: number, options: Options) => (props: any) => JSX.Element;
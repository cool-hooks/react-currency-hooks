# [react-currency-hooks](https://github.com/jb1905/react-currency-hooks)

[![NPM version](http://img.shields.io/npm/v/react-currency-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-currency-hooks)
[![NPM downloads](http://img.shields.io/npm/dm/react-currency-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-currency-hooks)

## About
Currency converter React hook

## How to Install
First, install the library in your project by npm:
```sh
$ npm install react-currency-hooks
```

Or Yarn:
```sh
$ yarn add react-currency-hooks
```

## Getting Started
#### Params
Name | Type | Default | Description
-|-|-|-
**amount** | number | ` ` | Amount of money to convert
**options** | {} | ` ` | Convertion options

#### Options
Name | Type | Default | Description
-|-|-|-
**from** | string | ` ` | Currency to be converted
**to** | string or string[] | ` ` | The currency to which it is converted
**base** | string | ` ` | Base currency
**rates** | Rates | `{}` | Currency rates

#### Returned Values
Type | Description
-|-
number or object with currencies passed in `to` | Converted value

#### Example
**`useCurrency` hook:**
```js
import React from 'react';
import { useCurrency } from 'react-currency-hooks';

const App = () => {
  const rates = {
    GBP: 0.92,
    EUR: 1.00,
    CHF: 1.08,
    USD: 1.12
  };

  /*
   * 1. With single `to` value
   */
  const currency = useCurrency(200, {
    from: 'USD',
    to: 'CHF',
    base: 'EUR',
    rates
  });
  
  return (
    <p>USD to CHF: {currency}</p>
  );

  /*
   * 2. With multiple `to` values
   */
  const { chf, gbp } = useCurrency(200, {
    from: 'USD',
    to: ['CHF', 'GBP'],
    base: 'EUR',
    rates
  });
  
  return (
    <>
      <p>USD to CHF: {chf}</p>
      <p>USD to GBP: {gbp}</p>
    </>
  );
};

export default App;
```

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada

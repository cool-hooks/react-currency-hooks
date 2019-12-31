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
**• Import hook in React application file:**
```js
import { useCurrency } from 'react-currency-hooks';
```

#### Options
Name | Type | Default | Description
-|-|-|-
**amount** | number | ` ` | Amount of money to convert

#### Returned Values
Name | Type | Description
-|-|-
**** | number | Converted value

## Example
```js
import React from 'react';
import { useCurrency } from 'react-viewport-hooks';

const App = () => {
  const currency = useCurrency(200, {
    from: 'USD',
    to: 'CHF',
    base: 'EUR',
    rates
  });
  
  return (
    <p>USD to CHF: {currency}</p>
  );
}

export default App;
```

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada

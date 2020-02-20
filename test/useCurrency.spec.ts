import { renderHook } from '@testing-library/react-hooks';

import { useCurrency } from '../src/useCurrency';

describe('useCurrency', () => {
  const rates = {
    GBP: 0.92,
    EUR: 1.0,
    CHF: 1.08,
    USD: 1.12
  };

  it('should return single `to` value', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: 'EUR',
      rates
    };

    const { result } = renderHook(() => useCurrency(200, options));

    expect(result.current).toBe(192.85714285714286);
  });

  it('should return 2 `to` values', () => {
    const options = {
      from: 'USD',
      to: ['CHF', 'GBP'],
      base: 'EUR',
      rates
    };

    const { result } = renderHook(() => useCurrency(200, options));

    expect(result.current).toMatchObject({
      chf: 192.85714285714286,
      gbp: 164.28571428571428
    });
  });

  it('should return single `to` value from hook with the same `base` and `from` rates', () => {
    const options = {
      from: 'EUR',
      to: 'CHF',
      base: 'EUR',
      rates
    };

    const { result } = renderHook(() => useCurrency(200, options));

    expect(result.current).toBe(216);
  });

  it('should return single `to` value from hook with the same `base` and `to` rates', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: 'CHF',
      rates
    };

    const { result } = renderHook(() => useCurrency(200, options));

    expect(result.current).toBe(178.57142857142856);
  });

  it('should return single `to` value from hook without `base` rate', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: '',
      rates
    };

    const { result } = renderHook(() => useCurrency(200, options));

    expect(result.current).toBe(192.85714285714286);
  });

  // it('should throw error', () => {
  //   const options = {
  //     from: '',
  //     to: '',
  //     base: 'CHF',
  //     rates
  //   };

  //   const { result } = renderHook(() => useCurrency(200, options));

  //   expect(result.error.message).toThrow(
  //     Error('`rates` object does not contain either `from` or `to` currency!')
  //   );
  // });
});

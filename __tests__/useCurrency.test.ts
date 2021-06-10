import { renderHook } from '@testing-library/react-hooks';

import { useCurrency } from '../src';

// TODO test different amount
// TODO test root options
describe('useCurrency', () => {
  const rates = {
    GBP: 0.92,
    EUR: 1.0,
    CHF: 1.08,
    USD: 1.12,
  };

  it('should return single `to` value', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: 'EUR',
      rates,
    };

    const { result } = renderHook(() => useCurrency());

    expect(result.current(200, options)).toBe(192.85714285714286);
  });

  it('should return 2 `to` values', () => {
    const options = {
      from: 'USD',
      to: ['CHF', 'GBP'],
      base: 'EUR',
      rates,
    };

    const { result } = renderHook(() => useCurrency());

    expect(result.current(200, options)).toMatchObject({
      chf: 192.85714285714286,
      gbp: 164.28571428571428,
    });
  });

  it('should return value rounded to 2 places', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: 'EUR',
      rates,
      keepPrecision: false,
    };

    const { result } = renderHook(() => useCurrency());

    expect(result.current(200, options)).toBe(192.86);
  });

  it('should return single `to` value from hook with the same `base` and `from` rates', () => {
    const options = {
      from: 'EUR',
      to: 'CHF',
      base: 'EUR',
      rates,
    };

    const { result } = renderHook(() => useCurrency());

    expect(result.current(200, options)).toBe(216);
  });

  it('should return single `to` value from hook with the same `base` and `to` rates', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: 'CHF',
      rates,
    };

    const { result } = renderHook(() => useCurrency());

    expect(result.current(200, options)).toBe(178.57142857142856);
  });

  it('should return single `to` value from hook without `base` rate', () => {
    const options = {
      from: 'USD',
      to: 'CHF',
      base: '',
      rates,
    };

    const { result } = renderHook(() => useCurrency());

    expect(result.current(200, options)).toBe(192.85714285714286);
  });

  it('should return an error', () => {
    try {
      const options = {
        from: '',
        to: '',
        base: '',
        rates,
      };

      const { result } = renderHook(() => useCurrency());

      result.current(200, options);
    } catch (err) {
      expect(err.message).toBe(
        '`rates` object does not contain either `from` or `to` currency!'
      );
    }
  });
});

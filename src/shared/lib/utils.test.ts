import { describe, expect, test } from 'vitest';
import { calculateAge } from './calculate-age';
import { getFootLabel } from './get-foot-label';

describe('utils', () => {
  describe('calculateAge', () => {
    test('returns age in years format', () => {
      const birthdate = '2000-01-01';
      const result = calculateAge(birthdate);
      expect(result).toBe('26 yrs');
    });
  });

  describe('getFootLabel', () => {
    test('returns "Right" when foot is 1', () => {
      expect(getFootLabel(1)).toBe('Right');
    });

    test('returns "Left" when foot is not 0', () => {
      expect(getFootLabel(0)).toBe('Left');
    });
  });
});

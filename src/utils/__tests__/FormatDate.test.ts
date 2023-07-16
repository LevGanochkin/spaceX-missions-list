import { formatDate } from "../FormatDate"
import {describe, expect, test} from '@jest/globals';

describe('formatDate', () => {
    test('should format the date correctly', () => {
      const formattedDate = formatDate('2022-01-01T00:00:00.000Z');
      expect(formattedDate).toBe('1/1/2022');
    });
  
    test('should handle different date formats', () => {
      const formattedDate = formatDate('2022-12-31T00:00:00.000Z');
      expect(formattedDate).toBe('12/31/2022');
    });
  
    test('should handle invalid date strings', () => {
      const formattedDate = formatDate('invalid-date');
      expect(formattedDate).toBe('Invalid Date');
    });
  });
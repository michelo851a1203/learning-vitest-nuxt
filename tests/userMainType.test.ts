import { describe, test, expect } from 'vitest'
import { mainFormValidator } from '~/types/userMainType'
import * as zod from 'zod';

describe('mainFormValidator', () => {
  test('is valid', () => {
    const mainData = {
      email: '123@gmail.com',
      password: 'hello',
    }
    const result = mainFormValidator.safeParse(mainData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toStrictEqual(mainData);
    }
  });

  test('email not format', () => {
    const mainData = {
      email: 'hello',
      password: 'hello',
    }

    const result = mainFormValidator.safeParse(mainData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("email");
      expect(result.error.issues[0].code).toBe(zod.ZodIssueCode.invalid_string);
      expect(result.error.issues[0].message).toEqual('email format');
    }
  });


  test('email required', () => {
    const mainData = {
      email: '',
      password: 'hello',
    }

    const result = mainFormValidator.safeParse(mainData);
    expect(result.success).toBe(false);
    if (!result.success) {
      // email format
      expect(result.error.issues[0].path[0]).toBe("email");
      expect(result.error.issues[0].code).toBe(zod.ZodIssueCode.invalid_string);
      expect(result.error.issues[0].message).toEqual('email format');

      // email required
      expect(result.error.issues[1].path[0]).toBe("email");
      expect(result.error.issues[1].code).toBe(zod.ZodIssueCode.too_small);
      expect(result.error.issues[1].message).toEqual('email required');
    }
  });

  test('password required', () => {
    const mainData = {
      email: '123@gmail.com',
      password: '',
    }

    const result = mainFormValidator.safeParse(mainData);
    expect(result.success).toBe(false);
    if (!result.success) {
      // password required
      expect(result.error.issues[0].path[0]).toBe("password");
      expect(result.error.issues[0].code).toBe(zod.ZodIssueCode.too_small);
      expect(result.error.issues[0].message).toEqual('password required');
    }
  });
})


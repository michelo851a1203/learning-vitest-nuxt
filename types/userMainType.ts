import * as zod from 'zod';

export const mainFormValidator = zod.object({
  email: zod.string()
    .email('email format')
    .min(1, 'email required'),
  password: zod.string()
    .min(1, 'password required'),
});

import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[+\d\s\-()+]+$/, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

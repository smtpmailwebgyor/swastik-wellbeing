'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, type LeadFormValues } from '@/lib/schema/lead';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface LeadFormProps {
  submitLabel: string;
  privacyNote: string;
}

const inputBase =
  'block w-full rounded-sm border bg-white/5 px-4 py-3 text-white placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-0 transition-colors';

const labelBase = 'block mb-1.5 text-sm font-medium text-brand-200';

const errorBase = 'mt-1.5 text-sm text-red-400';

export function LeadForm({ submitLabel, privacyNote }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  async function onSubmit(data: LeadFormValues) {
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed. Please try again.');
    }
    // Without an endpoint configured, submission succeeds silently in dev
  }

  if (isSubmitSuccessful) {
    return (
      <div role="status" aria-live="polite" className="py-8 text-center">
        <p className="font-display text-2xl text-white">Thank you!</p>
        <p className="mt-2 text-brand-300">
          We will be in touch within 24 hours to confirm your session.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Discovery session request"
    >
      <div className="grid gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className={labelBase}>
            Full Name <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Your full name"
            className={cn(
              inputBase,
              errors.name
                ? 'border-red-500 focus:ring-red-400'
                : 'border-white/20 hover:border-white/40'
            )}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errorBase}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            Email Address <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="you@example.com"
            className={cn(
              inputBase,
              errors.email
                ? 'border-red-500 focus:ring-red-400'
                : 'border-white/20 hover:border-white/40'
            )}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={errorBase}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone Number <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="+91 XXXXX XXXXX"
            className={cn(
              inputBase,
              errors.phone
                ? 'border-red-500 focus:ring-red-400'
                : 'border-white/20 hover:border-white/40'
            )}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className={errorBase}>
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message (optional) */}
        <div>
          <label htmlFor="message" className={labelBase}>
            What brings you here?{' '}
            <span className="text-brand-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            aria-invalid={!!errors.message}
            placeholder="Briefly describe what you are experiencing…"
            className={cn(
              inputBase,
              'resize-none',
              errors.message
                ? 'border-red-500 focus:ring-red-400'
                : 'border-white/20 hover:border-white/40'
            )}
            {...register('message')}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gold-500 text-brand-900 hover:bg-gold-400 focus-visible:ring-gold-400 focus-visible:ring-offset-brand-800 disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : submitLabel}
        </Button>

        <p className="text-center text-xs text-brand-400">{privacyNote}</p>
      </div>
    </form>
  );
}

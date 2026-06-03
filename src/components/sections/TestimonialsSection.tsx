'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimateIn } from '@/components/ui/AnimateIn';
import type { Testimonial, ProgramData } from '@/types';

interface TestimonialsSectionProps {
  data: ProgramData['testimonials'];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-1"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          className={`h-3.5 w-3.5 ${i < rating ? 'text-gold-500' : 'text-brand-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <motion.figure
      className="relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-white/[0.07] shadow-lg backdrop-blur-md"
      whileHover={{ y: -5, borderColor: 'rgba(196,150,58,0.25)', backgroundColor: 'rgba(255,255,255,0.11)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* Gold left-border accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold-400 to-gold-600"
      />

      <div className="flex flex-col gap-5 p-8 pl-10">
        {/* Decorative opening quote */}
        <div
          aria-hidden="true"
          className="font-display text-5xl leading-none text-gold-400/60 select-none"
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote className="flex-1">
          <p className="font-display text-lg leading-relaxed text-white/90">
            {item.quote}
          </p>
        </blockquote>

        {/* Author row */}
        <figcaption className="flex items-center gap-4 border-t border-white/10 pt-5">
          {/* Initials avatar */}
          <div
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/25 font-sans text-xs font-semibold uppercase tracking-wider text-gold-300"
          >
            {getInitials(item.name)}
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-semibold text-white truncate">{item.name}</p>
            <p className="mt-0.5 text-sm text-brand-300 truncate">{item.role}</p>
          </div>

          <div className="shrink-0">
            <StarRating rating={item.rating} />
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-brand-900 py-20 lg:py-28"
    >
      {/* Decorative background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-brand-700/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gold-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <AnimateIn>
          <SectionHeader
            id="testimonials-heading"
            heading={data.heading}
            subtitle={data.subtitle}
            light
          />
        </AnimateIn>

        <ul
          className="mt-14 grid gap-6 md:grid-cols-3"
          aria-label="Client testimonials"
        >
          {data.items.map((item, index) => (
            <li key={item.id}>
              <AnimateIn delay={index * 0.12}>
                <TestimonialCard item={item} />
              </AnimateIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

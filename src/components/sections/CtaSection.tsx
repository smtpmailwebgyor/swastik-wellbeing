'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import type { ProgramData } from '@/types';

interface CtaSectionProps {
  data: ProgramData['cta'];
}

export function CtaSection({ data }: CtaSectionProps) {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-brand-950 py-20 lg:py-28"
    >
      {/* Layered background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-700/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-700/25 blur-3xl" />
      </div>

      {/* Top gold divider */}
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <SectionHeader
              id="cta-heading"
              heading={data.heading}
              subtitle={data.subtitle}
              light
            />
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mt-10">
              {/* Floating glow ring behind button */}
              <div className="relative inline-block">
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gold-500/20 blur-xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Button
                    href="#lead-form"
                    size="lg"
                    className="relative bg-gold-500 text-brand-900 hover:bg-gold-400 shadow-[0_4px_24px_rgba(196,150,58,0.3)] hover:shadow-[0_4px_40px_rgba(196,150,58,0.55)] transition-all duration-300 focus-visible:ring-gold-400 focus-visible:ring-offset-brand-950"
                  >
                    {data.buttonLabel}
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

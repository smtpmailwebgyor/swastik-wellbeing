'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimateIn, StaggerIn, StaggerChild } from '@/components/ui/AnimateIn';
import type { Benefit, ProgramData } from '@/types';

interface BenefitsSectionProps {
  data: ProgramData['benefits'];
}

function BenefitCard({ item }: { item: Benefit }) {
  return (
    <motion.div
      className="group h-full rounded-sm border border-white/10 bg-white/[0.07] p-8 shadow-lg backdrop-blur-md"
      whileHover={{
        y: -6,
        borderColor: 'rgba(196,150,58,0.35)',
        backgroundColor: 'rgba(255,255,255,0.12)',
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div
        aria-hidden="true"
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/20 text-gold-400"
      >
        <span className="text-xl leading-none">◈</span>
      </div>
      <h3 className="mb-2 font-display text-xl text-white">{item.title}</h3>
      <p className="text-sm leading-relaxed text-brand-200">{item.description}</p>
    </motion.div>
  );
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative overflow-hidden bg-brand-900 py-20 lg:py-28"
    >
      {/* Layered background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-brand-700/30 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-64 w-[900px] -translate-x-1/2 rounded-full bg-brand-800/50 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <AnimateIn>
          <SectionHeader
            id="benefits-heading"
            heading={data.heading}
            subtitle={data.subtitle}
            light
          />
        </AnimateIn>

        <StaggerIn
          staggerDelay={0.1}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.items.map((item) => (
            <StaggerChild key={item.id}>
              <BenefitCard item={item} />
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

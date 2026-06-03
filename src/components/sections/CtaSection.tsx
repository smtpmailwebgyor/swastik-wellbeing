import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
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
          <SectionHeader
            id="cta-heading"
            heading={data.heading}
            subtitle={data.subtitle}
            light
          />

          <div className="mt-10">
            <Button
              href="#lead-form"
              size="lg"
              className="bg-gold-500 text-brand-900 hover:bg-gold-400 shadow-[0_4px_24px_rgba(196,150,58,0.3)] hover:shadow-[0_4px_32px_rgba(196,150,58,0.45)] transition-all duration-300 focus-visible:ring-gold-400 focus-visible:ring-offset-brand-950"
            >
              {data.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { HeroParallaxBg } from './HeroParallaxBg';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { cn } from '@/lib/utils';
import type { ProgramData } from '@/types';

interface HeroSectionProps {
  data: ProgramData['hero'];
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden bg-brand-950"
    >
      <HeroParallaxBg />

      {/* Decorative radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-700/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-800/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-36 text-center sm:px-8 sm:pt-44 lg:px-12 lg:pb-44 lg:pt-56">
        <AnimateIn delay={0.1}>
          <p
            className="mb-5 font-sans text-sm uppercase tracking-[0.28em] text-gold-400"
            aria-hidden="true"
          >
            {data.eyebrow}
          </p>
        </AnimateIn>

        {/* Luxury decorative divider */}
        <AnimateIn delay={0.18}>
          <div
            className="mx-auto mb-8 flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <div className="h-1 w-1 rounded-full bg-gold-400/70" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.28}>
          <h1
            id="hero-heading"
            className="mx-auto max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            {data.headline}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.44}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-200 md:text-xl">
            {data.subheadline}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.58}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="#lead-form"
              size="lg"
              className={cn(
                'bg-gold-500 text-brand-900 hover:bg-gold-400',
                'shadow-[0_4px_24px_rgba(196,150,58,0.35)] hover:shadow-[0_4px_32px_rgba(196,150,58,0.5)]',
                'focus-visible:ring-gold-400 focus-visible:ring-offset-brand-900',
                'transition-all duration-300'
              )}
            >
              {data.primaryCta}
            </Button>
            <Button href="#programme" size="lg" variant="outline-light">
              {data.secondaryCta}
            </Button>
          </div>
        </AnimateIn>

        {/* Scroll indicator */}
        <AnimateIn delay={0.9}>
          <div
            className="mt-16 flex justify-center"
            aria-hidden="true"
          >
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
              <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/50" />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

import { AnimateIn, StaggerIn, StaggerChild } from '@/components/ui/AnimateIn';

const trustPillars = [
  {
    id: 'care',
    icon: '◈',
    title: 'Whole-Person Care',
    body: 'Our programmes address mind, body, and breath together — working at the root of stress rather than managing surface symptoms.',
  },
  {
    id: 'evidence',
    icon: '◈',
    title: 'Evidence-Based Practice',
    body: 'Every protocol draws from peer-reviewed neuroscience, somatic therapy, and clinical mindfulness research — ancient wisdom rigorously validated.',
  },
  {
    id: 'practitioners',
    icon: '◈',
    title: 'Experienced Practitioners',
    body: 'Our practitioners bring advanced certifications and years of dedicated clinical and holistic practice to every client relationship.',
  },
];

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden bg-cream-dark py-20 lg:py-28"
    >
      {/* Subtle background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-brand-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <AnimateIn>
          <div className="mb-14 text-center">
            <p
              id="trust-heading"
              className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-brand-400"
            >
              Why Clients Choose Us
            </p>
            <div
              className="mx-auto flex items-center justify-center gap-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/50" />
              <div className="h-1 w-1 rounded-full bg-gold-400/60" />
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/50" />
            </div>
          </div>
        </AnimateIn>

        <StaggerIn
          staggerDelay={0.12}
          className="grid gap-6 sm:grid-cols-3"
        >
          {trustPillars.map((pillar) => (
            <StaggerChild key={pillar.id}>
              <div className="h-full rounded-sm border border-brand-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-brand-50 text-gold-500"
                >
                  <span className="text-xl leading-none">{pillar.icon}</span>
                </div>
                <h3 className="mb-3 font-display text-xl text-brand-900">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-600">
                  {pillar.body}
                </p>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

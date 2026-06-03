import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'About Us | Swastik Wellbeing',
  description:
    'Meet the team behind Swastik Wellbeing. 15+ years of holistic practice, science-backed methods, and a deep commitment to your lasting transformation.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Swastik Wellbeing',
    description:
      'Our practitioners blend ancient wisdom with modern science to guide your stress-to-strength journey.',
    url: 'https://swastikwellbeing.com/about',
    siteName: 'Swastik Wellbeing',
  },
};

const credentials = [
  {
    id: 'exp',
    icon: '◈',
    title: '15+ Years of Practice',
    description:
      'Our lead practitioners hold advanced certifications in somatic therapy, mindfulness-based stress reduction, and cognitive behavioural coaching.',
  },
  {
    id: 'science',
    icon: '◈',
    title: 'Science-Backed Approach',
    description:
      'Every protocol is grounded in peer-reviewed neuroscience and clinical evidence — ancient wisdom rigorously tested by modern research.',
  },
  {
    id: 'holistic',
    icon: '◈',
    title: 'Whole-Person Focus',
    description:
      'We work at the intersection of mind, body, and breath — addressing root causes, not just surface symptoms.',
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        className="relative flex min-h-[65vh] items-center bg-brand-900"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/about.jpg"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/60 to-brand-950/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/40 via-transparent to-brand-950/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 text-center sm:px-8 lg:px-12 lg:pt-48">
          <AnimateIn delay={0.1}>
            <p
              className="mb-5 font-sans text-sm uppercase tracking-[0.25em] text-gold-400"
              aria-hidden="true"
            >
              Our Story
            </p>
          </AnimateIn>

          {/* Luxury decorative divider */}
          <AnimateIn delay={0.18}>
            <div
              className="mx-auto mb-8 flex items-center justify-center gap-3"
              aria-hidden="true"
            >
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold-400/50" />
              <div className="h-1 w-1 rounded-full bg-gold-400/70" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold-400/50" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.28}>
            <h1
              id="about-heading"
              className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Ancient Wisdom. Modern Science. Lasting Change.
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Philosophy ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-cream py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <AnimateIn variant="fadeLeft">
              <div>
                <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-brand-500">
                  Our Philosophy
                </p>
                <h2
                  id="philosophy-heading"
                  className="font-display text-3xl leading-tight text-brand-900 md:text-4xl lg:text-5xl"
                >
                  Where Tradition Meets Evidence
                </h2>

                {/* Gold accent line */}
                <div
                  className="my-6 h-px w-16 bg-gradient-to-r from-gold-400/70 to-transparent"
                  aria-hidden="true"
                />

                <div className="space-y-4 text-brand-600 leading-relaxed">
                  <p>
                    Swastik Wellbeing was founded on a single conviction: that lasting
                    emotional wellbeing requires more than techniques — it requires a
                    complete shift in how you relate to stress, yourself, and the world
                    around you.
                  </p>
                  <p>
                    We draw from millennia of yogic and Ayurvedic tradition, paired with
                    the latest findings in neuroscience and clinical psychology, to build
                    programmes that are both deeply human and rigorously effective.
                  </p>
                  <p>
                    Every session, every practice, every breath-work module is designed
                    with one purpose: your lasting transformation.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/#lead-form" className="bg-brand-700 text-white hover:bg-brand-800">
                    Begin Your Journey
                  </Button>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeRight" delay={0.15}>
              <div className="relative h-80 overflow-hidden rounded-sm lg:h-[480px]">
                <Image
                  src="/images/about.jpg"
                  alt="Holistic wellness philosophy in practice"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 ring-1 ring-inset ring-brand-900/10 rounded-sm"
                  aria-hidden="true"
                />
                {/* Gold corner accent */}
                <div
                  className="absolute bottom-4 right-4 h-12 w-12 border-b border-r border-gold-400/40"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-4 top-4 h-12 w-12 border-l border-t border-gold-400/40"
                  aria-hidden="true"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── Credentials ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="credentials-heading"
        className="bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <AnimateIn>
            <SectionHeader
              id="credentials-heading"
              heading="Why Our Clients Trust Us"
              subtitle="Qualifications, approach, and commitment — everything you should know before taking the first step."
            />
          </AnimateIn>

          <ul
            className="mt-14 grid gap-6 sm:grid-cols-3"
            aria-label="Our credentials"
          >
            {credentials.map((item, index) => (
              <li key={item.id}>
                <AnimateIn delay={index * 0.1}>
                  <div className="h-full rounded-sm border border-brand-100 bg-cream p-8 transition-shadow duration-300 hover:shadow-md">
                    <div
                      aria-hidden="true"
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-brand-50 text-gold-500"
                    >
                      <span className="text-xl leading-none">{item.icon}</span>
                    </div>
                    <h3 className="mb-2 font-display text-xl text-brand-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-600">
                      {item.description}
                    </p>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-cta-heading"
        className="relative overflow-hidden bg-brand-950 py-20 lg:py-28"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-700/35 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-gold-500/8 blur-3xl" />
        </div>
        <AnimateIn>
          <div className="relative mx-auto max-w-2xl px-6 text-center sm:px-8">
            <h2
              id="about-cta-heading"
              className="font-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl"
            >
              Ready to Begin?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-200">
              Book your complimentary 30-minute discovery session and take the first
              step toward lasting emotional balance.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="/#lead-form"
                size="lg"
                className="bg-gold-500 text-brand-900 hover:bg-gold-400 shadow-[0_4px_24px_rgba(196,150,58,0.3)] hover:shadow-[0_4px_32px_rgba(196,150,58,0.45)] transition-all duration-300 focus-visible:ring-gold-400 focus-visible:ring-offset-brand-950"
              >
                Book Free Consultation
              </Button>
              <Link
                href="/contact"
                className="font-sans text-sm tracking-wide text-white/80 underline underline-offset-4 hover:text-white transition-colors"
              >
                Or contact us directly
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}

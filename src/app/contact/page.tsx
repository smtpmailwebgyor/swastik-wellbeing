import type { Metadata } from 'next';
import Image from 'next/image';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { LeadForm } from '@/components/forms/LeadForm';
import { programData } from '@/content/stress-emotional-balance';

export const metadata: Metadata = {
  title: 'Contact Us | Swastik Wellbeing',
  description:
    'Get in touch with Swastik Wellbeing. Book a free discovery session, ask a question, or find our Bangalore location. We are here to help.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Swastik Wellbeing',
    description:
      'Reach out to book your complimentary discovery session or ask us anything.',
    url: 'https://swastikwellbeing.com/contact',
    siteName: 'Swastik Wellbeing',
  },
};

const { organization } = programData.meta;

const contactDetails = [
  {
    id: 'phone',
    label: 'Phone',
    value: organization.phone,
    href: `tel:${organization.phone}`,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: organization.email,
    href: `mailto:${organization.email}`,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: `https://wa.me/${organization.whatsappNumber}`,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Bangalore, India (Online sessions available)',
    href: undefined,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-heading"
        className="relative flex min-h-[60vh] items-center bg-brand-900"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/contact.jpg"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover object-center"
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
              Get in Touch
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
              id="contact-heading"
              className="mx-auto max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Begin Your Journey Together
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.42}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-200">
              Reach out and a practitioner will respond within 24 hours.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Contact content ───────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-form-heading"
        className="bg-cream py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: contact details */}
            <AnimateIn variant="fadeLeft">
              <div>
                <h2
                  id="contact-form-heading"
                  className="font-display text-3xl text-brand-900 md:text-4xl"
                >
                  How to Reach Us
                </h2>

                {/* Gold accent */}
                <div
                  className="my-5 h-px w-12 bg-gradient-to-r from-gold-400/70 to-transparent"
                  aria-hidden="true"
                />

                <p className="leading-relaxed text-brand-600">
                  We offer in-person sessions in Bangalore and online sessions
                  worldwide. No question is too small — we are here to help you
                  find the right path forward.
                </p>

                <ul className="mt-10 space-y-6" aria-label="Contact information">
                  {contactDetails.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                      <div
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand-600"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-wider text-brand-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="mt-1 font-display text-lg text-brand-800 underline-offset-2 hover:text-brand-600 hover:underline transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-display text-lg text-brand-800">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Hours */}
                <div className="mt-10 rounded-sm border border-brand-100 bg-white p-6">
                  <h3 className="font-display text-xl text-brand-900">
                    Consultation Hours
                  </h3>
                  <dl className="mt-4 space-y-2 text-sm text-brand-600">
                    <div className="flex justify-between">
                      <dt>Monday – Friday</dt>
                      <dd className="font-medium text-brand-800">9 am – 7 pm IST</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Saturday</dt>
                      <dd className="font-medium text-brand-800">10 am – 4 pm IST</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Sunday</dt>
                      <dd className="font-medium text-brand-800">By appointment</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </AnimateIn>

            {/* Right: lead form */}
            <AnimateIn variant="fadeRight" delay={0.15}>
              <div>
                <h2 className="font-display text-3xl text-brand-900 md:text-4xl">
                  Book Your Free Session
                </h2>

                {/* Gold accent */}
                <div
                  className="my-5 h-px w-12 bg-gradient-to-r from-gold-400/70 to-transparent"
                  aria-hidden="true"
                />

                <p className="leading-relaxed text-brand-600">
                  Reserve your complimentary 30-minute discovery session — no
                  obligation, no pressure.
                </p>

                <div className="mt-8 rounded-sm bg-brand-900 p-8 ring-1 ring-white/10 sm:p-10">
                  <LeadForm
                    submitLabel="Claim My Free Session"
                    privacyNote="Your details are safe with us. We will never share your information."
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}

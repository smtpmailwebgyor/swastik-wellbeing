import type { Metadata } from 'next';
import { programData } from '@/content/stress-emotional-balance';
import { pageMetadata } from '@/lib/metadata';
import { organizationSchema, faqSchema } from '@/lib/structured-data';
import {
  HeroSection,
  BenefitsSection,
  ProgramExperienceSection,
  TestimonialsSection,
  TrustSection,
  FaqSection,
  LeadFormSection,
  CtaSection,
} from '@/components/sections';
import { WhatsAppButton } from '@/components/ui';

export const metadata: Metadata = pageMetadata;

export default function Page() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(programData.faqs.items)),
        }}
      />

      <main id="main-content">
        <HeroSection data={programData.hero} />
        <BenefitsSection data={programData.benefits} />
        <ProgramExperienceSection data={programData.program} />
        <TestimonialsSection data={programData.testimonials} />
        <TrustSection />
        <FaqSection data={programData.faqs} />
        <LeadFormSection data={programData.leadForm} />
        <CtaSection data={programData.cta} />
      </main>

      <WhatsAppButton number={programData.meta.organization.whatsappNumber} />
    </>
  );
}

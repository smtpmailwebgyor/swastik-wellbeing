import { SectionHeader } from '@/components/ui/SectionHeader';
import { LeadForm } from '@/components/forms/LeadForm';
import type { ProgramData } from '@/types';

interface LeadFormSectionProps {
  data: ProgramData['leadForm'];
}

export function LeadFormSection({ data }: LeadFormSectionProps) {
  return (
    <section
      id="lead-form"
      aria-labelledby="lead-form-heading"
      className="bg-brand-900 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-xl">
          <SectionHeader
            id="lead-form-heading"
            heading={data.heading}
            subtitle={data.subtitle}
            light
          />

          <div className="mt-10 rounded-sm bg-brand-800/60 p-8 ring-1 ring-white/10 sm:p-10">
            <LeadForm
              submitLabel={data.submitLabel}
              privacyNote={data.privacyNote}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

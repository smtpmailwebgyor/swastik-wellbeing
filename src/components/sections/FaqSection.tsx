import { SectionHeader } from '@/components/ui/SectionHeader';
import type { FAQ, ProgramData } from '@/types';

interface FaqSectionProps {
  data: ProgramData['faqs'];
}

function FaqItem({ item }: { item: FAQ }) {
  return (
    <details className="group border-b border-brand-100 py-5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-brand-900 [&::-webkit-details-marker]:hidden">
        <span className="font-display text-lg">{item.question}</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-4 leading-relaxed text-brand-600">{item.answer}</p>
    </details>
  );
}

export function FaqSection({ data }: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader
          id="faq-heading"
          heading={data.heading}
          subtitle={data.subtitle}
        />

        <div
          className="mx-auto mt-12 max-w-3xl"
          role="list"
          aria-label="Frequently asked questions"
        >
          {data.items.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

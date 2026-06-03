import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimateIn } from '@/components/ui/AnimateIn';
import type { ProgramStep, ProgramData } from '@/types';

interface ProgramExperienceSectionProps {
  data: ProgramData['program'];
}

function Step({ item, isLast }: { item: ProgramStep; isLast: boolean }) {
  return (
    <li className="relative flex gap-6">
      {/* Connector line */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-5 top-12 h-full w-px bg-brand-100"
        />
      )}

      {/* Step number */}
      <div
        aria-hidden="true"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-200 bg-white font-display text-lg font-semibold text-brand-700"
      >
        {item.step}
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="font-display text-xl text-brand-900 md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 leading-relaxed text-brand-600">{item.description}</p>
      </div>
    </li>
  );
}

export function ProgramExperienceSection({ data }: ProgramExperienceSectionProps) {
  return (
    <section
      id="programme"
      aria-labelledby="programme-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
          <AnimateIn variant="fadeLeft">
            <SectionHeader
              id="programme-heading"
              heading={data.heading}
              subtitle={data.subtitle}
              centered={false}
            />
          </AnimateIn>

          <ol
            className="mt-12 space-y-0 lg:mt-0"
            aria-label="Programme steps"
          >
            {data.steps.map((step, index) => (
              <AnimateIn key={step.step} variant="fadeRight" delay={index * 0.12}>
                <Step
                  item={step}
                  isLast={index === data.steps.length - 1}
                />
              </AnimateIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

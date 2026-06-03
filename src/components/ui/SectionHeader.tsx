import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  id,
  eyebrow,
  heading,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
      {eyebrow && (
        <p
          className={cn(
            'font-sans text-sm uppercase tracking-[0.2em] mb-4',
            light ? 'text-gold-400' : 'text-brand-500'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-5xl leading-tight',
          light ? 'text-white' : 'text-brand-900'
        )}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            light ? 'text-brand-200' : 'text-brand-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

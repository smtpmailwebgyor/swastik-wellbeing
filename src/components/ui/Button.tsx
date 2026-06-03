import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-700',
  outline:
    'border-2 border-brand-700 text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-700',
  'outline-light':
    'border-2 border-white/70 text-white hover:bg-white/10 focus-visible:ring-white',
  ghost:
    'text-brand-700 underline-offset-4 hover:underline focus-visible:ring-brand-700',
} as const;

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

const base =
  'inline-flex items-center justify-center font-semibold tracking-wide rounded-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: never;
  };

type ButtonAsAnchor = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as Omit<ButtonAsButton, 'href'>)}
    >
      {children}
    </button>
  );
}

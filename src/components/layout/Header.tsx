'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 12);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-900/95 shadow-sm backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="Swastik Luxury Wellbeing Sanctuary — Home"
          >
            <Image
              src="/images/swastik-logo.webp"
              alt="Swastik Luxury Wellbeing Sanctuary"
              width={130}
              height={48}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-sm tracking-wide transition-colors',
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#lead-form"
              className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-5 py-2.5 font-sans text-sm font-semibold tracking-wide text-brand-900 transition-colors hover:bg-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex flex-col items-center justify-center gap-1.5 p-2 text-white md:hidden"
          >
            <span
              className={cn(
                'block h-0.5 w-6 bg-current transition-all duration-200',
                menuOpen && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-current transition-all duration-200',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-current transition-all duration-200',
                menuOpen && '-translate-y-2 -rotate-45'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-brand-950/98 backdrop-blur-sm md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-6 py-5"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-sm py-3 font-sans text-base transition-colors',
                    pathname === link.href
                      ? 'text-gold-400'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#lead-form"
                className="mt-3 inline-flex items-center justify-center rounded-sm bg-gold-500 py-3 font-sans text-sm font-semibold text-brand-900 hover:bg-gold-400"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

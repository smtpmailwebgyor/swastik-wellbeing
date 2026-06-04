'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const associations = [
  {
    id: 'svaram',
    name: 'SVARAM',
    logo: '/images/associations/logo-01.png',
    width: 140,
    height: 56,
  },
  {
    id: 'salt-cave-asia',
    name: 'Salt Cave Asia',
    logo: '/images/associations/logo-02.png',
    width: 140,
    height: 56,
  },
  {
    id: 's-vyasa',
    name: 'S-VYASA',
    logo: '/images/associations/logo-03.png',
    width: 140,
    height: 56,
  },
  {
    id: 'air-genomix',
    name: 'AIR Genomix',
    logo: '/images/associations/logo-04.png',
    width: 140,
    height: 56,
  },
  {
    id: 'nin',
    name: 'National Institute of Naturopathy',
    logo: '/images/associations/logo-05.png',
    width: 140,
    height: 56,
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...associations, ...associations];

export function AssociationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="associations-heading"
      className="overflow-hidden bg-cream-dark py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p
            id="associations-heading"
            className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-brand-400"
          >
            Our Associations
          </p>
          <h2 className="sr-only">Trusted Associations &amp; Partners</h2>
          <div
            aria-hidden="true"
            className="mx-auto flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/50" />
            <div className="h-1 w-1 rounded-full bg-gold-400/60" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </motion.div>
      </div>

      {/* Infinite marquee — desktop */}
      <div
        className="group hidden overflow-hidden md:block"
        aria-label="Association logos"
      >
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused] px-8">
          {marqueeItems.map((assoc, i) => (
            <div
              key={assoc.id + '-' + i}
              className="flex h-20 w-36 shrink-0 items-center justify-center"
            >
              <Image
                src={assoc.logo}
                alt={assoc.name}
                width={assoc.width}
                height={assoc.height}
                className="max-h-14 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive grid — mobile */}
      <div
        className="mx-auto grid max-w-lg grid-cols-3 gap-8 px-6 md:hidden"
        aria-label="Association logos"
      >
        {associations.map((assoc, i) => (
          <motion.div
            key={assoc.id}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center"
          >
            <Image
              src={assoc.logo}
              alt={assoc.name}
              width={assoc.width}
              height={assoc.height}
              className="max-h-12 w-auto object-contain grayscale opacity-60"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

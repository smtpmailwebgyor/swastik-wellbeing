'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const spaces = [
  {
    id: 'anand-vihar',
    name: 'Anand Vihar',
    tagline: "Where happiness blooms in every corner",
    description:
      'Our healing sessions facility featuring reception, consultation spaces, and the Rasa & Sama global restaurant — where every visit begins with warmth.',
    image: '/images/spaces/anand-vihar.webp',
    alt: 'Anand Vihar — healing and hospitality space at Swastik Wellbeing',
  },
  {
    id: 'sukh-vihar',
    name: 'Sukh Vihar',
    tagline: "Where peace resides in nature's womb",
    description:
      'An eco-conscious retreat with 64 suites and villas, gentle architectural curves, and panoramic hillside backwater views that restore the spirit.',
    image: '/images/spaces/sukh-vihar.webp',
    alt: 'Sukh Vihar — eco-conscious retreat suites at Swastik Wellbeing',
  },
  {
    id: 'ayu-vihar',
    name: 'Ayu Vihar',
    tagline: 'Where health and harmony reside',
    description:
      'Holistic healing combining ancient Ayurveda, hydrotherapy, naturopathy, and halotherapy with modern amenities for complete renewal.',
    image: '/images/spaces/ayu-vihar.webp',
    alt: 'Ayu Vihar — holistic healing centre at Swastik Wellbeing',
  },
  {
    id: 'dhyan-vihar',
    name: 'Dhyan Vihar',
    tagline: 'Where your spirit finds depth and beauty',
    description:
      'A spiritual growth sanctuary featuring an 11,000 sq ft column-less dome with advanced JBL acoustics and the sacred Nakshatra Van zodiac garden.',
    image: '/images/spaces/dhyan-vihar.webp',
    alt: 'Dhyan Vihar — meditation dome and spiritual centre at Swastik Wellbeing',
  },
  {
    id: 'utsav-vihar',
    name: 'Utsav Vihar',
    tagline: 'Where every moment celebrates life',
    description:
      'A cultural performance centre with the 54-ft Sushumna Sthambh, a reflexology path, and an open amphitheatre celebrating infinite possibilities.',
    image: '/images/spaces/utsav-vihar.webp',
    alt: 'Utsav Vihar — cultural amphitheatre and celebration space at Swastik Wellbeing',
  },
];

const AUTOPLAY_INTERVAL = 5500;

const slideIn = { opacity: 0, y: 24 } as const;
const slideVisible = { opacity: 1, y: 0 } as const;

export function SpacesShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const d = dir ?? (index > current ? 1 : -1);
      setDirection(d);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    goTo((current + 1) % spaces.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + spaces.length) % spaces.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = e.clientX - pointerStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    pointerStartX.current = null;
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? '6%' : '-6%', opacity: 0 }),
    center: { x: '0%', opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-6%' : '6%', opacity: 0 }),
  };

  const space = spaces[current];

  return (
    <section
      id="spaces"
      ref={sectionRef}
      aria-labelledby="spaces-heading"
      className="relative overflow-hidden bg-brand-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="relative h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background image with parallax */}
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={space.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: EASE }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-[-8%]"
              style={{ y: parallaxY }}
            >
              <Image
                src={space.image}
                alt={space.alt}
                fill
                priority={current === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/50 to-brand-950/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-950/70 via-transparent to-transparent"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={space.id + '-content'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 0.1 }}
                className="max-w-2xl"
              >
                <motion.p
                  id="spaces-heading"
                  initial={slideIn}
                  animate={slideVisible}
                  transition={{ duration: 0.65, delay: 0, ease: EASE }}
                  className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-gold-400"
                >
                  Spaces at Swastik Wellbeing
                </motion.p>

                <motion.div
                  initial={slideIn}
                  animate={slideVisible}
                  transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
                  aria-hidden="true"
                  className="mb-6 flex items-center gap-3"
                >
                  <div className="h-px w-10 bg-gradient-to-r from-gold-400/70 to-transparent" />
                  <div className="h-1 w-1 rounded-full bg-gold-400/80" />
                </motion.div>

                <motion.h2
                  initial={slideIn}
                  animate={slideVisible}
                  transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
                  className="mb-3 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl"
                >
                  {space.name}
                </motion.h2>

                <motion.p
                  initial={slideIn}
                  animate={slideVisible}
                  transition={{ duration: 0.65, delay: 0.24, ease: EASE }}
                  className="mb-4 font-display text-xl italic text-gold-300 sm:text-2xl"
                >
                  {space.tagline}
                </motion.p>

                <motion.p
                  initial={slideIn}
                  animate={slideVisible}
                  transition={{ duration: 0.65, delay: 0.32, ease: EASE }}
                  className="mb-8 max-w-lg text-base leading-relaxed text-brand-200"
                >
                  {space.description}
                </motion.p>

                <motion.div
                  initial={slideIn}
                  animate={slideVisible}
                  transition={{ duration: 0.65, delay: 0.4, ease: EASE }}
                >
                  <a
                    href="https://swastikwellbeing.com/spaces/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-sm border border-gold-400/60 bg-gold-500/10 px-7 py-3.5 font-sans text-sm uppercase tracking-[0.15em] text-gold-300 backdrop-blur-sm transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/20 hover:text-gold-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
                  >
                    Discover Spaces
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot navigation */}
        <div
          role="tablist"
          aria-label="Space navigation"
          className="absolute bottom-8 right-6 flex items-center gap-2 sm:right-8 lg:right-12"
        >
          {spaces.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to ${s.name}`}
              onClick={() => goTo(i)}
              className="group p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <motion.div
                animate={{
                  width: i === current ? 28 : 8,
                  backgroundColor:
                    i === current
                      ? 'rgb(212 168 83)'
                      : 'rgba(255,255,255,0.35)',
                }}
                transition={{ duration: 0.35, ease: EASE }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-6 font-sans text-xs tracking-widest text-white/50 sm:right-8 lg:right-12"
        >
          {String(current + 1).padStart(2, '0')} /{' '}
          {String(spaces.length).padStart(2, '0')}
        </div>

        {/* Auto-play progress bar */}
        {!isPaused && (
          <motion.div
            key={current + '-bar'}
            className="absolute bottom-0 left-0 h-0.5 bg-gold-400/70"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
          />
        )}
      </div>
    </section>
  );
}

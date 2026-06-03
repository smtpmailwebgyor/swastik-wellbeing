'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroParallaxBg() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div className="absolute inset-[-10%] top-0" style={{ y }}>
        <Image
          src="/images/hero-banner.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      {/* Multi-stop cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-900/50 to-brand-950/82" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/45 via-transparent to-brand-950/30" />
    </div>
  );
}

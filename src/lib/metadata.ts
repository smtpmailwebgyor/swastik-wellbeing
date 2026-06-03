import type { Metadata } from 'next';
import { programData } from '@/content/stress-emotional-balance';

const { meta } = programData;

export const pageMetadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: meta.canonical,
    title: meta.title,
    description: meta.description,
    siteName: meta.organization.name,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: meta.organization.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

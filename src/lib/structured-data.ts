import { programData } from '@/content/stress-emotional-balance';
import type { FAQ } from '@/types';

export function organizationSchema() {
  const { organization } = programData.meta;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
    logo: organization.logo,
    email: organization.email,
    telephone: organization.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: organization.phone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function faqSchema(items: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

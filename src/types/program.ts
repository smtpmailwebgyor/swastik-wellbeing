export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface ProgramStep {
  step: number;
  title: string;
  description: string;
}

export interface ProgramData {
  meta: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    organization: {
      name: string;
      url: string;
      logo: string;
      phone: string;
      email: string;
      whatsappNumber: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  benefits: {
    heading: string;
    subtitle: string;
    items: Benefit[];
  };
  program: {
    heading: string;
    subtitle: string;
    steps: ProgramStep[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: Testimonial[];
  };
  faqs: {
    heading: string;
    subtitle: string;
    items: FAQ[];
  };
  leadForm: {
    heading: string;
    subtitle: string;
    submitLabel: string;
    privacyNote: string;
  };
  cta: {
    heading: string;
    subtitle: string;
    buttonLabel: string;
  };
}

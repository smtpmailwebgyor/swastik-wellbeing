import type { ProgramData } from '@/types';

export const programData: ProgramData = {
  meta: {
    title: 'Stress & Emotional Balance Programme | Swastik Wellbeing',
    description:
      'Reclaim your inner peace with our holistic 8-week programme. Expert-guided, science-backed, personalised to you. Book your free discovery session today.',
    canonical: 'https://swastikwellbeing.com',
    ogImage: 'https://swastikwellbeing.com/og-image.jpg',
    organization: {
      name: 'Swastik Wellbeing',
      url: 'https://swastikwellbeing.com',
      logo: 'https://swastikwellbeing.com/logo.png',
      phone: '+91-9594191758',
      email: 'hello@swastikwellbeing.com',
      whatsappNumber: '919594191758',
    },
  },

  hero: {
    eyebrow: 'Swastik Wellbeing',
    headline: 'Reclaim Your Inner Peace. Transform Stress Into Strength.',
    subheadline:
      'A holistic 8-week programme combining ancient wisdom and modern science to restore emotional equilibrium and lasting resilience.',
    primaryCta: 'Begin Your Journey',
    secondaryCta: 'Explore the Programme',
  },

  benefits: {
    heading: 'Why Swastik Wellbeing',
    subtitle:
      'An approach as unique as you are — grounded in science, guided by centuries of wisdom.',
    items: [
      {
        id: 'science-backed',
        icon: '◈',
        title: 'Science-Backed Methods',
        description:
          'Evidence-based techniques drawn from neuroscience, somatic therapy, and cognitive behavioural practices.',
      },
      {
        id: 'personalised',
        icon: '◈',
        title: 'Personalised to You',
        description:
          'Every session is tailored to your unique stress patterns, lifestyle, and emotional landscape.',
      },
      {
        id: 'lasting',
        icon: '◈',
        title: 'Lasting Transformation',
        description:
          'Build resilience tools and habits that stay with you long after the programme concludes.',
      },
      {
        id: 'expert',
        icon: '◈',
        title: 'Expert Practitioners',
        description:
          'Certified wellness professionals with 15+ years of clinical and holistic practice.',
      },
      {
        id: 'flexible',
        icon: '◈',
        title: 'Flexible Scheduling',
        description:
          'Online and in-person options designed to work around your life, not the other way around.',
      },
      {
        id: 'holistic',
        icon: '◈',
        title: 'Holistic Integration',
        description:
          'Mind, body, and breath working in harmony — a complete system, not isolated techniques.',
      },
    ],
  },

  program: {
    heading: 'The Programme Experience',
    subtitle:
      'A structured journey from stress to strength — at every step, you are guided.',
    steps: [
      {
        step: 1,
        title: 'Discovery Assessment',
        description:
          'A comprehensive consultation to map your stress triggers, emotional patterns, and wellness goals. This forms the foundation of your personalised plan.',
      },
      {
        step: 2,
        title: 'Bespoke Protocol',
        description:
          'Your dedicated practitioner designs an 8-week roadmap combining breathwork, somatic practices, mindfulness, and lifestyle protocols.',
      },
      {
        step: 3,
        title: 'Guided Practice',
        description:
          'Weekly live sessions, curated daily practices, and on-demand resources ensure consistent progress and expert support throughout.',
      },
      {
        step: 4,
        title: 'Integration & Sustain',
        description:
          'Build lifelong tools in the final phase, with a transition plan to maintain your emotional balance independently.',
      },
    ],
  },

  testimonials: {
    heading: 'Voices of Transformation',
    subtitle: 'Real results from people who chose to begin.',
    items: [
      {
        id: 't1',
        name: 'Priya S.',
        role: 'Senior Manager, Bangalore',
        quote:
          'After years of chronic anxiety, I finally found a programme that works beyond surface level. My stress response has completely transformed. I feel like myself again.',
        rating: 5,
      },
      {
        id: 't2',
        name: 'Arjun M.',
        role: 'Entrepreneur, Mumbai',
        quote:
          'The personalised approach here is unlike anything I have tried. Clearer mind, better decisions, and a calm I did not think was possible for someone like me.',
        rating: 5,
      },
      {
        id: 't3',
        name: 'Kavitha R.',
        role: 'Doctor, Chennai',
        quote:
          'As someone who helps others with mental health, seeking help myself felt daunting. Swastik made it safe, effective, and genuinely life-changing.',
        rating: 5,
      },
    ],
  },

  faqs: {
    heading: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know before taking the first step.',
    items: [
      {
        id: 'f1',
        question: 'Is this programme right for me?',
        answer:
          'This programme is designed for individuals experiencing stress, burnout, anxiety, or emotional overwhelm who are ready to invest in lasting change. A complimentary discovery session helps us determine whether it is the right fit for your specific needs.',
      },
      {
        id: 'f2',
        question: 'How long is the programme?',
        answer:
          'The core programme runs for 8 weeks, with weekly one-to-one sessions and daily self-guided practices. Extensions and ongoing support are available for those who wish to continue.',
      },
      {
        id: 'f3',
        question: 'Is the programme available online or only in-person?',
        answer:
          'Both options are available. Online sessions are delivered via secure video call with the same depth and personalisation as in-person sessions at our Bangalore centre.',
      },
      {
        id: 'f4',
        question: 'How quickly will I see results?',
        answer:
          'Most participants notice meaningful shifts within the first two to three weeks. The programme is designed for sustainable, deep change — results build progressively and are intended to last.',
      },
      {
        id: 'f5',
        question: 'What does the complimentary discovery session involve?',
        answer:
          'The 30-minute discovery session is a no-obligation conversation with one of our practitioners. We listen to your situation, answer your questions, and recommend whether and how we can help.',
      },
    ],
  },

  leadForm: {
    heading: 'Take the First Step',
    subtitle:
      'Reserve your complimentary 30-minute discovery session. No obligation. No pressure.',
    submitLabel: 'Claim My Free Session',
    privacyNote:
      'Your details are safe with us. We will never share your information.',
  },

  cta: {
    heading: 'Your Transformation Begins With One Decision',
    subtitle:
      'Join hundreds who have already reclaimed their calm, clarity, and emotional strength.',
    buttonLabel: 'Begin Your Journey',
  },
};

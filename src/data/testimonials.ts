export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  highlight: string;
  /** Sample entries are placeholders to replace with real client feedback. */
  isSample?: boolean;
}

/**
 * IMPORTANT: These are SAMPLE testimonials, not real clients.
 * Replace each entry with genuine client feedback (with permission)
 * before going live. Using invented testimonials can mislead prospects
 * and damage trust if verified. Once you have real reviews, set
 * `isSample` to false (or remove it) and delete the unused samples.
 */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Your Client Name',
    role: 'Founder',
    company: 'Client Company',
    image: '',
    content:
      'Add a real client quote here describing the AI chatbot, automation, or web app Nimrah delivered and the outcome it produced for their business.',
    rating: 5,
    highlight: 'Add a short result highlight',
    isSample: true,
  },
  {
    id: '2',
    name: 'Your Client Name',
    role: 'CEO',
    company: 'Client Company',
    image: '',
    content:
      'Add a real client quote here about working with Nimrah on an AI agent, RAG assistant, or automation system, and what changed for them afterwards.',
    rating: 5,
    highlight: 'Add a short result highlight',
    isSample: true,
  },
  {
    id: '3',
    name: 'Your Client Name',
    role: 'Product Lead',
    company: 'Client Company',
    image: '',
    content:
      'Add a real client quote here about a SaaS platform or MVP Nimrah built — the experience, the quality, and the impact on their launch.',
    rating: 5,
    highlight: 'Add a short result highlight',
    isSample: true,
  },
];

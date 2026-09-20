// These dialogs are informational placeholders; the supplied mockup has no auth or pricing screens.
export const dialogCopy = {
  pricing: {
    title: 'Pricing',
    description: 'Pricing plans have not been added to this design yet.',
  },
  reviews: {
    title: 'Reviews',
    description: 'Customer reviews have not been added to this design yet.',
  },
  login: {
    title: 'Log in',
    description: 'This landing page is ready for an authentication service. Account login will become available after you connect your backend.',
  },
  signup: {
    title: 'Sign up',
    description: 'This landing page is ready for an authentication service. Account registration will become available after you connect your backend.',
  },
} as const;

export type DialogKey = keyof typeof dialogCopy;

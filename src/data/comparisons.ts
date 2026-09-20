export type Comparison = {
  name: string;
  before: string;
  after: string;
};

export const comparisons: Comparison[] = [
  { name: 'Sushi platter', before: '/images/sushi-before.webp', after: '/images/sushi-after.webp' },
  { name: 'Rice, egg, and grilled meats', before: '/images/rice-before.webp', after: '/images/rice-after.webp' },
  { name: 'Tacos', before: '/images/tacos-before.webp', after: '/images/tacos-after.webp' },
  { name: 'Restaurant dinner spread', before: '/images/feast-before.webp', after: '/images/feast-after.webp' },
];

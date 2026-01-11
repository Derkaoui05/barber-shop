export const SITE_CONFIG = {
  name: 'SharpLook Barber Shop',
  description:
    'Professional barber shop offering premium haircuts, beard trims, and grooming services. Book your appointment online today.',
  url: 'https://sharplook.vercel.app',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/sharplook',
    facebook: 'https://facebook.com/sharplook',
    instagram: 'https://instagram.com/sharplook',
  },
  contact: {
    phone: '+212 674494786',
    email: 'admin@sharplook.com',
    address: 'Kasbah Street, Tangier, Morocco',
    hours: [
      { days: 'Mon - Fri', hours: '9:00 AM - 7:00 PM' },
      { days: 'Saturday', hours: '10:00 AM - 5:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
  },
  booking: {
    openingHour: 9,
    closingHour: 19,
    slotDuration: 30,
    maxDaysInAdvance: 30,
  },
  seo: {
    keywords: [
      'barber shop',
      'haircut',
      'beard trim',
      'grooming',
      "men's haircut",
      'professional barber',
      'traditional barbering',
    ],
  },
};

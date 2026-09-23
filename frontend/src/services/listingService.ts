import { Listing } from '../models/listing';

const API_BASE = '/api';

// Placeholder imagery — the real listing's photos are proprietary to the
// reference site and are intentionally not scraped/reproduced here.
const img = (seed: string, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const MOCK_LISTING: Listing = {
  id: 'mirashya-ug10',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  propertyType: 'Entire serviced apartment in Candolim, India',
  location: 'Candolim, Goa, India',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  heroPhotos: [img('hero-main', 1200, 900), img('hero-2'), img('hero-3'), img('hero-4'), img('hero-5')],
  photoCategories: [
    { id: 'living-room-1', label: 'Living room 1', subtitle: 'Sofa · Air conditioning · Ceiling fan · TV', coverUrl: img('lr1'), photos: [img('lr1-a'), img('lr1-b'), img('lr1-c')] },
    { id: 'living-room-2', label: 'Living room 2', subtitle: 'Ceiling fan · Hot tub', coverUrl: img('lr2'), photos: [img('lr2-a'), img('lr2-b'), img('lr2-c'), img('lr2-d'), img('lr2-e')] },
    { id: 'full-kitchen', label: 'Full kitchen', subtitle: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery', coverUrl: img('kitchen'), photos: [img('kitchen-a'), img('kitchen-b')] },
    { id: 'bedroom', label: 'Bedroom', subtitle: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi', coverUrl: img('bed'), photos: [img('bed-a'), img('bed-b'), img('bed-c'), img('bed-d')] },
    { id: 'full-bathroom', label: 'Full bathroom', subtitle: 'Hairdryer · Hot water · Shampoo · Shower gel', coverUrl: img('bath'), photos: [img('bath-a')] },
    { id: 'gym', label: 'Gym', subtitle: 'Air conditioning · Gym · Exercise equipment · Ceiling fan', coverUrl: img('gym'), photos: [img('gym-a'), img('gym-b'), img('gym-c'), img('gym-d')] },
    { id: 'exterior', label: 'Exterior', subtitle: '', coverUrl: img('ext'), photos: [img('ext-a'), img('ext-b'), img('ext-c')] },
    { id: 'pool', label: 'Pool', subtitle: 'Pool', coverUrl: img('pool'), photos: [img('pool-a'), img('pool-b')] },
    { id: 'additional', label: 'Additional photos', subtitle: '', coverUrl: img('extra'), photos: [img('extra-a'), img('extra-b'), img('extra-c'), img('extra-d'), img('extra-e'), img('extra-f')] },
  ],
  guestFavourite: true,
  rating: 4.95,
  reviewCount: 19,
  host: {
    name: 'Mirashya Homes',
    avatarUrl: img('host-avatar', 200, 200),
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    bornDecade: 'Born in the 80s',
    school: 'Where I went to school: NICMAR GOA',
    responseRate: 100,
    responseTime: 'Responds within an hour',
  },
  coHosts: [
    { name: 'Sharath', avatarUrl: img('co-sharath', 100, 100) },
    { name: 'Aman Dev Pahwa', avatarUrl: img('co-aman', 100, 100) },
    { name: 'Maria Karen Priyanka', avatarUrl: img('co-maria', 100, 100) },
    { name: 'Simran', avatarUrl: img('co-simran', 100, 100) },
    { name: 'Pallavi', avatarUrl: img('co-pallavi', 100, 100) },
    { name: 'Sanyukta', avatarUrl: img('co-sanyukta', 100, 100) },
    { name: 'Shruti', avatarUrl: img('co-shruti', 100, 100) },
    { name: 'Amisha', avatarUrl: img('co-amisha', 100, 100) },
  ],
  amenityHighlights: [
    { icon: 'sun-lounger', title: 'Outdoor entertainment', description: 'The pool and alfresco dining are great for trips.' },
    { icon: 'snowflake', title: 'Designed for staying cool', description: 'Beat the heat with the A/C and ceiling fan.' },
    { icon: 'key', title: 'Self check-in', description: 'You can check in with the building staff.' },
  ],
  description:
    "Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Enjoy high-speed WiFi, Smart TV, pet-friendly comfort, and stylish interiors. Just minutes from Candolim Beach, popular cafés, restaurants, and nightlife, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa.",
  sleepAreas: [
    { imageUrl: img('sleep-bed'), label: 'Bedroom', detail: '1 double bed' },
    { imageUrl: img('sleep-living'), label: 'Living room', detail: '1 sofa' },
  ],
  amenities: [
    { icon: 'kitchen', label: 'Kitchen', available: true },
    { icon: 'wifi', label: 'Wifi', available: true },
    { icon: 'desk', label: 'Dedicated workspace', available: true },
    { icon: 'car', label: 'Free parking on premises', available: true },
    { icon: 'pool', label: 'Pool', available: true },
    { icon: 'hottub', label: 'Hot tub', available: true },
    { icon: 'paw', label: 'Pets allowed', available: true },
    { icon: 'camera', label: 'Exterior security cameras on property', available: true },
    { icon: 'co-alarm', label: 'Carbon monoxide alarm', available: false },
    { icon: 'smoke-alarm', label: 'Smoke alarm', available: false },
  ],
  totalAmenityCount: 50,
  pricePerStay: 28499,
  currency: '₹',
  nights: 5,
  checkIn: '2026-10-18',
  checkOut: '2026-10-23',
  defaultGuests: 2,
  freeCancellationDate: '17 October',
  ratingCategories: [
    { label: 'Cleanliness', score: 5.0 },
    { label: 'Accuracy', score: 5.0 },
    { label: 'Check-in', score: 5.0 },
    { label: 'Communication', score: 5.0 },
    { label: 'Location', score: 4.8 },
    { label: 'Value', score: 4.8 },
  ],
  reviewTags: [
    { label: 'Comfort', count: 6 },
    { label: 'Accuracy', count: 5 },
    { label: 'Hot tub', count: 5 },
    { label: 'Condition', count: 4 },
    { label: 'Hospitality', count: 8 },
    { label: 'Cleanliness', count: 4 },
    { label: 'Amenities', count: 2 },
  ],
  reviews: [
    { id: 'r1', name: 'Amit', avatarUrl: img('rev-amit', 100, 100), tenure: '2 months on Airbnb', date: '1 week ago', rating: 5, text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.' },
    { id: 'r2', name: 'Aheesh', avatarUrl: img('rev-aheesh', 100, 100), tenure: '3 years on Airbnb', date: '2 weeks ago', rating: 5, text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.' },
    { id: 'r3', name: 'Samiksha', avatarUrl: img('rev-samiksha', 100, 100), tenure: '8 months on Airbnb', date: 'May 2026', rating: 5, text: 'the host nitish was really great help' },
    { id: 'r4', name: 'Vedant', avatarUrl: img('rev-vedant', 100, 100), tenure: '4 years on Airbnb', date: 'May 2026', rating: 5, text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived, with every corner of the house looking fresh and pristine.' },
    { id: 'r5', name: 'Vaibhav S', avatarUrl: img('rev-vaibhav', 100, 100), tenure: '3 years on Airbnb', date: 'May 2026', rating: 5, text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too." },
    { id: 'r6', name: 'Mohd', avatarUrl: img('rev-mohd', 100, 100), tenure: '5 years on Airbnb', date: 'May 2026', rating: 4, text: 'Great place. Exactly as described in the listing.' },
  ],
  neighbourhood: 'Candolim, Goa, India',
  neighbourhoodBlurb: 'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
  cancellationPolicy: ['Free cancellation before 17 October.', 'Cancel before check-in on 18 October for a partial refund.'],
  houseRules: ['Check-in after 2:00 pm', 'Checkout before 11:00 am', '3 guests maximum'],
  safety: ['Carbon monoxide alarm not reported', 'Smoke alarm not reported', 'Exterior security cameras on property'],
  nearbyStays: Array.from({ length: 5 }).map((_, i) => ({ imageUrl: img('nearby' + i), title: 'Stay nearby' })),
};

export async function getListing(id: string): Promise<Listing> {
  try {
    const res = await fetch(`${API_BASE}/listings/${id}`);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return (await res.json()) as Listing;
  } catch {
    // Backend unreachable (or not running) — fall back to the local mock so
    // the UI still renders fully on its own.
    return MOCK_LISTING;
  }
}

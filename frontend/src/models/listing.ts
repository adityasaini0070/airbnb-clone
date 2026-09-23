export interface PhotoCategory {
  id: string;
  label: string;
  subtitle: string;
  coverUrl: string;
  photos: string[];
}

export interface Review {
  id: string;
  name: string;
  avatarUrl: string;
  tenure: string;
  date: string;
  rating: number;
  text: string;
}

export interface CoHost {
  name: string;
  avatarUrl: string;
}

export interface AmenityHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface Amenity {
  icon: string;
  label: string;
  available: boolean;
}

export interface RatingCategory {
  label: string;
  score: number;
}

export interface NearbyStay {
  imageUrl: string;
  title: string;
}

export interface Listing {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  heroPhotos: string[];
  photoCategories: PhotoCategory[];
  guestFavourite: boolean;
  rating: number;
  reviewCount: number;
  host: {
    name: string;
    avatarUrl: string;
    yearsHosting: number;
    reviewCount: number;
    rating: number;
    bornDecade: string;
    school: string;
    responseRate: number;
    responseTime: string;
  };
  coHosts: CoHost[];
  amenityHighlights: AmenityHighlight[];
  description: string;
  sleepAreas: { imageUrl: string; label: string; detail: string }[];
  amenities: Amenity[];
  totalAmenityCount: number;
  pricePerStay: number;
  currency: string;
  nights: number;
  checkIn: string;
  checkOut: string;
  defaultGuests: number;
  freeCancellationDate: string;
  ratingCategories: RatingCategory[];
  reviewTags: { label: string; count: number }[];
  reviews: Review[];
  neighbourhood: string;
  neighbourhoodBlurb: string;
  cancellationPolicy: string[];
  houseRules: string[];
  safety: string[];
  nearbyStays: NearbyStay[];
}

export type Currency = 'TZS' | 'USD';

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'seafood' | 'grills' | 'desserts' | 'cocktails';
  priceTZS: number;
  priceUSD: number;
  description: string;
  image: string;
  dietary: ('halal' | 'vegetarian' | 'gluten-free' | 'chef-choice')[];
  pairing?: string;
  calories?: number;
  spicyLevel?: number;
}

export interface TableZone {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: string;
  viewType: string;
  minimumSpendUSD: number;
}

export interface ReservationData {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guestsCount: number;
  zoneId: string;
  specialNotes?: string;
  paymentMethod: 'mpesa' | 'tigopesa' | 'airtel' | 'card' | 'pay_at_venue';
  status: 'confirmed' | 'pending';
  totalDepositUSD: number;
}

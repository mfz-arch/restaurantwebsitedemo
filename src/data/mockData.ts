import type { MenuItem, TableZone } from '../types/restaurant';

export const MOCK_ZONES: TableZone[] = [
  {
    id: 'panoramic-window',
    name: '360° Panoramic Ocean Window',
    description: 'Premier edge seating with uninterrupted views of the Indian Ocean & Dar skyline.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    capacity: '2 - 4 Guests',
    viewType: 'Ocean & Skyline View',
    minimumSpendUSD: 45,
  },
  {
    id: 'vip-executive-booth',
    name: 'VIP Executive Velvet Booth',
    description: 'Intimate, elevated booths designed for business meetings and romantic celebrations.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    capacity: '4 - 8 Guests',
    viewType: 'Private Alcove',
    minimumSpendUSD: 80,
  },
  {
    id: 'chefs-tasting-ring',
    name: "Chef's Culinary Ring",
    description: 'Center revolving ring directly overlooking the open flame kitchen & sommelier cellar.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    capacity: '2 - 6 Guests',
    viewType: 'Open Kitchen Experience',
    minimumSpendUSD: 60,
  },
  {
    id: 'sky-lounge-terrace',
    name: 'Sky Lounge Cocktail Terrace',
    description: 'Outdoor open-air terrace with sea breeze, signature mixology bar & live lounge music.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
    capacity: '2 - 10 Guests',
    viewType: 'Open-Air Horizon',
    minimumSpendUSD: 35,
  }
];

export const MOCK_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'Zanzibar Spiced Rock Lobster',
    category: 'seafood',
    priceTZS: 85000,
    priceUSD: 32.50,
    description: 'Fresh Indian Ocean rock lobster char-grilled with garlic clove butter, lemongrass, and local cloves, served with saffron pilaf.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    dietary: ['halal', 'gluten-free', 'chef-choice'],
    pairing: 'Chablis Premier Cru 2021',
    calories: 680
  },
  {
    id: 'm2',
    name: 'Wagyu Ribeye Steak (300g)',
    category: 'grills',
    priceTZS: 115000,
    priceUSD: 44.00,
    description: 'Grade A5 Wagyu ribeye seared over acacia wood charcoal, finished with truffle bone marrow jus & roasted shallots.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    dietary: ['halal', 'chef-choice'],
    pairing: 'Barolo DOCG 2018',
    calories: 920
  },
  {
    id: 'm3',
    name: 'Pan-Seared Swahili Red Snapper',
    category: 'seafood',
    priceTZS: 65000,
    priceUSD: 25.00,
    description: 'Wild-caught snapper fillet served over coconut infused cassava purée with chili-lime coriander glaze.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    dietary: ['halal', 'gluten-free'],
    pairing: 'Sauvignon Blanc 2022',
    calories: 540
  },
  {
    id: 'm4',
    name: 'Truffle Wild Mushroom Risotto',
    category: 'starters',
    priceTZS: 48000,
    priceUSD: 18.50,
    description: 'Arborio rice slowly simmered with porcini mushrooms, aged parmesan crisp, and fresh black truffle shavings.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    dietary: ['vegetarian'],
    pairing: 'Pinot Noir 2020',
    calories: 610
  },
  {
    id: 'm5',
    name: 'Serengeti Golden Mango Tart',
    category: 'desserts',
    priceTZS: 32000,
    priceUSD: 12.00,
    description: 'Caramelized ripe mangoes over almond shortbread crust, served with Madagascar vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    dietary: ['vegetarian', 'chef-choice'],
    calories: 420
  },
  {
    id: 'm6',
    name: 'Kilimanjaro Sunset Cocktail',
    category: 'cocktails',
    priceTZS: 38000,
    priceUSD: 14.50,
    description: 'Aged Tanzanian spiced rum, passion fruit elixir, fresh lime, topped with champagne and edible gold leaf.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    dietary: ['chef-choice'],
    calories: 210
  }
];

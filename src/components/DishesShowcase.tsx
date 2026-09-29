import React, { useState } from 'react';
import { MOCK_MENU } from '../data/mockData';
import type { MenuItem, Currency } from '../types/restaurant';
import { Star, Wine } from 'lucide-react';

interface DishesShowcaseProps {
  currency: Currency;
  onSelectDishForBooking: (dish: MenuItem) => void;
}

export const DishesShowcase: React.FC<DishesShowcaseProps> = ({
  currency,
  onSelectDishForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Signature Dishes' },
    { id: 'seafood', label: 'Swahili Seafood' },
    { id: 'grills', label: 'Prime Grills' },
    { id: 'starters', label: 'Starters' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'cocktails', label: 'Signature Cocktails' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MOCK_MENU
    : MOCK_MENU.filter((item) => item.category === activeCategory);

  const formatPrice = (item: MenuItem) => {
    if (currency === 'TZS') {
      return `TZS ${item.priceTZS.toLocaleString()}`;
    }
    return `$${item.priceUSD.toFixed(2)}`;
  };

  return (
    <section id="dishes" className="py-28 bg-[#08090C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filigree */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-12 h-[1px] bg-gold-500/40" />
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">
              Culinary Artistry
            </span>
            <div className="w-12 h-[1px] bg-gold-500/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">
            Signature Culinary Creations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Every dish is handcrafted using local spices from Zanzibar and fresh daily catch from the Indian Ocean.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20'
                  : 'bg-[#111319] text-slate-400 hover:text-gold-400 hover:bg-[#181B24] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="lumiere-card rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Dish Photo */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-transparent opacity-80" />

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-400 px-3.5 py-1.5 rounded-full font-serif font-bold text-sm">
                    {formatPrice(dish)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Star Rating (⭐⭐⭐⭐⭐ as shown in Photo 4) */}
                  <div className="flex items-center space-x-1 text-gold-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white/5 mt-2 pt-4">
                {dish.pairing ? (
                  <div className="flex items-center space-x-1.5 text-xs text-gold-300/80 font-medium">
                    <Wine className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="truncate max-w-[140px]">{dish.pairing}</span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500">Chef Signature Recipe</span>
                )}

                <button
                  onClick={() => onSelectDishForBooking(dish)}
                  className="gold-outline-btn px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
                >
                  Order Dish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

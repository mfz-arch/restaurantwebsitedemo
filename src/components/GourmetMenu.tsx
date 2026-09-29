import React, { useState } from 'react';
import { MOCK_MENU } from '../data/mockData';
import type { MenuItem, Currency } from '../types/restaurant';
import { Wine, Award, Eye } from 'lucide-react';

interface GourmetMenuProps {
  currency: Currency;
  onSelectDishForReservation: (dish: MenuItem) => void;
}

export const GourmetMenu: React.FC<GourmetMenuProps> = ({
  currency,
  onSelectDishForReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
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
    <section id="menu" className="py-28 bg-[#07080A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-lg">
            <Award className="w-4 h-4 text-gold-400" />
            <span>Michelin-Style Gastronomy</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            The Executive Culinary Selection
          </h2>
          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Prepared daily using fresh daily catch from the Indian Ocean, imported Wagyu prime cuts, and authentic Zanzibar spices.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105'
                  : 'bg-[#12141A] text-slate-300 hover:text-gold-400 hover:bg-[#181B24] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="glass-card rounded-3xl overflow-hidden group border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Dish Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-90" />

                  {/* Price Tag Pill */}
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-xl border border-gold-500/40 text-gold-300 px-4 py-1.5 rounded-full font-serif font-bold text-sm shadow-2xl">
                    {formatPrice(dish)}
                  </div>

                  {/* Dietary Badges */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {dish.dietary.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-semibold uppercase tracking-wider text-slate-200"
                      >
                        {d === 'chef-choice' ? '⭐ Chef Special' : d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dish Description */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                {dish.pairing ? (
                  <div className="flex items-center space-x-2 text-xs text-gold-300/90 font-medium">
                    <Wine className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="truncate max-w-[150px]">{dish.pairing}</span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-400 font-light">Signature Recipe</span>
                )}

                <button
                  onClick={() => setSelectedDish(dish)}
                  className="px-4 py-2 rounded-xl bg-gold-500/15 hover:bg-gold-500/30 text-gold-300 text-xs font-semibold border border-gold-500/30 transition-all flex items-center space-x-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dish Detail Modal */}
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <div className="glass-panel max-w-lg w-full rounded-3xl overflow-hidden border border-gold-500/40 p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition-all"
              >
                ✕
              </button>

              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-60 object-cover rounded-2xl mb-6 shadow-2xl border border-white/10"
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
                  {selectedDish.category}
                </span>
                <span className="text-2xl font-serif font-bold text-gold-400">
                  {formatPrice(selectedDish)}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                {selectedDish.name}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {selectedDish.pairing && (
                <div className="bg-gold-500/15 border border-gold-500/30 rounded-2xl p-4 mb-6 flex items-center space-x-3.5">
                  <Wine className="w-6 h-6 text-gold-400 shrink-0" />
                  <div className="text-xs">
                    <span className="block font-bold text-gold-400 uppercase tracking-wider">Sommelier Wine Pairing</span>
                    <span className="text-slate-200 font-medium">{selectedDish.pairing}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  onSelectDishForReservation(selectedDish);
                  setSelectedDish(null);
                }}
                className="shimmer-btn w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-black font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
              >
                Pre-Order Dish with Table Reservation
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MOCK_MENU } from '../data/mockData';
import type { MenuItem, Currency } from '../types/restaurant';
import { Wine, Award } from 'lucide-react';

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
    <section id="menu" className="py-24 bg-[#0B0C0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Michelin-Inspired Swahili Gastronomy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The Executive Culinary Selection
          </h2>
          <p className="text-slate-300 font-light text-base">
            Crafted daily with fresh catch from the Indian Ocean, imported prime cuts, and authentic Zanzibar spices.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20 scale-105'
                  : 'bg-[#14171D] text-slate-300 hover:text-gold-400 hover:bg-[#1A1D24] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="glass-panel rounded-2xl overflow-hidden group hover:border-gold-500/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Dish Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-80" />

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-400 px-3.5 py-1.5 rounded-full font-serif font-bold text-sm shadow-xl">
                    {formatPrice(dish)}
                  </div>

                  {/* Dietary Badges */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {dish.dietary.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-slate-200"
                      >
                        {d === 'chef-choice' ? '⭐ Chef Special' : d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dish Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 border-t border-white/5 mt-2 pt-4 flex items-center justify-between">
                {dish.pairing ? (
                  <div className="flex items-center space-x-1.5 text-xs text-gold-300/80 font-medium">
                    <Wine className="w-3.5 h-3.5 text-gold-400" />
                    <span className="truncate max-w-[160px]">{dish.pairing}</span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-400 font-light">Chef's Signature Recipe</span>
                )}

                <button
                  onClick={() => setSelectedDish(dish)}
                  className="px-3.5 py-1.5 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 text-xs font-semibold border border-gold-500/30 transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Dish Details */}
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel max-w-lg w-full rounded-3xl overflow-hidden border border-gold-500/40 p-6 relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>

              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-xl"
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
                  {selectedDish.category}
                </span>
                <span className="text-xl font-serif font-bold text-gold-400">
                  {formatPrice(selectedDish)}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                {selectedDish.name}
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {selectedDish.pairing && (
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-3.5 mb-6 flex items-center space-x-3">
                  <Wine className="w-5 h-5 text-gold-400 shrink-0" />
                  <div className="text-xs">
                    <span className="block font-bold text-gold-400">Recommended Sommelier Pairing</span>
                    <span className="text-slate-300">{selectedDish.pairing}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  onSelectDishForReservation(selectedDish);
                  setSelectedDish(null);
                }}
                className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs tracking-wider uppercase shadow-lg transition-all"
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

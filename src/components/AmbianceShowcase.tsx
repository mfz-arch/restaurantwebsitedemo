import React, { useState } from 'react';
import { MOCK_ZONES } from '../data/mockData';
import type { TableZone, Currency } from '../types/restaurant';
import { Users, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface AmbianceShowcaseProps {
  currency: Currency;
  onSelectZoneForBooking: (zoneId: string) => void;
}

export const AmbianceShowcase: React.FC<AmbianceShowcaseProps> = ({
  currency,
  onSelectZoneForBooking,
}) => {
  const [selectedZone, setSelectedZone] = useState<TableZone>(MOCK_ZONES[0]);

  const formatPrice = (usdAmount: number) => {
    if (currency === 'TZS') {
      const tzs = Math.round(usdAmount * 2600);
      return `TZS ${tzs.toLocaleString()}`;
    }
    return `$${usdAmount.toFixed(2)}`;
  };

  return (
    <section id="ambiance" className="py-24 bg-[#0E1014] relative overflow-hidden border-t border-white/5">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase block mb-3">
            Architectural Mastery & Atmosphere
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6">
            Choose Your Dining Experience
          </h2>
          <p className="text-slate-300 font-light text-base sm:text-lg">
            Whether hosting executive business guests or celebrating intimate milestones, each zone at AKEMI provides a bespoke atmosphere with panoramic views of Tanzania.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MOCK_ZONES.map((zone) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1C1F26] to-[#14161C] border-gold-500/50 shadow-xl gold-glow'
                    : 'bg-[#14171D]/60 border-white/5 hover:border-white/20 hover:bg-[#181B22]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-gold-400' : 'text-slate-400'}`}>
                    {zone.viewType}
                  </span>
                  {isSelected && <Sparkles className="w-4 h-4 text-gold-400" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                  {zone.name}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>{zone.capacity}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Detail Showcase */}
        <div className="glass-panel rounded-3xl p-6 lg:p-10 border border-gold-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Zone Photo Preview */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl aspect-[16/10]">
            <img
              src={selectedZone.image}
              alt={selectedZone.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-200">
              <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-medium">
                📍 21st Floor • Golden Jubilee Towers
              </span>
              <span className="px-3 py-1.5 rounded-full bg-gold-500/20 text-gold-300 backdrop-blur-md border border-gold-500/40 font-semibold">
                {selectedZone.capacity}
              </span>
            </div>
          </div>

          {/* Zone Details & Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest block mb-2">
                Featured Dining Alcove
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                {selectedZone.name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                {selectedZone.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>Revolving floor providing 360° views of Dar harbour</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>Personalized sommelier wine pairing & table service</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>Min. Spend requirement: <strong className="text-gold-400 font-bold">{formatPrice(selectedZone.minimumSpendUSD)}</strong></span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onSelectZoneForBooking(selectedZone.id)}
              className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Book Table in {selectedZone.name}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

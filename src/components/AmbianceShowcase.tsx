import React, { useState } from 'react';
import { MOCK_ZONES } from '../data/mockData';
import type { TableZone, Currency } from '../types/restaurant';
import { Users, Sparkles, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

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
    <section id="ambiance" className="py-28 bg-[#090A0D] relative overflow-hidden border-t border-white/10">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-60 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Architectural Grandeur & Atmosphere</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Curated Dining Spaces
          </h2>
          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Whether hosting executive business partners or celebrating intimate romantic moments, each dining space at AKEMI offers an incomparable 360° panoramic view of Dar es Salaam.
          </p>
        </div>

        {/* Zone Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MOCK_ZONES.map((zone) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`p-6 rounded-2xl text-left transition-all duration-400 border relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1E222D] to-[#12151D] border-gold-500 shadow-[0_10px_30px_rgba(212,175,55,0.25)] ring-1 ring-gold-500/50'
                    : 'bg-[#12141A]/70 border-white/10 hover:border-white/30 hover:bg-[#161922]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? 'text-gold-400' : 'text-slate-400'}`}>
                    {zone.viewType}
                  </span>
                  {isSelected && <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />}
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug group-hover:text-gold-300 transition-colors">
                  {zone.name}
                </h3>

                <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium pt-2 border-t border-white/5 mt-3">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>{zone.capacity}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Showcase Banner */}
        <div className="glass-panel rounded-3xl p-6 lg:p-10 border border-gold-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Gold Glow Inside Panel */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Zone High-Res Visual */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl border border-white/10">
            <img
              src={selectedZone.image}
              alt={selectedZone.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-200">
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-gold-500/30 font-semibold text-gold-300">
                📍 21st Floor • Revolving Horizon
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-gold-500 text-black font-bold uppercase tracking-wider shadow-lg">
                {selectedZone.capacity}
              </span>
            </div>
          </div>

          {/* Zone Details & Booking CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-2">
                Featured Dining Space
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                {selectedZone.name}
              </h3>
              <p className="text-slate-300 text-base font-light leading-relaxed mb-6">
                {selectedZone.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>360° Revolving panorama of Indian Ocean & City Coastline</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>Personal Sommelier & Master Chef tasting consultation</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>Guaranteed Min. Spend: <strong className="text-gold-400 font-serif font-bold text-base ml-1">{formatPrice(selectedZone.minimumSpendUSD)}</strong></span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => onSelectZoneForBooking(selectedZone.id)}
              className="shimmer-btn w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-black font-bold text-xs uppercase tracking-[0.15em] shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Book Table in {selectedZone.name}</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

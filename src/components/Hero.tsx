import React from 'react';
import { Star, ChevronDown } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dark Ambient Background Image with Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
          alt="Fine Dining Ambiance"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-[#08090C]/80" />
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[180px] pointer-events-none" />
      </div>

      {/* Main Center Spotlight Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Top Gold Filigree Flourish Line */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-500/60" />
          <div className="flex items-center space-x-1 text-gold-400">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <Star className="w-4 h-4 fill-gold-400" />
            <Star className="w-3.5 h-3.5 fill-gold-400" />
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-500/60" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-6">
          Experience Fine Dining <br className="hidden sm:block" />
          <span className="italic font-serif text-gold-400">Like Never Before</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          A refined culinary journey where exquisite Zanzibar flavors, elegant ambiance, and exceptional service come together.
        </p>

        {/* Dual Gold Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
          <button
            onClick={onReserveClick}
            className="gold-btn px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase shadow-2xl"
          >
            Reserve Your Table
          </button>

          <a
            href="#dishes"
            className="gold-outline-btn px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-semibold"
          >
            View Menu
          </a>
        </div>

        {/* Floating Social Proof Metrics */}
        <div className="inline-flex flex-wrap items-center justify-center gap-8 py-4 px-8 rounded-full bg-[#111319]/80 border border-gold-500/20 backdrop-blur-xl">
          <div className="text-center">
            <span className="font-serif text-xl font-bold text-gold-400 block">4.9 ★★★★★</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">500+ Guest Reviews</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <span className="font-serif text-xl font-bold text-white block">Michelin-Trained</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Executive Chefs</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <span className="font-serif text-xl font-bold text-gold-400 block">100% Halal</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Organic Fresh Catch</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#dishes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-gold-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import type { Currency } from '../types/restaurant';
import { Utensils, Calendar, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenReservation: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  setCurrency,
  onOpenReservation,
  onOpenAdmin
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-amber-200 flex items-center justify-center p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0B0C0E] rounded-full flex items-center justify-center">
              <Utensils className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-widest gold-gradient-text block leading-none">
              AKEMI
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate-400 font-sans uppercase">
              Dar es Salaam • Revolving Lounge
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#walkthrough" className="text-slate-300 hover:text-gold-400 transition-colors">
            Experience Walkthrough
          </a>
          <a href="#ambiance" className="text-slate-300 hover:text-gold-400 transition-colors">
            Dining Atmosphere
          </a>
          <a href="#menu" className="text-slate-300 hover:text-gold-400 transition-colors">
            Gourmet Menu
          </a>
          <a href="#location" className="text-slate-300 hover:text-gold-400 transition-colors">
            Location & Hours
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Currency Switcher */}
          <div className="flex items-center bg-[#181A20] border border-white/10 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setCurrency('TZS')}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                currency === 'TZS'
                  ? 'bg-gold-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TZS (Tsh)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                currency === 'USD'
                  ? 'bg-gold-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>

          {/* Admin Portal Toggle */}
          <button
            onClick={onOpenAdmin}
            title="Owner Admin Portal Demo"
            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-gold-400 border border-white/10 transition-all duration-300"
          >
            <LayoutDashboard className="w-4 h-4" />
          </button>

          {/* Reservation Button */}
          <button
            onClick={onOpenReservation}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-400 to-amber-200 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative px-5 py-2.5 rounded-full bg-[#0B0C0E] group-hover:bg-transparent text-gold-400 group-hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

import React, { useState, useEffect } from 'react';
import type { Currency } from '../types/restaurant';
import { Calendar, Utensils, User, LogOut, UserPlus } from 'lucide-react';
import type { UserProfile } from './TableReservationModal';

interface NavbarProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenReservation: () => void;
  currentUser: UserProfile | null;
  onOpenAuth: (step?: 1 | 2) => void;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  setCurrency,
  onOpenReservation,
  currentUser,
  onOpenAuth,
  onSignOut,
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
          ? 'bg-[#08090C]/95 backdrop-blur-xl border-b border-gold-500/20 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - WebResto */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center p-1 bg-black/50 group-hover:border-gold-500 transition-colors shadow-lg">
            <Utensils className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-serif text-2xl tracking-[0.2em] font-bold text-white block leading-none">
              WEBRESTO
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gold-400 font-sans uppercase">
              Fine Dining & Lounge
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold">
          <a href="#hero" className="text-slate-300 hover:text-gold-400 transition-colors">
            Home
          </a>
          <a href="#dishes" className="text-slate-300 hover:text-gold-400 transition-colors">
            Menu
          </a>
          <a href="#chef" className="text-slate-300 hover:text-gold-400 transition-colors">
            Our Chef
          </a>
          <a href="#testimonials" className="text-slate-300 hover:text-gold-400 transition-colors">
            Reviews
          </a>
          <a href="#location" className="text-slate-300 hover:text-gold-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-2.5 sm:space-x-4">
          {/* Currency Switcher */}
          <div className="flex items-center bg-[#14161F] border border-white/10 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setCurrency('TZS')}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                currency === 'TZS'
                  ? 'bg-gold-500 text-black shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TZS
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                currency === 'USD'
                  ? 'bg-gold-500 text-black shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD
            </button>
          </div>

          {/* User Member Badge or Auth Buttons */}
          {currentUser ? (
            <div className="flex items-center space-x-2 bg-[#14161F] border border-gold-500/40 rounded-full px-3.5 py-1.5 text-xs text-white">
              <User className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-bold">{currentUser.name}</span>
              <button
                onClick={onSignOut}
                title="Sign Out"
                className="ml-1 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onOpenAuth(1)}
                className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-[#14161F] hover:bg-white/10 text-xs font-semibold text-slate-200 transition-all"
              >
                <User className="w-3.5 h-3.5 text-gold-400" />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => onOpenAuth(1)}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500/20 text-xs font-semibold text-gold-300 transition-all"
              >
                <UserPlus className="w-3.5 h-3.5 text-gold-400" />
                <span>Create Account</span>
              </button>
            </div>
          )}

          {/* Reserve Table Button */}
          <button
            onClick={onOpenReservation}
            className="gold-btn px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-widest flex items-center space-x-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>
    </nav>
  );
};


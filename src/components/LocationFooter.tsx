import React from 'react';
import { MapPin, Phone, Mail, Car, Smartphone, CreditCard, Utensils } from 'lucide-react';

export const LocationFooter: React.FC = () => {
  return (
    <footer id="location" className="bg-[#050608] border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1: WebResto Brand & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-gold-500/40 flex items-center justify-center p-1 bg-black/50">
                <Utensils className="w-4 h-4 text-gold-400" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-white">
                WEBRESTO
              </span>
            </div>

            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-md">
              A refined culinary destination celebrating artisanal gastronomy, fresh coastal seafood, and timeless hospitality.
            </p>

            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>Executive Plaza, Ocean Drive, Main Boulevard</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="font-mono text-gold-300">+255 774 000 999 / +255 22 212 9999</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span>reservations@webresto.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Operating Hours */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-widest text-gold-400">
              Opening Hours
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Monday — Thursday</span>
                <span className="font-semibold text-white">12:00 PM — 23:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Friday — Saturday</span>
                <span className="font-semibold text-gold-400">12:00 PM — 01:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Sunday Brunch</span>
                <span className="font-semibold text-white">11:30 AM — 22:30 PM</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
              <Car className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Complimentary Valet Parking available on arrival.</span>
            </div>
          </div>

          {/* Column 3: Accepted Payment Gateways */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-widest text-gold-400">
              Accepted Payment Systems
            </h4>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We support instant digital reservations with all major local mobile payment networks and international cards:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-3 py-2 rounded-xl bg-[#0F1117] border border-emerald-500/30 text-emerald-400 flex items-center space-x-2">
                <Smartphone className="w-3.5 h-3.5" />
                <span>M-Pesa</span>
              </span>
              <span className="px-3 py-2 rounded-xl bg-[#0F1117] border border-blue-500/30 text-blue-400 flex items-center space-x-2">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Tigo Pesa</span>
              </span>
              <span className="px-3 py-2 rounded-xl bg-[#0F1117] border border-red-500/30 text-red-400 flex items-center space-x-2">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Airtel Money</span>
              </span>
              <span className="px-3 py-2 rounded-xl bg-[#0F1117] border border-gold-500/30 text-gold-400 flex items-center space-x-2">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Visa / Card</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <span>© 2026 WebResto Fine Dining. All Rights Reserved.</span>
          <span className="text-gold-400 font-medium mt-2 sm:mt-0">
            Crafted by Aim'fiz Ibrahim (Quant & Full-Stack Developer)
          </span>
        </div>
      </div>
    </footer>
  );
};

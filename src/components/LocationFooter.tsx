import React from 'react';
import { MapPin, Phone, Mail, Car, Smartphone, CreditCard, ExternalLink } from 'lucide-react';

export const LocationFooter: React.FC = () => {
  return (
    <footer id="location" className="bg-[#08090B] border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-3xl font-bold tracking-widest gold-gradient-text">
                AKEMI
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-gold-500/20 text-gold-400 font-semibold uppercase tracking-wider border border-gold-500/30">
                21st Floor Lounge
              </span>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-md">
              Tanzania’s premier revolving restaurant and executive cocktail lounge. Enjoy uninterrupted 360° views of Dar es Salaam’s skyline and the Indian Ocean.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>Golden Jubilee Towers, 21st Floor, Ohio Street, Dar es Salaam, Tanzania</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="font-mono text-gold-300">+255 774 000 999 / +255 22 212 9999</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span>reservations@akemi.co.tz</span>
              </div>
            </div>

            {/* Payment Badges */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-3">
                Accepted Payment Systems
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center space-x-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Vodacom M-Pesa</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-400 flex items-center space-x-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Tigo Pesa</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-400 flex items-center space-x-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Airtel Money</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center space-x-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Visa / Mastercard</span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Hours & Guidelines */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
              Operating Hours
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
                <span className="text-slate-400">Sunday Brunch & Dinner</span>
                <span className="font-semibold text-white">11:30 AM — 22:30 PM</span>
              </div>
            </div>

            <div className="bg-[#14171D] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              <span className="font-bold text-gold-400 block uppercase">Dining Guidelines</span>
              <p className="text-slate-400 font-light">
                <strong>Dress Code:</strong> Smart Casual / Formal Elegance. Beachwear or athletic shorts are not permitted in the 21st-floor dining room.
              </p>
              <p className="text-slate-400 font-light flex items-center space-x-1">
                <Car className="w-3.5 h-3.5 text-gold-400 inline" />
                <span>Complimentary Valet Parking available at Tower Main Gate.</span>
              </p>
            </div>
          </div>

          {/* Column 3: Interactive Location Map Simulation */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
              Location & Directions
            </h4>

            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl h-56 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map location Dar es Salaam"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Pin indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 rounded-full bg-gold-500 text-black shadow-2xl animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="text-white font-bold bg-black/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                  Ohio St, Dar es Salaam
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-black px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1 shadow-lg"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <span>© 2026 AKEMI Revolving Lounge & Restaurant. All Rights Reserved.</span>
          <span className="text-gold-400 font-medium mt-2 sm:mt-0">
            Crafted by Aim'fiz Ibrahim (Quant & Full-Stack Developer)
          </span>
        </div>
      </div>
    </footer>
  );
};

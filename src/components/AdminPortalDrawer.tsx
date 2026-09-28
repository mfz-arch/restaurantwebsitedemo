import React, { useState } from 'react';
import { MOCK_MENU } from '../data/mockData';
import type { Currency } from '../types/restaurant';
import { LayoutDashboard, ToggleLeft, ToggleRight, TrendingUp } from 'lucide-react';

interface AdminPortalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const AdminPortalDrawer: React.FC<AdminPortalDrawerProps> = ({
  isOpen,
  onClose,
  currency
}) => {
  const [menuItems, setMenuItems] = useState(
    MOCK_MENU.map((item) => ({ ...item, available: true }))
  );

  if (!isOpen) return null;

  const toggleAvailability = (id: string) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, available: !item.available } : item))
    );
  };

  const formatAmount = (usdAmount: number) => {
    if (currency === 'TZS') {
      return `TZS ${(usdAmount * 2600).toLocaleString()}`;
    }
    return `$${usdAmount.toFixed(2)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-[#0F1116] border-l border-gold-500/30 h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">AKEMI Manager Portal</h3>
                <span className="text-xs text-gold-400 font-medium">Real-Time Owner & Hostess Dashboard</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-[#161922] border border-white/5 rounded-2xl p-4 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Tonight Bookings</span>
              <span className="font-serif text-2xl font-bold text-gold-400">24 Tables</span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 mr-0.5" /> +18% vs last week
              </span>
            </div>

            <div className="bg-[#161922] border border-white/5 rounded-2xl p-4 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Expected Revenue</span>
              <span className="font-serif text-xl font-bold text-white">{formatAmount(1420)}</span>
              <span className="text-[10px] text-slate-400 block mt-1">Deposits Paid</span>
            </div>

            <div className="bg-[#161922] border border-white/5 rounded-2xl p-4 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Floor Capacity</span>
              <span className="font-serif text-2xl font-bold text-emerald-400">85% Full</span>
              <span className="text-[10px] text-slate-400 block mt-1">Peak: 20:00 PM</span>
            </div>
          </div>

          {/* Live Reservations Table Feed */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase text-gold-400 tracking-wider mb-3">
              Tonight's VIP Guest Arrival Log
            </h4>
            <div className="space-y-2">
              {[
                { name: 'Dr. Reginald Mengi & Party', time: '19:30', guests: 6, zone: '360° Panoramic Window', status: 'Confirmed (M-Pesa)' },
                { name: 'Aim\'fiz Ibrahim', time: '20:00', guests: 2, zone: 'VIP Executive Booth', status: 'Confirmed (Card)' },
                { name: 'Sarah Jenkins', time: '20:30', guests: 4, zone: 'Sky Lounge Terrace', status: 'Seated' },
              ].map((res, i) => (
                <div key={i} className="bg-[#161922] border border-white/5 rounded-xl p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{res.name}</span>
                    <span className="text-[10px] text-slate-400">{res.zone} • {res.guests} Guests</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-gold-400 block">{res.time}</span>
                    <span className="text-[10px] text-emerald-400">{res.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Item Stock Control */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-gold-400 tracking-wider mb-3">
              Instant Menu Availability Control
            </h4>
            <p className="text-[11px] text-slate-400 mb-3">
              Toggle items off instantly if ingredients are sold out for the evening:
            </p>

            <div className="space-y-2">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#161922] border border-white/5 rounded-xl p-3 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <span className="font-bold text-white block">{item.name}</span>
                      <span className="text-[10px] text-gold-400">{formatAmount(item.priceUSD)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className="flex items-center space-x-2 text-xs font-semibold"
                  >
                    {item.available ? (
                      <span className="text-emerald-400 flex items-center space-x-1">
                        <ToggleRight className="w-6 h-6 text-emerald-400" />
                        <span>Available</span>
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center space-x-1">
                        <ToggleLeft className="w-6 h-6 text-slate-600" />
                        <span>Sold Out</span>
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 mt-6 text-center">
          <p className="text-[11px] text-slate-500">
            AKEMI Management System • Powered by Custom Web Architecture
          </p>
        </div>
      </div>
    </div>
  );
};

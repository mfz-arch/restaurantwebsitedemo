import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MOCK_ZONES } from '../data/mockData';
import type { Currency, MenuItem } from '../types/restaurant';
import { CheckCircle, Sparkles } from 'lucide-react';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  preSelectedZoneId?: string;
  preSelectedDish?: MenuItem | null;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
  currency,
  preSelectedZoneId,
  preSelectedDish
}) => {
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-09-29');
  const [time, setTime] = useState('19:30');
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedZoneId, setSelectedZoneId] = useState(preSelectedZoneId || MOCK_ZONES[0].id);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'tigopesa' | 'airtel' | 'card' | 'pay_at_venue'>('mpesa');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isOpen) return null;

  const currentZone = MOCK_ZONES.find((z) => z.id === selectedZoneId) || MOCK_ZONES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'AKM-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setIsConfirmed(true);

    // Fire celebratory confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const formatDepositPrice = (usdAmount: number) => {
    if (currency === 'TZS') {
      const tzs = Math.round(usdAmount * 2600);
      return `TZS ${tzs.toLocaleString()}`;
    }
    return `$${usdAmount.toFixed(2)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="glass-panel max-w-2xl w-full rounded-3xl overflow-hidden border border-gold-500/40 p-6 sm:p-8 relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition-all"
        >
          ✕
        </button>

        {!isConfirmed ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                21st Floor VIP Reservation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Reserve Your Table Experience
              </h2>
              {preSelectedDish && (
                <div className="mt-2 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pre-selected item: <strong>{preSelectedDish.name}</strong></span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Zone Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  1. Choose Dining Zone / Atmosphere
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {MOCK_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSelectedZoneId(zone.id)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        selectedZoneId === zone.id
                          ? 'bg-gold-500/20 border-gold-500 text-gold-300 font-bold'
                          : 'bg-[#14171D] border-white/10 text-slate-300 hover:border-white/30'
                      }`}
                    >
                      <span className="block font-bold text-white truncate">{zone.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{zone.capacity}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date, Time & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                  >
                    <option value="18:30">18:30 PM (Sunset Hour)</option>
                    <option value="19:30">19:30 PM (Executive Dinner)</option>
                    <option value="20:30">20:30 PM (Night Panorama)</option>
                    <option value="21:30">21:30 PM (Late Lounge)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Aim'fiz Ibrahim"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Phone (Tanzania / Intl)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+255 77... / M-Pesa"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">
                  Special Occasion or Preferences
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anniversary celebration, birthday dessert setup, quiet window table"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#14171D] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-gold-500 focus:outline-none"
                />
              </div>

              {/* Deposit & Payment Methods */}
              <div className="pt-2 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-300 uppercase">
                    Guarantee Deposit ({currentZone.name})
                  </span>
                  <span className="text-sm font-serif font-bold text-gold-400">
                    {formatDepositPrice(currentZone.minimumSpendUSD)}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                      paymentMethod === 'mpesa'
                        ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400'
                        : 'bg-[#14171D] border-white/10 text-slate-400'
                    }`}
                  >
                    📱 M-Pesa
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tigopesa')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                      paymentMethod === 'tigopesa'
                        ? 'bg-blue-950/60 border-blue-500 text-blue-400'
                        : 'bg-[#14171D] border-white/10 text-slate-400'
                    }`}
                  >
                    📱 Tigo Pesa
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('airtel')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                      paymentMethod === 'airtel'
                        ? 'bg-red-950/60 border-red-500 text-red-400'
                        : 'bg-[#14171D] border-white/10 text-slate-400'
                    }`}
                  >
                    📱 Airtel Money
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-gold-500/20 border-gold-500 text-gold-400'
                        : 'bg-[#14171D] border-white/10 text-slate-400'
                    }`}
                  >
                    💳 Visa / Card
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-black font-semibold text-sm uppercase tracking-wider shadow-xl hover:shadow-gold-500/25 transition-all"
              >
                Confirm & Guarantee Reservation
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation VIP Pass Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9 animate-bounce" />
            </div>

            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest block mb-1">
              Reservation Guaranteed
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Welcome to AKEMI, {guestName}!
            </h3>
            <p className="text-slate-300 text-xs font-light max-w-md mx-auto mb-6">
              A SMS confirmation has been sent to <strong>{phone}</strong>. Present your VIP pass code at the 21st Floor reception upon arrival.
            </p>

            {/* VIP Pass Voucher Ticket */}
            <div className="bg-[#14171D] border border-gold-500/30 rounded-2xl p-6 max-w-md mx-auto text-left shadow-2xl relative overflow-hidden mb-6">
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-[10px] text-gold-400 font-bold tracking-widest uppercase block">
                    AKEMI VIP BOARDING PASS
                  </span>
                  <span className="text-lg font-serif font-bold text-white">
                    {currentZone.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">PASS CODE</span>
                  <span className="font-mono text-sm font-bold text-gold-400">{reservationCode}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Date & Time</span>
                  <span className="font-semibold text-slate-200">{date} at {time}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Party Size</span>
                  <span className="font-semibold text-slate-200">{guestsCount} Guests</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-white/20">
                <span className="text-[10px] text-slate-400">Payment Verified ({paymentMethod.toUpperCase()})</span>
                <span className="text-xs font-bold text-emerald-400">✅ Deposit Secured</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsConfirmed(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-gold-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-gold-400 transition-all"
            >
              Done & Return to Main Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

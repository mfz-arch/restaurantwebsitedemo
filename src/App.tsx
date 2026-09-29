import { useState } from 'react';
import type { Currency, MenuItem } from './types/restaurant';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DishesShowcase } from './components/DishesShowcase';
import { ChefSection } from './components/ChefSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationFooter } from './components/LocationFooter';
import { TableReservationModal } from './components/TableReservationModal';

export function App() {
  const [currency, setCurrency] = useState<Currency>('TZS');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [preSelectedDish, setPreSelectedDish] = useState<MenuItem | null>(null);

  const handleOpenReservationForDish = (dish: MenuItem) => {
    setPreSelectedDish(dish);
    setIsReservationOpen(true);
  };

  const handleGeneralReservationClick = () => {
    setPreSelectedDish(null);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 font-sans selection:bg-gold-500 selection:text-black">
      {/* Clean Public Navigation Bar - WebResto */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={handleGeneralReservationClick}
      />

      {/* Main WebResto Fine Dining Sections (Photo 4 Design) */}
      <main>
        {/* Hero Section */}
        <Hero onReserveClick={handleGeneralReservationClick} />

        {/* Signature Dishes Showcase */}
        <DishesShowcase
          currency={currency}
          onSelectDishForBooking={handleOpenReservationForDish}
        />

        {/* Meet Our Executive Head Chef */}
        <ChefSection />

        {/* Guest Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Location & Opening Hours */}
        <LocationFooter />
      </main>

      {/* Interactive Reservation Modal & VIP Boarding Voucher Generator */}
      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        currency={currency}
        preSelectedDish={preSelectedDish}
      />
    </div>
  );
}

export default App;

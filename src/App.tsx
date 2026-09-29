import { useState } from 'react';
import type { Currency, MenuItem } from './types/restaurant';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DishesShowcase } from './components/DishesShowcase';
import { ChefSection } from './components/ChefSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationFooter } from './components/LocationFooter';
import { TableReservationModal } from './components/TableReservationModal';
import { AdminPortalDrawer } from './components/AdminPortalDrawer';

export function App() {
  const [currency, setCurrency] = useState<Currency>('TZS');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
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
      {/* Navigation Bar */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={handleGeneralReservationClick}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections (LUMIÈRE Design - Photo 4) */}
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

        {/* Location, Operating Hours & Directions */}
        <LocationFooter />
      </main>

      {/* Interactive Reservation Modal & VIP Boarding Pass Generator */}
      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        currency={currency}
        preSelectedDish={preSelectedDish}
      />

      {/* Restaurant Owner Manager Portal Drawer */}
      <AdminPortalDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currency={currency}
      />
    </div>
  );
}

export default App;

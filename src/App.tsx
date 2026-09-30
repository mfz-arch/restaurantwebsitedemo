import { useState } from 'react';
import type { Currency, MenuItem } from './types/restaurant';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DishesShowcase } from './components/DishesShowcase';
import { ChefSection } from './components/ChefSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationFooter } from './components/LocationFooter';
import { TableReservationModal, type UserProfile } from './components/TableReservationModal';

export function App() {
  const [currency, setCurrency] = useState<Currency>('TZS');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [preSelectedDish, setPreSelectedDish] = useState<MenuItem | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [modalInitialStep, setModalInitialStep] = useState<1 | 2>(1);

  const handleOpenReservationForDish = (dish: MenuItem) => {
    setPreSelectedDish(dish);
    setModalInitialStep(currentUser ? 2 : 1);
    setIsReservationOpen(true);
  };

  const handleGeneralReservationClick = () => {
    setPreSelectedDish(null);
    setModalInitialStep(currentUser ? 2 : 1);
    setIsReservationOpen(true);
  };

  const handleOpenAuth = (step: 1 | 2 = 1) => {
    setPreSelectedDish(null);
    setModalInitialStep(step);
    setIsReservationOpen(true);
  };

  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 font-sans selection:bg-gold-500 selection:text-black">
      {/* Clean Public Navigation Bar - WebResto */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={handleGeneralReservationClick}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onSignOut={handleSignOut}
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
        currentUser={currentUser}
        onLoginSuccess={handleLoginSuccess}
        initialStep={modalInitialStep}
      />
    </div>
  );
}

export default App;


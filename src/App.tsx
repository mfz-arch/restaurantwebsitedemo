import { useState } from 'react';
import type { Currency, MenuItem } from './types/restaurant';
import { Navbar } from './components/Navbar';
import { WalkthroughHero } from './components/WalkthroughHero';
import { AmbianceShowcase } from './components/AmbianceShowcase';
import { GourmetMenu } from './components/GourmetMenu';
import { TableReservationModal } from './components/TableReservationModal';
import { AdminPortalDrawer } from './components/AdminPortalDrawer';
import { LocationFooter } from './components/LocationFooter';

export function App() {
  const [currency, setCurrency] = useState<Currency>('TZS');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preSelectedZoneId, setPreSelectedZoneId] = useState<string | undefined>(undefined);
  const [preSelectedDish, setPreSelectedDish] = useState<MenuItem | null>(null);

  const handleOpenReservationForZone = (zoneId: string) => {
    setPreSelectedZoneId(zoneId);
    setPreSelectedDish(null);
    setIsReservationOpen(true);
  };

  const handleOpenReservationForDish = (dish: MenuItem) => {
    setPreSelectedDish(dish);
    setIsReservationOpen(true);
  };

  const handleGeneralReservationClick = () => {
    setPreSelectedZoneId(undefined);
    setPreSelectedDish(null);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-slate-100 font-sans selection:bg-gold-500 selection:text-black">
      {/* Fixed Navbar */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={handleGeneralReservationClick}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Walkthrough Sections */}
      <main>
        {/* Scene 1 & 2: Interactive Hero Walkthrough */}
        <WalkthroughHero onReserveClick={handleGeneralReservationClick} />

        {/* Scene 3: Dining Ambiance & Alcoves */}
        <AmbianceShowcase
          currency={currency}
          onSelectZoneForBooking={handleOpenReservationForZone}
        />

        {/* Scene 4: Gourmet Menu Selection */}
        <GourmetMenu
          currency={currency}
          onSelectDishForReservation={handleOpenReservationForDish}
        />

        {/* Location & Directions */}
        <LocationFooter />
      </main>

      {/* Modals & Overlays */}
      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        currency={currency}
        preSelectedZoneId={preSelectedZoneId}
        preSelectedDish={preSelectedDish}
      />

      <AdminPortalDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currency={currency}
      />
    </div>
  );
}

export default App;

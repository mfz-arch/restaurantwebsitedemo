import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Volume2, VolumeX, Eye, Sparkles, MapPin } from 'lucide-react';

interface WalkthroughHeroProps {
  onReserveClick: () => void;
}

const SCENES = [
  {
    id: 'exterior',
    title: 'Golden Jubilee Sky Tower',
    location: '21st Floor • Ohio Street, Dar es Salaam',
    description: 'Ascend to East Africa’s highest revolving sanctuary. Experience panoramic sunset vistas where the skyline meets the Indian Ocean.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    tag: '01. Arrival',
    badge: 'Panoramic Tower'
  },
  {
    id: 'entrance',
    title: 'Velvet Reception & Cocktail Lounge',
    location: 'Champagne & Vintage Wine Cellar',
    description: 'Immerse yourself in quiet grandeur. Private sommelier reception, warm ambient lighting, and hand-selected vintage champagnes.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80',
    tag: '02. Step Inside',
    badge: 'Velvet Lounge'
  },
  {
    id: 'dining-room',
    title: '360° Revolving Dining Floor',
    location: 'Full Rotation Every 90 Minutes',
    description: 'Every table offers an ever-changing horizon. Watch the vibrant city lights of Dar es Salaam glide gently past your table.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
    tag: '03. Main Floor',
    badge: '360° Horizon'
  },
  {
    id: 'chef-table',
    title: 'Chef’s Charcoal Theater',
    location: 'Live Acacia Wood Grills',
    description: 'Watch Michelin-experienced culinary masters prepare fresh Zanzibar rock lobster and Grade A5 Wagyu over open acacia charcoal.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80',
    tag: '04. Culinary Flame',
    badge: 'Chef’s Table'
  }
];

export const WalkthroughHero: React.FC<WalkthroughHeroProps> = ({ onReserveClick }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentScene = SCENES[activeSceneIndex];

  return (
    <section id="walkthrough" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-12">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentScene.image}
            alt={currentScene.title}
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15] saturate-[1.1]"
          />
          {/* Subtle Ambient Vignette & Radial Spotlights */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080A]/90 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Top Header Bar Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-black/70 border border-gold-500/30 backdrop-blur-xl text-xs font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-gold-300 font-sans tracking-wide">360° Revolving Floor Active Tonight</span>
        </div>

        {/* Ambient Sound Simulation */}
        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-black/70 border border-white/10 hover:border-gold-500/50 backdrop-blur-xl text-xs font-medium text-slate-300 hover:text-gold-400 transition-all duration-300 shadow-xl"
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
              <span>Playing Velvet Jazz Audio</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-500" />
              <span>Enable Lounge Music</span>
            </>
          )}
        </button>
      </div>

      {/* Center Hero Walkthrough Spotlight */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          <motion.div
            key={currentScene.id + '-text'}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{currentScene.tag} • {currentScene.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-2xl">
              {currentScene.title}
            </h1>

            {/* Location / Subtitle */}
            <div className="flex items-center space-x-2 text-gold-400 text-sm sm:text-base font-semibold tracking-wider uppercase mb-5">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>{currentScene.location}</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl drop-shadow">
              {currentScene.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onReserveClick}
                className="shimmer-btn px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-black font-bold text-xs uppercase tracking-[0.15em] shadow-[0_0_35px_rgba(212,175,55,0.35)] hover:scale-[1.03] transition-all duration-300 flex items-center space-x-3"
              >
                <span>Reserve VIP Table Experience</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={() => setActiveSceneIndex((prev) => (prev + 1) % SCENES.length)}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center space-x-2.5 group"
              >
                <Eye className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Next Walkthrough View</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scene Thumbnail Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SCENES.map((scene, idx) => {
            const isActive = activeSceneIndex === idx;
            return (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`relative overflow-hidden rounded-2xl p-3 text-left transition-all duration-400 border flex items-center space-x-3 ${
                  isActive
                    ? 'bg-[#181B24]/90 border-gold-500/60 shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-gold-500/50'
                    : 'bg-[#0F1117]/60 border-white/10 hover:border-white/25 hover:bg-[#141720]/80 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Scene Mini Image */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <img src={scene.image} alt={scene.title} className="w-full h-full object-cover" />
                </div>

                <div className="truncate">
                  <span className={`text-[10px] font-bold tracking-widest uppercase block ${isActive ? 'text-gold-400' : 'text-slate-400'}`}>
                    {scene.tag}
                  </span>
                  <span className="text-xs font-serif font-bold text-white truncate block">
                    {scene.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

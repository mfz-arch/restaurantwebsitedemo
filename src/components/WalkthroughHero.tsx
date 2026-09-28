import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Volume2, VolumeX, Eye, ArrowDown } from 'lucide-react';

interface WalkthroughHeroProps {
  onReserveClick: () => void;
}

const SCENES = [
  {
    id: 'exterior',
    title: 'Golden Jubilee Sky Tower',
    subtitle: 'Arriving at 21st Floor, Ohio Street • Dar es Salaam',
    description: 'Tanzania’s premier luxury dining address. Ascend to the highest revolving lounge overlooking the Indian Ocean coastline.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    tag: 'Exterior Arrival',
  },
  {
    id: 'entrance',
    title: 'The Velvet Lounge Entrance',
    subtitle: 'Warm Champagne Lighting & Private Reception',
    description: 'Step into an atmosphere of quiet grandeur. Our sommeliers and hosts welcome you with pre-dinner vintage aperitifs.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80',
    tag: 'Step Inside',
  },
  {
    id: 'dining-room',
    title: '360° Revolving Dining Floor',
    subtitle: 'Full Revolution Every 90 Minutes',
    description: 'Watch the sun set over the azure horizon of Dar es Salaam while enjoying handcrafted culinary masterpieces.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
    tag: 'The Main Floor',
  },
  {
    id: 'chef-table',
    title: "Chef's Open Flame Kitchen",
    subtitle: 'Artisanal Swahili Seafood & Premium Cuts',
    description: 'Watch Executive Chefs prepare fresh Indian Ocean rock lobster and prime Wagyu steaks over fragrant acacia charcoal.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80',
    tag: 'Cuisine Mastery',
  }
];

export const WalkthroughHero: React.FC<WalkthroughHeroProps> = ({ onReserveClick }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentScene = SCENES[activeSceneIndex];

  const handleNextScene = () => {
    setActiveSceneIndex((prev) => (prev + 1) % SCENES.length);
  };

  return (
    <section id="walkthrough" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Carousel with Smooth Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentScene.image}
            alt={currentScene.title}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
          />
          {/* Subtle Dynamic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex flex-col justify-between min-h-[85vh]">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/60 border border-gold-500/30 backdrop-blur-md text-xs font-semibold text-gold-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open Tonight • 360° Revolving Panorama Active</span>
          </div>

          {/* Ambience Audio Simulation Toggle */}
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/60 border border-white/10 hover:border-gold-500/40 backdrop-blur-md text-xs font-medium text-slate-300 hover:text-gold-400 transition-all duration-300"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
                <span>Ambient Jazz Audio: Active</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span>Play Dining Lounge Music</span>
              </>
            )}
          </button>
        </div>

        {/* Center Scene Presentation */}
        <div className="my-auto max-w-3xl">
          <motion.div
            key={currentScene.id + '-content'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 rounded bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-gold-500/30">
              {currentScene.tag} • Scene {activeSceneIndex + 1} of {SCENES.length}
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              {currentScene.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-gold-300/90 mb-4 font-sans tracking-wide">
              {currentScene.subtitle}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8 max-w-2xl">
              {currentScene.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onReserveClick}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-black font-semibold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center space-x-3"
              >
                <span>Book This Table Experience</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleNextScene}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-medium text-sm transition-all duration-300 flex items-center space-x-2 group"
              >
                <Eye className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
                <span>Next Walkthrough Scene</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Interactive Scene Selector & Progress */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Scene Dots */}
          <div className="flex items-center space-x-3">
            {SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`group flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  activeSceneIndex === idx
                    ? 'bg-gold-500/20 border border-gold-500 text-gold-400'
                    : 'bg-black/40 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeSceneIndex === idx ? 'bg-gold-400' : 'bg-slate-500'}`} />
                <span className="text-xs font-semibold">{scene.tag}</span>
              </button>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#ambiance"
            className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-gold-400 transition-colors group"
          >
            <span>Explore Dining Atmosphere</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

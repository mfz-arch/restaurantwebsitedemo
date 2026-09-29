import React from 'react';
import { Award, Quote } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-28 bg-[#090A0E] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Image with Gold Border Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Executive Head Chef Jean-Luc Martin"
                className="w-full h-[480px] object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-transparent to-transparent opacity-80" />

              {/* Chef Name Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-gold-500/30">
                <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                  Executive Head Chef
                </span>
                <span className="font-serif text-2xl font-bold text-white block">
                  Jean-Luc Martin
                </span>
                <span className="text-xs text-slate-400 font-light">
                  15+ Years of Culinary Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Chef Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-[1px] bg-gold-500" />
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">
                Culinary Mastery
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              Meet Our Executive Head Chef
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              With international fine dining experience and a Michelin-star background, Chef Jean-Luc Martin brings artistry, precision, and passion to every dish served at LUMIÈRE.
            </p>

            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Combining classic French culinary techniques with fresh Indian Ocean rock lobsters, wild snapper, and aromatic spices from Zanzibar, every menu is a celebration of flavor and refinement.
            </p>

            {/* Quote Box */}
            <div className="p-6 rounded-2xl bg-[#111319] border border-gold-500/20 relative">
              <Quote className="w-8 h-8 text-gold-500/30 absolute top-4 right-4" />
              <p className="font-serif italic text-gold-300 text-base mb-3">
                "Cooking is not merely about feeding the body; it is an art of creating unforgettable memories around the table."
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Award className="w-4 h-4 text-gold-400" />
                <span>Winner of International Culinary Excellence Award 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

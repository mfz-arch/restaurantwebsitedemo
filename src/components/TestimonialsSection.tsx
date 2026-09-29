import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'David L.',
    role: 'Executive Guest',
    comment: 'Exceptional service and outstanding cuisine. Every dish felt carefully crafted, and the attention to detail really sets LUMIÈRE apart.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Omar H.',
    role: 'Food & Wine Critic',
    comment: 'One of the finest dining experiences in East Africa. Beautiful presentation, calm ambiance, and Zanzibar flavors that leave a lasting impression.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Talha M.',
    role: 'Private Event Host',
    comment: 'From the moment we arrived, the service was flawless. The rock lobster was incredible, and our anniversary celebration was unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 4,
    name: 'Laiba M.',
    role: 'Frequent Guest',
    comment: 'A perfect balance of elegance and taste. The atmosphere is warm, the seafood is fresh, and the 360-degree views are breathtaking.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 bg-[#08090C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-12 h-[1px] bg-gold-500/40" />
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">
              Guest Experiences
            </span>
            <div className="w-12 h-[1px] bg-gold-500/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Real stories and ratings from guests who experienced fine dining at LUMIÈRE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="lumiere-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center space-x-1 text-gold-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Guest Profile */}
              <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
                />
                <div>
                  <span className="font-serif font-bold text-white text-sm block leading-tight">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-gold-400 uppercase tracking-wider block">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

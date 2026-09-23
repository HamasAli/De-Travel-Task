"use client";

import React, { useState } from "react";
import Image from "next/image";
import { config } from "@/config";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Exactly 2 sets for mathematically seamless 0% -> -50% marquee loop
  const duplicatedTestimonials = [
    ...config.testimonials,
    ...config.testimonials,
  ];

  return (
    <section 
      className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
            Client Reviews &amp; Feedback
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Feedback from families, couples, and groups who booked their holidays, flights, and hotels with us.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Track */}
      <div className="relative w-full overflow-hidden py-2">
        <div 
          className="flex gap-4 sm:gap-6 w-max animate-marquee px-4"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[360px] shrink-0 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-brand-primary">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded truncate max-w-[150px]">
                    {item.trip.split("—")[0].trim()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1 truncate">
                      {item.name}
                      <CheckCircle className="w-3 h-3 text-brand-primary shrink-0" />
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                <Quote className="w-4 h-4 text-slate-300 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

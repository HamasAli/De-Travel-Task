"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config, TourPackage } from "@/config";
import TravelHeroSearch from "@/components/home/TravelHeroSearch";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TravelInquiryModal, { TravelInquiryData } from "@/components/common/TravelInquiryModal";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Send,
  MessageCircle,
  Phone
} from "lucide-react";

export default function HomePage() {
  const [inquiryModalData, setInquiryModalData] = useState<TravelInquiryData | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const featuredPackage = config.tourPackages.find((pkg) => pkg.featured) || config.tourPackages[0];

  const handleInquirePackage = (pkg: TourPackage) => {
    setInquiryModalData({
      serviceType: "Package",
      title: `${pkg.flag} ${pkg.title}`,
      details: `${pkg.duration} | Custom Quote on Request`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#f8fafc]">

      {/* 1. HERO SECTION (FULL SCREEN) */}
      <section className="relative w-full min-h-[100dvh] pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 px-3 sm:px-6 lg:px-8 bg-slate-950 flex flex-col justify-between items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <Image
            src="/images/travel_hero.jpg"
            alt={config.businessName}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center w-full h-full opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/55 to-slate-950/90" />
        </div>

        {/* Hero Content (Centered) */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full my-auto py-4 sm:py-6">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-3 max-w-3xl px-2 break-words">
            Explore Pakistan <br className="hidden sm:inline" />
            <span className="text-brand-accent">&amp; Worldwide</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed px-3">
            Hajj, Umrah &amp; International Tours, Visa Assistance, and Flight &amp; Hotel Bookings. Your trusted partner in Mustafabad, Lahore.
          </p>

          {/* Tabbed Hero Search Bar */}
          <div className="w-full px-1 sm:px-0">
            <TravelHeroSearch />
          </div>
        </div>

        {/* Bottom Trust Stats */}
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 w-full md:w-auto text-center md:text-left">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <span className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#featured-package"
            className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            <span>Explore Packages</span>
            <ChevronDown className="w-4 h-4 text-brand-primary" />
          </a>
        </div>
      </section>

      {/* 2. FEATURED HOLIDAY PACKAGE */}
      <section id="featured-package" className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Hajj, Umrah &amp; Global Travel</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Hajj, Umrah &amp; International Tours
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Handpicked tour packages for Hajj, Umrah, and top global holiday destinations (Dubai, Turkey, Thailand, Malaysia) — planned end-to-end for families, couples, and groups.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="text-xs font-bold uppercase text-slate-800 tracking-wide">
                  What&apos;s Included:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-800">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span>Return Air Tickets</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span>Hotel Stay</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span>Transfers &amp; Sightseeing</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/packages"
                  className="btn-brand-primary px-6 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2"
                >
                  <span>View All Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${config.phone}`}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-accent" />
                  <span>Call {config.hotlineDisplay}</span>
                </a>
              </div>
            </div>

            {/* Featured Package Box */}
            <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {featuredPackage.flag} {featuredPackage.title}
                </h3>
                <span className="bg-brand-primary/20 text-brand-accent border border-brand-primary/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md">
                  {featuredPackage.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredPackage.overview}
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Duration: <strong className="text-white">{featuredPackage.duration}</strong></span>
                <span className="text-brand-accent font-bold">Price on Request</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => handleInquirePackage(featuredPackage)}
                  className="w-full py-2.5 rounded-xl btn-brand-primary text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>
                <Link
                  href="/packages"
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                >
                  <span>All Packages</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">What We Offer</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Core Services
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Hajj, Umrah &amp; International Tours, Visa Assistance, and Flight &amp; Hotel Bookings.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-brand-primary px-5 py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Get Service Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.services.map((service) => (
              <div
                key={service.num}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl font-black text-slate-200">{service.num}</span>
                    <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="w-full btn-brand-primary py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERNATIONAL HOLIDAY PACKAGES CATALOG */}
      <section className="py-16 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Hajj, Umrah &amp; International Tours
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Explore top worldwide destinations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.tourPackages.slice(0, 8).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-2xl">{pkg.flag}</span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {pkg.destination}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {pkg.duration}
                  </span>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                    <div className="text-brand-primary font-bold">Price on Request</div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleInquirePackage(pkg)}
                    className="w-full btn-brand-primary py-2 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-primary text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 5-STEP BOOKING PROCESS */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Our 5-Step Booking Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
              From consultation to travel support, we handle every step of your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {config.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div className="text-2xl font-black text-brand-accent">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. FAQS */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {config.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-slate-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180 text-brand-primary" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {inquiryModalData && (
        <TravelInquiryModal
          isOpen={true}
          initialData={inquiryModalData}
          onClose={() => setInquiryModalData(null)}
        />
      )}
    </div>
  );
}

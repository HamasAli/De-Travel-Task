"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config, TourPackage } from "@/config";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Plane,
  Hotel
} from "lucide-react";
import TravelInquiryModal, { TravelInquiryData } from "@/components/common/TravelInquiryModal";

export default function PackagesPage() {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);
  const [inquiryModalData, setInquiryModalData] = useState<TravelInquiryData | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  const handleGetQuote = (pkg: TourPackage) => {
    setInquiryModalData({
      serviceType: "Package",
      title: `${pkg.flag} ${pkg.title}`,
      details: `${pkg.duration} | Custom Quote on Request`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] pt-24 sm:pt-28">
      {/* Hero */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/travel_package.jpg"
            alt="International Holiday Packages"
            fill
            priority
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/60 to-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            Hajj, Umrah &amp; International Tours
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Explore top worldwide destinations (Dubai, Turkey, Thailand, Malaysia) — transport, hotels, transfers, and sightseeing arranged end-to-end.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span>Flexible Group &amp; Family Options</span>
            <span>•</span>
            <span>Helpline: <strong>{config.phone}</strong></span>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Explore Pakistan &amp; Worldwide Tours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.tourPackages.map((pkg) => {
            const isExpanded = expandedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl">{pkg.flag}</span>
                    <span className="text-[10px] font-bold uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {pkg.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {pkg.destination}, {pkg.country}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {pkg.overview}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                    <div>Duration: <strong>{pkg.duration}</strong></div>
                    <div className="text-brand-primary font-bold">Price on Request</div>
                  </div>

                  {/* Expandable Inclusions */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => toggleExpand(pkg.id)}
                      className="text-xs font-bold text-slate-700 hover:text-brand-primary flex items-center justify-between w-full py-1"
                    >
                      <span>{isExpanded ? "Hide Inclusions" : "View Inclusions"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="mt-2 space-y-1.5 text-xs text-slate-600 pt-1">
                        {pkg.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleGetQuote(pkg)}
                    className="w-full btn-brand-primary py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(`Hello, I want to inquire about the ${pkg.title}`)}`}
                    target="_blank"
                    className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-brand-primary" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flight & Hotel Booking CTA */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
            Only Need a Flight or Hotel?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            We also handle standalone flight ticketing and hotel reservations, without a full holiday package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-brand-primary px-6 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2"
            >
              <Plane className="w-4 h-4" />
              <span>Book a Flight</span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors border border-slate-700"
            >
              <Hotel className="w-4 h-4" />
              <span>Book a Hotel</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
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

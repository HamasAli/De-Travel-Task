"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import {
  ShieldCheck,
  Palmtree,
  Hotel,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-10 sm:mb-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            About {config.businessName}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A Lahore-based travel agency offering Hajj, Umrah &amp; International Tours, Visa Assistance, and Flight &amp; Hotel Bookings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-200">
            <Image
              src="/images/office_location.jpg"
              alt={`${config.businessName} Office, Lahore`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase font-bold text-slate-300">Office Location</span>
              <h3 className="text-sm sm:text-base font-bold">{config.addresses.lahore}</h3>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Your Complete Travel Booking Partner
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>{config.businessName}</strong> provides end-to-end travel planning for families, couples, and groups across Pakistan.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Located at {config.addresses.lahore}, our team specializes in Hajj, Umrah &amp; International Tours across top global destinations (Dubai, Turkey, Thailand, Malaysia), alongside Visa Assistance and Flight &amp; Hotel Bookings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Hajj, Umrah &amp; International Tours</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Visa Assistance &amp; Consultancy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Flight &amp; Hotel Bookings</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Explore Pakistan &amp; Global Itineraries</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/packages"
                className="btn-brand-primary px-6 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                <span>Explore Holiday Packages</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Why Clients Work With Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Palmtree className="w-5 h-5 text-brand-primary" />,
                title: "Curated Holiday Packages",
                desc: "Hand-picked hotels, transfers, and sightseeing for popular international destinations at competitive prices.",
              },
              {
                icon: <Hotel className="w-5 h-5 text-brand-primary" />,
                title: "Wide Booking Network",
                desc: "Access to a broad range of airlines and hotels worldwide, from budget stays to luxury resorts.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-brand-primary" />,
                title: "Reliable Confirmations",
                desc: "Transparent pricing and confirmed bookings, with e-tickets and hotel vouchers issued ahead of departure.",
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-brand-primary" />,
                title: "Direct Communication",
                desc: "Direct WhatsApp contact and status updates throughout your booking and travel timeline.",
              },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border border-slate-800">
          {config.stats.map((st, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{st.value}</div>
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

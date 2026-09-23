"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Palmtree,
  Plane,
  Search,
  Phone,
  FileCheck,
} from "lucide-react";
import TravelInquiryModal, { TravelInquiryData } from "@/components/common/TravelInquiryModal";
import { config } from "@/config";

export default function TravelHeroSearch() {
  const [activeTab, setActiveTab] = useState<"tours" | "visa" | "booking">("tours");

  // Form states
  const [destination, setDestination] = useState("15 Days Economy Umrah");
  const [travelMonth, setTravelMonth] = useState("");
  
  // Visa states
  const [visaCountry, setVisaCountry] = useState("Saudi Arabia (Umrah / Tourist)");
  const [visaType, setVisaType] = useState("Umrah Visa");

  // Booking states
  const [bookingFrom, setBookingFrom] = useState("Lahore");
  const [bookingTo, setBookingTo] = useState("Jeddah / Madinah");
  const [bookingDate, setBookingDate] = useState("");

  const [inquiryModalData, setInquiryModalData] = useState<TravelInquiryData | null>(null);

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryModalData({
      serviceType: "Package",
      title: `Tour Inquiry — ${destination}`,
      details: travelMonth ? `Preferred Travel Month: ${travelMonth}` : undefined,
    });
  };

  const handleVisaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryModalData({
      serviceType: "Visa",
      title: `Visa Assistance Inquiry — ${visaCountry}`,
      details: `Visa Type: ${visaType}`,
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryModalData({
      serviceType: "Flight",
      title: `Flight & Hotel Inquiry — ${bookingFrom}${bookingTo ? ` to ${bookingTo}` : ""}`,
      details: bookingDate ? `Travel Date: ${bookingDate}` : undefined,
    });
  };

  const tabs = [
    { 
      id: "tours", 
      label: "Hajj & Umrah Packages", 
      mobileLabel: "Packages", 
      icon: Palmtree 
    },
    { 
      id: "visa", 
      label: "Umrah Visa Assistance", 
      mobileLabel: "Visa", 
      icon: FileCheck 
    },
    { 
      id: "booking", 
      label: "Flights & Hotels", 
      mobileLabel: "Flights", 
      icon: Plane 
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Outer Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 text-slate-900 overflow-hidden">

        {/* Sleek Tab Bar */}
        <div className="bg-slate-900 p-1.5 sm:p-2 border-b border-slate-800">
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-bold transition-all select-none text-center ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-brand-accent" : "text-slate-400"}`} />
                  <span className="hidden sm:inline whitespace-nowrap">{tab.label}</span>
                  <span className="sm:hidden truncate">{tab.mobileLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: HAJJ & UMRAH TOURS */}
        {activeTab === "tours" && (
          <form onSubmit={handleTourSubmit} className="p-4 sm:p-6 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  Select Tour Destination
                </span>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer mt-0.5"
                >
                  <optgroup label="🕋 Hajj & Umrah">
                    <option value="15 Days Economy Umrah">15 Days Economy Umrah</option>
                    <option value="21 Days Premium Umrah">21 Days Premium Umrah</option>
                    <option value="Premium Hajj Package 2027">Premium Hajj Package 2027</option>
                    <option value="Customized Family Umrah">Customized Family Umrah</option>
                  </optgroup>
                </select>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  Preferred Travel Month
                </span>
                <input
                  type="text"
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  placeholder="e.g. Next Month"
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none mt-0.5 placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full btn-brand-primary py-3 sm:py-3.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Search className="w-4 h-4" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-slate-600">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <Link href="/packages" className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold transition-colors">
                  View All Packages
                </Link>
              </div>
              <a href={`tel:${config.phone}`} className="text-brand-primary font-bold hover:underline text-xs flex items-center gap-1 shrink-0">
                <Phone className="w-3.5 h-3.5" />
                <span>{config.hotlineDisplay}</span>
              </a>
            </div>
          </form>
        )}

        {/* Tab 2: VISA ASSISTANCE */}
        {activeTab === "visa" && (
          <form onSubmit={handleVisaSubmit} className="p-4 sm:p-6 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  Destination Country
                </span>
                <select
                  value={visaCountry}
                  onChange={(e) => setVisaCountry(e.target.value)}
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="Saudi Arabia (Umrah / Tourist)">Saudi Arabia (Umrah / Tourist)</option>
                </select>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  Visa Category
                </span>
                <select
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value)}
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="Umrah Visa">Umrah Visa</option>
                  <option value="Hajj Visa">Hajj Visa</option>
                  <option value="Tourist Visa">Tourist Visa</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full btn-brand-primary py-3 sm:py-3.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Get Assistance</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-1 text-xs text-slate-600">
              <span className="text-[11px] font-medium text-slate-500">Expert guidance on documents, appointments &amp; filing</span>
              <Link href="/contact" className="text-brand-primary font-bold hover:underline shrink-0">
                Contact Visa Desk →
              </Link>
            </div>
          </form>
        )}

        {/* Tab 3: FLIGHT & HOTEL BOOKINGS */}
        {activeTab === "booking" && (
          <form onSubmit={handleBookingSubmit} className="p-4 sm:p-6 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  From City
                </span>
                <input
                  type="text"
                  value={bookingFrom}
                  onChange={(e) => setBookingFrom(e.target.value)}
                  placeholder="Lahore"
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none mt-0.5"
                />
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  To Destination / Hotel
                </span>
                <input
                  type="text"
                  value={bookingTo}
                  onChange={(e) => setBookingTo(e.target.value)}
                  placeholder="e.g. Makkah, Madinah"
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none mt-0.5 placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  Travel Date
                </span>
                <input
                  type="text"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  placeholder="e.g. Flexible"
                  className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none mt-0.5 placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full btn-brand-primary py-3 sm:py-3.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Plane className="w-4 h-4" />
                  <span>Get Fares</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-1 text-xs text-slate-600">
              <span className="text-[11px] font-medium text-slate-500">International flights + Makkah/Madinah hotel reservations</span>
              <Link href="/contact" className="text-brand-primary font-bold hover:underline shrink-0">
                Contact Booking Desk →
              </Link>
            </div>
          </form>
        )}

      </div>

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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("Holiday Package - Dubai");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `*TRAVEL INQUIRY*\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${serviceType}\n*Details:* ${message || "Interested in travel packages & booking assistance."}\n\n_Sent via ${config.businessName}_`;

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-10 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2.5">
            Contact <span className="text-brand-accent">{config.shortName}</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out for Hajj, Umrah &amp; International Tours, Visa Assistance, and Flight &amp; Hotel Bookings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left Col: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Direct Contact Channels</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                  <Phone className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone &amp; WhatsApp</div>
                  <a href={`tel:${config.phone}`} className="text-base font-bold text-slate-900 hover:text-brand-primary transition-colors">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                  <Mail className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Inquiries</div>
                  <a href={`mailto:${config.email}`} className="text-sm font-semibold text-slate-800 hover:text-brand-primary transition-colors">
                    {config.email}
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp */}
              <div className="pt-2 space-y-2.5">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="btn-brand-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </Link>

                <Link
                  href={config.socials.facebook}
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all"
                >
                  <svg width="16" height="16" className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                  </svg>
                  <span>Follow on Facebook</span>
                </Link>

                {config.socials.instagram && (
                  <Link
                    href={config.socials.instagram}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all"
                  >
                    <svg width="16" height="16" className="w-4 h-4 fill-[#E4405F] shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Follow on Instagram</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3 border border-slate-800">
              <h3 className="text-base font-bold text-white">Head Office</h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Lahore Head Office</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {config.addresses.lahore}
                  </p>
                  <div className="mt-2.5 inline-block text-[11px] text-slate-400 font-medium">
                    Timing: Mon - Sat: 9:30 AM - 7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Send Travel Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in your details below and our travel desk will assist you.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Inquiry Sent</h4>
                  <p className="text-xs text-slate-600 max-w-sm leading-relaxed mb-4">
                    WhatsApp has opened with your inquiry details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service / Package Interested In
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-white focus:outline-none focus:border-slate-400"
                    >
                      <option value="Hajj & Umrah Tour">Hajj & Umrah Tour</option>
                      <option value="International Tour (Dubai, Turkey, Thailand, Malaysia)">International Tour (Dubai, Turkey, Thailand, Malaysia)</option>
                      <option value="Visa Assistance (Worldwide Visas)">Visa Assistance (Worldwide Visas)</option>
                      <option value="Flight Booking (International)">Flight Booking (International)</option>
                      <option value="Hotel Booking (Worldwide Hotels & Resorts)">Hotel Booking (Worldwide Hotels &amp; Resorts)</option>
                      <option value="Group & Corporate Tour">Group &amp; Corporate Tour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Query / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your travel dates, travel history, or specific questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 resize-none focus:outline-none focus:border-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-primary text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

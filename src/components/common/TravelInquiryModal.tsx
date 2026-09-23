"use client";

import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { 
  X, 
  Send, 
  Phone, 
  User, 
  Calendar, 
  Users, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck
} from "lucide-react";

export interface TravelInquiryData {
  serviceType: "Package" | "Flight" | "Hotel" | "Group" | "General" | "Visa";
  title?: string;
  details?: string;
  price?: string | number;
}

interface TravelInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: TravelInquiryData | null;
}

export default function TravelInquiryModal({
  isOpen,
  onClose,
  initialData,
}: TravelInquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Lahore");
  const [applicants, setApplicants] = useState("1 Traveler");
  const [customNote, setCustomNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSuccess(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const serviceTitle = initialData?.title || `Travel & Booking Inquiry`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `*🌟 TRAVEL INQUIRY - ${config.businessName}*\n\n` +
      `📌 *Selected Package / Service:* ${serviceTitle}\n` +
      (initialData?.details ? `ℹ️ *Details:* ${initialData.details}\n` : "") +
      `👤 *Name:* ${name}\n` +
      `📱 *WhatsApp / Phone:* ${phone}\n` +
      (email ? `✉️ *Email:* ${email}\n` : "") +
      `📍 *City:* ${city}\n` +
      `👥 *Number of Travelers:* ${applicants}\n` +
      (customNote ? `📝 *Specific Query / Requirements:* ${customNote}\n` : "") +
      `\n_Sent via ${config.businessName} Online Portal_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-scale-up max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-5 sm:p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent mb-1.5">
            <FileCheck className="w-4 h-4 text-brand-primary" />
            <span>Travel &amp; Booking Desk</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {serviceTitle}
          </h3>

          {initialData?.details && (
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              {initialData.details}
            </p>
          )}
        </div>

        {/* Body Form */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Inquiry Dispatched Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mb-6">
                Your travel inquiry has been forwarded to our team. WhatsApp has opened with your inquiry.
              </p>
              <button
                onClick={onClose}
                className="btn-brand-primary px-8 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                    <span>WhatsApp / Contact *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 7525783"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] bg-slate-50/50"
                  />
                </div>
              </div>

              {/* City & Applicants */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Your City</span>
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] bg-slate-50/50 cursor-pointer"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad/Rawalpindi">Islamabad / Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Sialkot / Gujranwala">Sialkot / Gujranwala</option>
                    <option value="Other City / Overseas">Other City / Overseas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Number of Travelers</span>
                  </label>
                  <select
                    value={applicants}
                    onChange={(e) => setApplicants(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] bg-slate-50/50 cursor-pointer"
                  >
                    <option value="1 Traveler">1 Traveler (Solo)</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="3-5 Travelers (Family/Group)">3-5 Travelers (Family / Group)</option>
                    <option value="6+ Travelers (Group/Corporate)">6+ Travelers (Group / Corporate)</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Preferred Travel Dates or Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Planning to travel in the last week of December, need a family package with connecting flights..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] bg-slate-50/50"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-brand-primary py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98] mt-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Connecting to Travel Desk..." : "Send WhatsApp Inquiry"}</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Trusted Booking Support</span>
                </span>
                <span>•</span>
                <span>Quick Response</span>
                <span>•</span>
                <span>Confidential</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

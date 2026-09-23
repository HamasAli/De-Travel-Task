"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Palmtree,
  MapPinned
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white shadow-sm shrink-0 border border-slate-200">
                <Image
                  src={config.logoUrl}
                  alt={`${config.businessName} Logo`}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                  Elite One
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">
                  <span className="text-brand-accent">TRAVELS</span>
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A Lahore-based travel agency offering <strong className="text-white">Hajj, Umrah &amp; International Tours</strong>, <strong className="text-white">Visa Assistance</strong>, and <strong className="text-white">Flight &amp; Hotel Bookings</strong> to explore Pakistan and destinations worldwide.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Hajj, Umrah &amp; International Tour Operator</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Visa Assistance &amp; 24/7 Booking Support</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Link
                href={config.socials.facebook}
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-[#1877F2] text-slate-300 hover:text-white transition-all border border-slate-800 text-xs font-bold active:scale-95"
                aria-label="Facebook Page"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
                <span>Facebook</span>
              </Link>
              {config.socials.instagram && (
                <Link
                  href={config.socials.instagram}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] text-slate-300 hover:text-white transition-all border border-slate-800 text-xs font-bold active:scale-95"
                  aria-label="Instagram Profile"
                >
                  <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </Link>
              )}
            </div>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <Palmtree className="w-4 h-4 text-brand-accent" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors font-medium">
                  Hajj, Umrah &amp; International Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary transition-colors">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary transition-colors">
                  Flight &amp; Hotel Bookings
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors">
                  Explore Pakistan Tours
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors">
                  Worldwide Holiday Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <MapPinned className="w-4 h-4 text-brand-primary" />
              <span>Popular Destinations</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors font-medium">
                  Dubai, UAE
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors">
                  Bangkok &amp; Pattaya, Thailand
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors">
                  Istanbul, Turkey
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors">
                  Kuala Lumpur &amp; Langkawi, Malaysia
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-primary transition-colors">
                  Maldives
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>Contact Desk</span>
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${config.phone}`} className="hover:text-white font-bold text-slate-200">
                    {config.phone}
                  </a>
                  <span className="block text-[11px] text-slate-500">24/7 Travel Support Hotline</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <a href={`mailto:${config.email}`} className="hover:text-white">
                  {config.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300 block">Head Office:</span>
                  <span className="leading-tight block">{config.addresses.lahore}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="btn-brand-primary w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direct Inquiry</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p className="text-slate-400">
              Website made by{" "}
              <a
                href="https://www.codeencoders.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-brand-accent font-bold transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-brand-accent"
              >
                CodeEncoders
              </a>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-brand-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}

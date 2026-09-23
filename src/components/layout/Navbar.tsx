"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      name: "Hajj & Umrah Packages",
      href: "/packages",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar */}
      <div className={`hidden lg:block transition-all duration-200 text-xs ${
        isScrolled 
          ? "bg-slate-900 text-slate-300 py-1.5 border-b border-slate-800" 
          : "bg-slate-950/85 backdrop-blur-md text-slate-200 py-2 border-b border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <a href={`tel:${config.phone}`} className="hover:text-brand-accent transition-colors font-medium">
                {config.phone}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span className="font-medium text-slate-300">Lahore, Pakistan</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-medium text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>24/7 Travel Support Desk</span>
            </span>
            <span className="text-slate-600">|</span>
            <Link 
              href={config.whatsappLink} 
              target="_blank" 
              className="text-brand-accent hover:opacity-80 font-bold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-200/80" 
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-3.5 sm:py-4 text-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-sm shrink-0 bg-white border border-slate-200">
              <Image
                src={config.logoUrl}
                alt={`${config.businessName} Logo`}
                fill
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xs sm:text-base font-black tracking-tight leading-none ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}>
                Elite One
              </span>
              <span className={`text-[8px] sm:text-[9px] tracking-wider uppercase font-extrabold mt-0.5 ${
                isScrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                <span className={isScrolled ? "text-brand-primary" : "text-brand-accent"}>TRAVELS</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                pathname === "/"
                  ? isScrolled
                    ? "text-brand-primary bg-slate-50 font-bold"
                    : "text-brand-accent bg-white/10 font-bold backdrop-blur-sm"
                  : isScrolled
                  ? "text-slate-700 hover:text-brand-primary hover:bg-slate-50"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? "text-brand-primary bg-slate-50 font-bold"
                        : "text-brand-accent bg-white/10 font-bold backdrop-blur-sm"
                      : isScrolled
                      ? "text-slate-700 hover:text-brand-primary hover:bg-slate-50"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href={config.whatsappLink}
              target="_blank"
              className="btn-brand-primary inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md glow-brand-primary transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Desk</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className={`lg:hidden p-2 rounded-xl transition-colors relative z-50 cursor-pointer ${
              isScrolled ? "text-slate-900 hover:bg-slate-100 active:bg-slate-200" : "text-white hover:bg-white/10 active:bg-white/20"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden flex justify-end h-[100dvh] w-screen overflow-hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div 
            className="relative ml-auto w-full max-w-[320px] bg-slate-950 text-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-slide-in-right p-5 border-l border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top */}
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white border border-slate-200">
                    <Image src={config.logoUrl} alt={`${config.businessName} Logo`} fill className="object-contain p-0.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-sm tracking-tight text-white">Elite One</span>
                    <span className="text-[8px] uppercase font-bold text-slate-400">TRAVELS</span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="space-y-1 text-sm font-medium">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl hover:bg-slate-900 text-white font-bold"
                >
                  Home
                </Link>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl hover:bg-slate-900 text-slate-200 font-semibold"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-5 border-t border-slate-800 space-y-2.5">
              <a
                href={`tel:${config.phone}`}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>{config.phone}</span>
              </a>

              <Link
                href={config.whatsappLink}
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-brand-primary py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

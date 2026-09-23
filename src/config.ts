export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  priceType: string;
  badge: string;
  popular: boolean;
  featured: boolean;
  flag: string;
  overview: string;
  inclusions: string[];
}

export interface TravelService {
  num: string;
  title: string;
  desc: string;
  badge: string;
}

export interface SiteConfig {
  businessName: string;
  shortName: string;
  logoUrl: string;
  tagline: string;
  subTagline: string;
  phone: string;
  hotlineDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  addresses: { lahore: string; islamabad?: string; karachi?: string };
  socials: { facebook: string; instagram?: string; tiktok?: string; linkedin?: string };
  stats: { label: string; value: string }[];
  categories: any[];
  activities: any[];
  tourPackages: TourPackage[];
  services: TravelService[];
  testimonials: any[];
  faqs: any[];
  processSteps: { step: string; title: string; desc: string; icon: string }[];
}

export const config: SiteConfig = {
  businessName: "De Travel Task",
  shortName: "De Travel Task",
  logoUrl: "/images/de_travel_task_logo.jpg",
  tagline: "Your Trusted Partner for Hajj & Umrah",
  subTagline: "Premium Hajj and Umrah Packages, Visa Assistance, and Flight Bookings",
  phone: "+92 323 8436013",
  hotlineDisplay: "+92 323 8436013",
  whatsappNumber: "923238436013",
  whatsappLink: "https://wa.me/923238436013?text=Hello%20De%20Travel%20Task!%20I%20am%20interested%20in%20inquiring%20about%20your%20Hajj%20and%20Umrah%20services.",
  email: "info@detraveltask.com",
  addresses: {
    lahore: "1st Floor, Aabpara Stop, Khurram plaza, Wahdat Rd, Muslim Town, Lahore, 54000, Pakistan",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  stats: [
    { label: "Happy Pilgrims", value: "1,500+" },
    { label: "Years of Trusted Service", value: "5+" },
    { label: "Customer Support", value: "24/7" },
    { label: "Visas Processed", value: "3,000+" },
  ],
  categories: [
    {
      id: "umrah",
      title: "Umrah Packages",
      subtitle: "Spiritual Journeys",
      tagline: "Handcrafted Umrah packages for families and groups, featuring economy and premium options.",
      cta: "Explore Umrah",
      href: "/packages",
      badge: "Best Sellers",
      icon: "Palmtree",
    },
    {
      id: "hajj",
      title: "Hajj Packages",
      subtitle: "The Ultimate Pilgrimage",
      tagline: "Experience a spiritually enriching Hajj with our premium packages, offering guided support and seamless logistics.",
      cta: "Explore Hajj",
      href: "/packages",
      badge: "Premium Services",
      icon: "Palmtree",
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "Free Travel Consultation",
      desc: "Our advisors understand your budget and preferred travel dates to recommend the best Umrah or Hajj package.",
      icon: "FileSearch",
    },
    {
      step: "02",
      title: "Package Customization",
      desc: "We tailor hotels and flight timings to match your family size and preferences.",
      icon: "CheckCircle",
    },
    {
      step: "03",
      title: "Booking & Payment",
      desc: "Secure your package with flexible payment options and instant booking confirmation.",
      icon: "FileText",
    },
    {
      step: "04",
      title: "Visa & Ticket Issuance",
      desc: "Receive your Umrah/Hajj visa, e-tickets, hotel vouchers, and complete itinerary.",
      icon: "CalendarCheck",
    },
    {
      step: "05",
      title: "Pilgrimage Support",
      desc: "Our team stays available throughout your spiritual journey for any support you need.",
      icon: "Award",
    },
  ],
  activities: [
    {
      title: "Premium Umrah Packages",
      tag: "Umrah",
      desc: "Curated 15 to 21 days Umrah packages tailored to your schedule and budget.",
      icon: "Palmtree",
    },
    {
      title: "Hajj Operations",
      tag: "Hajj",
      desc: "Complete guided Hajj packages ensuring peace of mind during your sacred journey.",
      icon: "Heart",
    },
    {
      title: "Umrah Visa Services",
      tag: "Visa Desk",
      desc: "Fast and reliable Umrah visa processing and documentation assistance.",
      icon: "FileCheck",
    },
    {
      title: "Flight & Hotel Bookings",
      tag: "Bookings",
      desc: "Instant ticketing and Makkah/Madinah hotel reservations at competitive rates.",
      icon: "Hotel",
    },
    {
      title: "Group & Corporate Umrah",
      tag: "Group Desk",
      desc: "Custom Umrah planning for large families, communities, and corporate groups.",
      icon: "Briefcase",
    },
    {
      title: "24/7 Pilgrim Support",
      tag: "Support Desk",
      desc: "Direct WhatsApp and phone support before, during, and after your trip for complete peace of mind.",
      icon: "ShieldCheck",
    },
  ],
  services: [
    {
      num: "01",
      title: "HAJJ & UMRAH TOURS",
      desc: "Explore spiritually enriching group, family, and private Umrah and Hajj packages to Makkah and Madinah.",
      badge: "Saudi Arabia",
    },
    {
      num: "02",
      title: "VISA ASSISTANCE",
      desc: "Complete Umrah visa facilitation, file preparation, and documentation verification.",
      badge: "Visa Assistance",
    },
    {
      num: "03",
      title: "FLIGHT & HOTEL BOOKINGS",
      desc: "Instant airline ticketing and Makkah/Madinah hotel reservations at guaranteed best rates.",
      badge: "Flights & Hotels",
    },
  ],
  tourPackages: [
    {
      id: "pkg-umrah-15days",
      title: "15 Days Economy Umrah Package",
      destination: "Makkah & Madinah",
      country: "Saudi Arabia",
      duration: "15 Days 14 Nights",
      price: 250000,
      priceType: "Per Person (Starting From)",
      badge: "MOST POPULAR",
      popular: true,
      featured: true,
      flag: "🇸🇦",
      overview: "Perform Umrah with complete peace of mind. Our 15-day economy package includes flights, visa, transfers, and accommodations in Makkah and Madinah.",
      inclusions: [
        "Return Air Tickets",
        "Umrah Visa Processing",
        "Economy Accommodations in Makkah & Madinah",
        "Airport to Hotel Transfers",
        "Ziarat in Makkah & Madinah",
      ],
    },
    {
      id: "pkg-hajj",
      title: "Premium Hajj Package 2027",
      destination: "Makkah & Madinah",
      country: "Saudi Arabia",
      duration: "20 Days",
      price: 1500000,
      priceType: "Per Person (Starting From)",
      badge: "EARLY BIRD",
      popular: false,
      featured: true,
      flag: "🇸🇦",
      overview: "Experience a spiritually enriching Hajj with our premium package, offering guided support, luxury stays, and seamless logistics.",
      inclusions: [
        "Return Air Tickets",
        "Hajj Visa & Draft",
        "5-Star Accommodations in Makkah & Madinah",
        "Maktab Accommodation in Mina & Arafat",
        "VIP Transport & Ziarat",
        "Qurbani Included",
      ],
    },
    {
      id: "pkg-umrah-21days",
      title: "21 Days Premium Umrah Package",
      destination: "Makkah & Madinah",
      country: "Saudi Arabia",
      duration: "21 Days",
      price: 350000,
      priceType: "Per Person (Starting From)",
      badge: "PREMIUM",
      popular: true,
      featured: true,
      flag: "🇸🇦",
      overview: "Spend extended time in the holy cities with our 21-day premium package. Features 4-star accommodations and VIP transport.",
      inclusions: [
        "Return Air Tickets",
        "Umrah Visa Processing",
        "4-Star Accommodations near Haram",
        "VIP Airport to Hotel Transfers",
        "Comprehensive Ziarat in Makkah & Madinah",
      ],
    },
    {
      id: "pkg-umrah-custom",
      title: "Customized Family Umrah",
      destination: "Makkah & Madinah",
      country: "Saudi Arabia",
      duration: "Flexible",
      price: 200000,
      priceType: "Per Person (Starting From)",
      badge: "CUSTOMIZABLE",
      popular: false,
      featured: false,
      flag: "🇸🇦",
      overview: "Tailor your spiritual journey to your family's specific needs. Choose your own dates, hotel tiers, and transport options.",
      inclusions: [
        "Return Air Tickets",
        "Umrah Visa Processing",
        "Custom Hotel Selection",
        "Private Transfers",
        "Optional Ziarat Add-ons",
      ],
    }
  ],
  testimonials: [
    {
      name: "Ahmed Raza",
      role: "Pilgrim, Lahore",
      trip: "15 Days Economy Umrah Package",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "De Travel Task made our Umrah journey so peaceful. The hotels were close, and the transfers were completely hassle-free.",
    },
    {
      name: "Sana Malik",
      role: "Pilgrim, Islamabad",
      trip: "21 Days Premium Umrah Package",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "Booked our family Umrah package through them. The premium hotels and VIP transport were exactly as promised.",
    },
    {
      name: "Bilal Ahmed",
      role: "Corporate Group, Lahore",
      trip: "Customized Family Umrah",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      content: "Needed a customized Umrah package for a group of 12. De Travel Task arranged everything perfectly and their team stayed in touch.",
    },
    {
      name: "Fatima Sheikh",
      role: "Hajj Pilgrim, Multan",
      trip: "Premium Hajj Package",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "A spiritually uplifting Hajj experience. The guidance and logistics provided by De Travel Task were exceptional.",
    },
  ],
  faqs: [
    {
      q: "What services does De Travel Task provide?",
      a: "We specialize exclusively in Hajj and Umrah packages, providing complete solutions including visa assistance, flight ticketing, and hotel reservations in Makkah and Madinah.",
    },
    {
      q: "How do I book an Umrah package with De Travel Task?",
      a: "Simply call or WhatsApp us at +92 323 8436013 with your travel dates and preferences, or visit our office at 1st Floor, Aabpara Stop, Khurram plaza, Wahdat Rd, Muslim Town, Lahore. Our team will share the best available options.",
    },
    {
      q: "Can Umrah packages be customized for families?",
      a: "Absolutely. We customize itineraries, hotel categories, and travel dates to suit your family's needs and budget.",
    },
    {
      q: "What is included in the Hajj package?",
      a: "Our premium Hajj packages include flights, visa processing, luxury accommodations, Maktab stays, transport, Ziarat, and Qurbani.",
    },
    {
      q: "How does your Visa Assistance service work?",
      a: "Our visa team guides you through the necessary document requirements, file preparation, and application tracking for Saudi Arabia Umrah visas.",
    },
    {
      q: "Where is your office located?",
      a: "Our office is located at 1st Floor, Aabpara Stop, Khurram plaza, Wahdat Rd, Muslim Town, Lahore, 54000, Pakistan. You can also book by phone or WhatsApp.",
    },
  ],
};

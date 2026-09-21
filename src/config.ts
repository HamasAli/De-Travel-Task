export const DEPARTURE_CITIES = [
  "Multan",
  "Sahiwal",
  "Faisalabad",
  "Lahore",
  "Gujranwala",
  "Rawalpindi/Islamabad",
] as const;

export interface OfficeLocation {
  city: string;
  name: string;
  type: "Head Office" | "Regional Office" | "Branch Office";
  address: string;
  phone: string;
  isHeadOffice?: boolean;
}

export const OPERATIONAL_OFFICES: OfficeLocation[] = [
  {
    city: "Lahore (Head Office)",
    name: "Lahore Head Office",
    type: "Head Office",
    address: "1st Floor, Aabpara Stop, Khurram plaza, Wahdat Rd, Muslim Town, Lahore, 54000, Pakistan",
    phone: "+92 323 8436013",
    isHeadOffice: true,
  }
];

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  destination: string;
  category: "group" | "custom" | "weekend" | "trekking";
  badge: string;
  featured: boolean;
  price: number;
  sharingPrices: {
    quad: number;
    triple: number;
    twin: number;
    privateCouple?: number;
  };
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  departureCities: string[];
  departureSchedule?: string;
  upcomingDates: string[];
  tags: string[];
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
  kidsPolicy?: string[];
  cancellationPolicy?: string[];
  termsAndConditions?: string[];
  equipments?: string[];
}

export interface CancellationPolicyRule {
  timeline: string;
  subtext?: string;
  refund: string;
  type: "full" | "half" | "none";
  note?: string;
}

export const OFFICIAL_CANCELLATION_RULES: CancellationPolicyRule[] = [
  {
    timeline: "7 Days Before Tour",
    subtext: "(If Advance Paid)",
    refund: "100% Amount Refund",
    type: "full",
  },
  {
    timeline: "5 Days Before Tour",
    refund: "100% Amount Refund",
    type: "full",
  },
  {
    timeline: "3 Days Before Tour",
    refund: "50% Amount Refund",
    type: "half",
  },
  {
    timeline: "Cancellation on Departure Day",
    refund: "No Refund",
    type: "none",
    note: "For Any Reason / Excuse",
  },
  {
    timeline: "Leave the Tour / Not Join Timely",
    refund: "No Refund",
    type: "none",
    note: "No Show / Late Join",
  },
];

export const OFFICIAL_CANCELLATION_NOTE =
  "No refund will be given in any case if you cancel on departure day or do not join the tour timely.";

export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  hotlineDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  registrationId: string;
  registrationNumber: string;
  companyType: string;
  legalName: string;
  addresses: { lahore: string; lahoreBranch?: string };
  offices: OfficeLocation[];
  socials: { instagram: string; facebook: string; tiktok?: string };
  stats: { label: string; value: string }[];
  categories: any[];
  activities: any[];
  tours: TourPackage[];
  testimonials: any[];
  faqs: any[];
  galleryMoments: any[];
}

export const config: SiteConfig = {
  businessName: "De Travel Task (PVT) Ltd",
  shortName: "De Travel Task",
  tagline: "Explore Pakistan's Wonders",
  subTagline: "Curated northern expeditions, luxury family retreats, and executive mountain road adventures across Pakistan.",
  phone: "+92 323 8436013",
  hotlineDisplay: "+92 323 8436013",
  whatsappNumber: "923238436013",
  whatsappLink: "https://wa.me/923238436013?text=Hi%20De%20Travel%20Task!%20I%20want%20to%20inquire%20about%20your%20upcoming%20tours.",
  email: "info@detraveltask.com",
  registrationId: "0271937",
  registrationNumber: "0271937",
  companyType: "Private Limited (Pvt Ltd)",
  legalName: "De Travel Task (PVT) Ltd",
  addresses: {
    lahore: "1st Floor, Aabpara Stop, Khurram plaza, Wahdat Rd, Muslim Town, Lahore, 54000, Pakistan",
  },
  offices: OPERATIONAL_OFFICES,
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    tiktok: "https://tiktok.com/",
  },
  stats: [
    { label: "Curated Expeditions", value: "950+" },
    { label: "Satisfied Travelers", value: "1,200+" },
    { label: "Verified Reviews", value: "5.0 ★ (8)" },
    { label: "Safety & VIP Protocol", value: "100%" },
  ],
  categories: [
    {
      id: "group",
      title: "Royal Group Expeditions",
      subtitle: "Curated Road Journeys",
      tagline: "Uniting like-minded adventurers on scenic Karakoram road trips with luxury chalets, bonfire music, and cinematic memories.",
      cta: "Explore Group Tours",
      href: "/packages?cat=group",
      badge: "Vibrant Community",
      image: "/images/real_passu_hunza.jpg",
      icon: "Users",
    },
    {
      id: "weekend",
      title: "Weekend Escapes",
      subtitle: "Quick Mountain Resets",
      tagline: "3-day short retreats to Swat, Naran, Azad Kashmir, and Kumrat Valley designed to refresh your mind with zero hassle.",
      cta: "Explore Weekend Trips",
      href: "/packages?cat=weekend",
      badge: "Every Weekend",
      image: "/images/real_swat_malamjabba.jpg",
      icon: "Calendar",
    },
    {
      id: "trekking",
      title: "Alpine Trekking Trails",
      subtitle: "Lakes & Wilderness",
      tagline: "Guided trekking expeditions to high-altitude glacial gems like Katora Lake and Jahaz Banda alpine meadows.",
      cta: "Explore Treks",
      href: "/packages?cat=trekking",
      badge: "Alpine Thrills",
      image: "/images/real_kumrat_katora.jpg",
      icon: "Compass",
    },
    {
      id: "custom",
      title: "Bespoke Private Itineraries",
      subtitle: "Tailor-Made Luxury",
      tagline: "Handcrafted private journeys for discerning families, couples, executive retreats, and private squads with dedicated 4x4 Prado.",
      cta: "Craft Custom Trip",
      href: "/craft-your-tour",
      badge: "100% Customized",
      image: "/images/real_shangrila_skardu.jpg",
      icon: "Compass",
    },
  ],
  activities: [
    {
      title: "Royal Bonfire & Jamming",
      tag: "Bonfire Bethak",
      desc: "Starlit fireside storytelling, live BBQ feasts, mountain tea, and acoustic jamming under the Karakoram galaxy.",
      icon: "Flame",
    },
    {
      title: "Canvas & Clouds",
      tag: "Alpine Art",
      desc: "Guided mountain painting sessions with provided easels, canvases, and paints amidst majestic 8,000m summits.",
      icon: "Palette",
    },
    {
      title: "Tasweer Kushi & Drone Shoots",
      tag: "Cinematic Visuals",
      desc: "Dedicated professional trip photographers capturing aesthetic reels, drone aerials, and 4K portraits.",
      icon: "Camera",
    },
    {
      title: "RoadRang & Interactive Vibes",
      tag: "Community Fun",
      desc: "Curated music playlists, trivia, icebreakers, and bus games that turn strangers into lifelong friends.",
      icon: "Sparkles",
    },
    {
      title: "Sky Lanterns over Glaciers",
      tag: "Night Spectacle",
      desc: "Illuminating the Karakoram and Himalayan nights with floating golden lanterns of hope and aspirations.",
      icon: "Moon",
    },
    {
      title: "Summit Mini Raves & Beats",
      tag: "High-Altitude Beats",
      desc: "Joyful celebratory summit music, glowing lanterns, and high-energy victory dances on alpine passes.",
      icon: "Music",
    },
  ],
  tours: [
    {
      id: "skardu-cocktail-8d",
      slug: "8-days-skardu-shangrila-hunza-deosai-cocktail",
      title: "8 Days - Hunza & Skardu",
      subtitle: "The ultimate 3-in-1 mega tour: Shangrila Resort, Deosai Plains, Hunza Attabad Lake, Passu Cones & Lake Saif-ul-Malook.",
      duration: "8 Days / 7 Nights",
      days: 8,
      nights: 7,
      destination: "Skardu, Shangrila, Hunza & Deosai",
      category: "group",
      badge: "COCKTAIL EXPEDITION",
      featured: true,
      price: 38500,
      sharingPrices: {
        quad: 38500,
        triple: 42500,
        twin: 48000,
        privateCouple: 52000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_shangrila_skardu.jpg",
      gallery: [
        "/images/real_shangrila_skardu.jpg",
        "/images/real_deosai.jpg",
        "/images/real_passu_hunza.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Monday & Friday",
      upcomingDates: [
        "Every Monday Night (Mega Batch)",
        "Every Friday Night (Weekend Batch)",
      ],
      tags: [
        "Shangrila Resort",
        "Passu Cones",
        "Deosai Plains",
        "Hunza Valley",
        "Saif-ul-Malook",
        "Live BBQ & Bonfire",
      ],
      highlights: [
        "3-in-1 Cocktail Expedition covering Skardu, Hunza Valley, and Naran Kaghan in one epic circuit",
        "4x4 Safari across the world's second-highest plateau: Deosai Plains, Sheosar Lake, Kala Pani & Bara Pani",
        "Shangrila Resort, Lower & Upper Kachura Lakes, Sadpara Lake, and roaring Mantoka Waterfall",
        "Sarfaranga Cold Desert sunset photography, ATV quad dunes, and historic Serena Shigar Fort",
        "Attabad Lake boat cruising, Hussaini Suspension Bridge, Passu Cones & Khunjerab Pass (Pak-China Border)",
        "Altit & Baltit Forts in Karimabad, legendary Lake Saif-ul-Malook, and panoramic Babusar Top",
      ],
      overview:
        "The ultimate crown jewel of northern Pakistan tourism! Experience eight days of pure wonderland across Baltistan, Hunza, and Kaghan Valley with luxury executive transport, hotel stays, live barbecues, and campfire acoustic jamming.",
      itinerary: [
        {
          day: 1,
          title: "Departure & Scenic Drive to Chilas / Naran",
          desc: "Night departure from Multan, Faisalabad, Lahore, and Islamabad (26 Number). Travel via Hazara Expressway, Balakot, Kiwi Waterfall, and Kaghan to reach Chilas / Naran for dinner and overnight stay.",
        },
        {
          day: 2,
          title: "Journey to Skardu along Indus River & KKH",
          desc: "Travel along the Karakoram Highway and scenic Skardu road. Stop at Nanga Parbat View Point, Astak Nala, and Indus River confluence. Arrive in Skardu Valley for dinner and hotel stay.",
        },
        {
          day: 3,
          title: "Shangrila Resort, Upper Kachura Lake & Soq Valley",
          desc: "Breakfast, explore mythical Shangrila Resort, boat rides at Upper Kachura Lake, and lush Soq Valley. Sunset photography and hotel stay in Skardu.",
        },
        {
          day: 4,
          title: "4x4 Deosai Plateau Safari, Sheosar Lake & Sadpara Lake",
          desc: "Breakfast, transfer to 4x4 jeeps for full-day safari across Deosai Plains (world's 2nd highest plateau). Visit Sadpara Lake, Ali Malik Top, Bara Pani, and magnificent Sheosar Lake. Return to Skardu for hotel stay.",
        },
        {
          day: 5,
          title: "Sarfaranga Cold Desert, Shigar Fort & Mantoka Waterfall",
          desc: "Visit the roaring Mantoka Waterfall, scenic Serena Shigar Fort heritage garden, and sunset thrills over Sarfaranga Cold Desert dunes. Evening live BBQ and bonfire with musical acoustic jamming.",
        },
        {
          day: 6,
          title: "Scenic Drive to Hunza Valley & Sunset at Attabad Lake",
          desc: "Breakfast, drive along the Karakoram Highway towards Hunza. Stop at Rakaposhi View Point (7,788m) and 3 Mountain Ranges Junction. Arrive in Hunza for Attabad Lake sunset cruise and hotel stay.",
        },
        {
          day: 7,
          title: "Passu Cones, Khunjerab Border & Altit Fort Exploration",
          desc: "Visit Hussaini Suspension Bridge, Passu Cones, and drive through Khunjerab National Park to the Pak-China Border (4,693m). Explore Altit Fort and royal Karimabad market in the afternoon. Drive to Chilas for overnight stay.",
        },
        {
          day: 8,
          title: "Return Drive via Babusar Top / Naran to Lahore & Multan",
          desc: "Breakfast, scenic return drive via Babusar Top, Lulusar Lake, Naran Valley, and Hazara Motorway with tea stops. Arrive back in Islamabad (9:00 PM), Lahore (2:00 AM), and Multan by early morning.",
        },
      ],
      inclusions: [
        "Executive AC Transport (Saloon Coaster / Grand Cabin / High Roof)",
        "7 Nights hotel accommodations on selected room sharing",
        "Quality meals: 8 Breakfasts & 7 Dinners (including Live BBQ & Bonfire)",
        "Dedicated Tour Captain, Professional Guide, Toll Taxes & First Aid Support",
      ],
      exclusions: [
        "4x4 Mountain Jeeps for Deosai Plains, Sheosar Lake & Soq Valley",
        "Attabad Lake boating excursion & entry tickets to designated parks",
        "Lunches, mid-day snacks, and cold beverages",
        "Fort entry tickets (Altit/Baltit/Shigar) & ATV quad bike charges",
        "Personal equipment, porter charges, and medical insurance",
      ],
    },
    {
      id: "skardu-6d",
      slug: "6-days-skardu-valley-shangrila-deosai",
      title: "6 Days - Skardu",
      subtitle: "Shangrila Resort, Lower & Upper Kachura Lake, Manthokha Waterfall, Shigar Valley, Deosai Plains & Babusar Top.",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      destination: "Skardu Valley, Shigar & Deosai",
      category: "group",
      badge: "BALTISTAN EXPEDITION",
      featured: true,
      price: 28500,
      sharingPrices: {
        quad: 28500,
        triple: 31500,
        twin: 34500,
        privateCouple: 38500,
      },
      rating: 5.0,
      reviewsCount: 14,
      image: "/images/skardu_valley.jpg",
      gallery: [
        "/images/skardu_valley.jpg",
        "/images/real_shangrila_skardu.jpg",
        "/images/real_deosai.jpg",
        "/images/real_babusar.jpg",
        "/images/real_naran_saifulmalook.jpg",
      ],
      departureCities: [
        "Islamabad/Rawalpindi",
        "Lahore",
        "Faisalabad",
        "Gujranwala",
        "Multan",
      ],
      departureSchedule: "Every Monday & Friday",
      upcomingDates: [
        "Every Monday Night (Fixed Departure)",
        "Every Friday Night (Weekend Batch)",
      ],
      tags: [
        "Skardu Valley",
        "Shangrila Resort",
        "Upper Kachura Lake",
        "Manthokha Waterfall",
        "Shigar Fort",
        "Cold Desert",
        "Deosai National Park",
        "Babusar Top",
        "Saif-ul-Malook",
      ],
      highlights: [
        "Scenic drive along Karakoram Highway, Indus River, Astak Nala & Skardu Road",
        "Visit Shangrila Resort (Lower Kachura Lake) and boat rides at Upper Kachura Lake",
        "Explore mighty Manthokha Waterfall, Sarfaranga Cold Desert & historic Shigar Fort",
        "4x4 Jeep safari across Deosai National Park, Deosai Plains & Sadpara Lake",
        "Scenic stops at 3 Mountain Junction Point & panoramic Nanga Parbat View Point",
        "Return via Babusar Top (13,700ft), Lulusar Lake, Kiwai Waterfall & optional Saif-ul-Malook",
      ],
      overview:
        "Embark on an extraordinary 6-day expedition into Baltistan's premier landscapes! Travel along the dramatic Skardu Road carved through Indus gorges, marvel at the alpine tranquility of Shangrila Resort and Upper Kachura Lake, explore the historic royalty of Shigar Valley, and traverse the legendary wilderness of Deosai National Park. Journey back through the picturesque heights of Babusar Top and Kaghan Valley.",
      itinerary: [
        {
          day: 1,
          title: "Islamabad Departure, Balakot, Kiwai Waterfall, Babusar Top to Chilas",
          desc: "Pick up Islamabad participants at 3:00 AM (Lahore participants depart earlier night). Breakfast in Balakot at 8:00 AM. Short sightseeing stops at roaring Kiwai Waterfall, Kunhar River, picturesque Lulusar Lake, and panoramic Babusar Top (13,700ft). Arrive in Chilas by 4:00 PM. Dinner at 8:00 PM and overnight hotel stay in Chilas (VIP Lounges or equal).",
        },
        {
          day: 2,
          title: "Adventurous Skardu Road, Shangrila Resort & Upper Kachura Lake",
          desc: "Breakfast and 9:00 AM departure towards Skardu Valley via adventurous Skardu Road along Indus River and Astak Nala. Visit world-famous Shangrila Resort (Lower Kachura Lake) and explore the emerald waters of Upper Kachura Lake. Arrive in Skardu by night, dinner at 8:00 PM and overnight hotel stay in Skardu (Skardu View Point or equal).",
        },
        {
          day: 3,
          title: "Mighty Manthokha Waterfall, Sarfaranga Cold Desert & Shigar Fort",
          desc: "Breakfast at 9:00 AM. Travel to the mighty, beautiful Manthokha Waterfall cascading down rocky cliffs. Move to Shigar Valley to explore the high-altitude dunes of Sarfaranga Cold Desert and the historic 400-year-old Shigar Fort / Raja Palace. Travel back to Skardu for dinner at 8:00 PM and overnight stay in Skardu.",
        },
        {
          day: 4,
          title: "4x4 Jeep Safari to Sadpara Lake & Deosai National Park",
          desc: "Morning breakfast at 8:00 AM. Board 4x4 off-road jeeps (jeep charges not included) to visit stunning Sadpara Lake, then ascend to the magnificent 'Land of Giants' — Deosai National Park and Deosai Plains (or Bashu Valley). Soak in high-altitude wild flora and rolling plateaus. Return to Skardu for dinner at 8:00 PM and overnight stay.",
        },
        {
          day: 5,
          title: "3 Mountain Junction, Nanga Parbat View Point & Journey to Naran",
          desc: "Early breakfast at 7:00 AM. Travel along KKH with photography stops at the unique 3 Mountain Ranges Junction (Karakoram, Himalayas, Hindu Kush) and Nanga Parbat View Point. Continue scenic drive over Babusar Pass into Kaghan Valley. Arrive in Naran by 7:00 PM. Dinner in hotel at 8:00 PM and overnight stay in Naran (Forest View or same).",
        },
        {
          day: 6,
          title: "Lake Saif-ul-Malook Safari, Naran Bazaar & Smooth Return Drive",
          desc: "Early morning 4x4 jeep visit to legendary Lake Saif-ul-Malook (optional, jeep charges not included). Return to Naran for breakfast at 10:00 AM and explore Naran Bazaar. Departure at 12:00 PM via Hazara Motorway. Arrival in Islamabad by 8:00 PM and Lahore by 11:30 PM (+- 2-3 hours).",
        },
      ],
      inclusions: [
        "AC Private Transportation (Luxury Coaster Saloon / Grand Cabin)",
        "Quality meals: 6 Breakfasts & 5 Dinners (including Live BBQ & Bonfire)",
        "5 Nights hotel stays as per plan on 4 pax sharing (Beds + Mattresses)",
        "Dedicated Tour Guide & Group Leader throughout the journey",
        "Basic First Aid Kit & emergency support",
        "All tolls, road taxes, fuel & driver expenses",
      ],
      exclusions: [
        "4x4 Jeep expenses (Deosai National Park, Sadpara Lake & Lake Saif-ul-Malook)",
        "Boating, chairlift, zipline & entry tickets to resorts/forts",
        "Personal clothing, trekking gear & horse riding rent",
        "Insurance liability, medical aid & helicopter rescue coverage",
        "Expenses of personal nature (tea, cold drinks, mineral water, lunch, room heaters)",
        "Anything not explicitly mentioned in services included",
      ],
      kidsPolicy: [
        "Under 3 years: Free without seat",
        "3 to 8 years: 50% charge with jumper seat",
        "8 years & above: Considered adults (full charge)",
      ],
      cancellationPolicy: [
        "7 Days Before Tour (If Advance Paid): 100% Amount Refund",
        "5 Days Before Tour: 100% Amount Refund",
        "3 Days Before Tour: 50% Amount Refund",
        "Cancellation on Departure Day: No Refund (For Any Reason / Excuse)",
        "Leave the Tour / Not Join Timely: No Refund (No Show / Late Join)",
      ],
      equipments: [
        "Day bag or backpack",
        "Raincoat / Umbrella & Warm layers (jackets, thermal inners, warm socks)",
        "Sunblock, Lip balm & UV Sunglasses",
        "High-capacity power bank & mobile chargers",
        "Comfortable joggers, slippers & walking shoes with solid grip",
        "Original CNIC / Passport (mandatory for all participants)",
      ],
      termsAndConditions: [
        "Participants must maintain respectful conduct with locals, drivers, and fellow travelers; unethical behavior, abusive language, or drug use will result in immediate termination without refund.",
        "Strict zero-tolerance policy for weapons, narcotics, and illegal substances.",
        "Vehicle AC will be operated periodically on steep mountain gradients to prevent engine overheating.",
        "Trip plan can be altered due to weather, roadblocks, political or force majeure reasons deemed appropriate by organizers.",
        "We reserve the right to cancel the trip without prior notice for safety or unforeseen reasons, and participants will receive full refund of advance amount only.",
        "Every possible care is taken for safety; participants accept inherent natural risks of mountainous terrain (landslides, slips, natural hazards).",
        "Organizers are not responsible for theft, loss, or damage to personal belongings during the trip.",
        "Eco-friendly tourism: strictly zero waste and no littering on trails.",
        "Trips are uninsured; emergency rescue coverage or medical liability is not included.",
        "Respect local culture, traditions, religious codes, and diverse group members.",
      ],
    },
    {
      id: "hunza-5d",
      slug: "5-days-hunza-valley-attabad-khunjerab-naltar",
      title: "5 Days - Hunza",
      subtitle: "Passu Cones, Attabad Lake cruise, China Border (4,693m), Naltar pine valley & Altit Fort.",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      destination: "Hunza, Attabad, Khunjerab & Naltar",
      category: "group",
      badge: "BESTSELLER",
      featured: true,
      price: 24500,
      sharingPrices: {
        quad: 24500,
        triple: 28500,
        twin: 32500,
        privateCouple: 36000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_passu_hunza.jpg",
      gallery: [
        "/images/real_passu_hunza.jpg",
        "/images/real_hunza_attabad.jpg",
        "/images/real_khunjerab.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Tuesday & Friday",
      upcomingDates: [
        "Every Tuesday Night (Midweek Batch)",
        "Every Friday Night (Weekend Batch)",
      ],
      tags: [
        "Passu Cones",
        "Attabad Lake",
        "Khunjerab Pass",
        "Naltar Valley",
        "Altit Fort",
        "Rakaposhi View",
        "Live BBQ",
      ],
      highlights: [
        "Scenic road journey along the Karakoram Highway through the towering 3 Mountain Ranges Junction",
        "Pak-China Border at Khunjerab Pass (4,693m) and Khunjerab National Park wildlife sanctuary",
        "Attabad Lake boat cruising, jet skiing, and photoshoot at iconic Hussaini Suspension Bridge",
        "Cathedral peaks of Passu Cones, Passu Glacier viewpoint, and Gircha village",
        "4x4 Jeep exploration of Naltar Valley, pine forests, ski slope, and Snow Leopard sanctuary",
        "Altit Fort & royal Karimabad heritage market with evening live BBQ and acoustic jamming",
      ],
      overview:
        "Embark on a five-day royal adventure through Hunza Valley. Experience breathtaking turquoise alpine lakes, towering jagged peaks, ancient Silk Route forts, and the highest paved international border in the world.",
      itinerary: [
        {
          day: 1,
          title: "Night Departure via Hazara Motorway to Chilas",
          desc: "Departure from Multan (5:30 PM), Lahore (10:00 PM), Faisalabad (10:00 PM), and Islamabad (3:30 AM). Travel via Hazara Expressway, Besham, Sumer Nala, and Diamer Basha Dam to reach Chilas for dinner and overnight stay.",
        },
        {
          day: 2,
          title: "Scenic Drive to Hunza & Naltar Valley Jeep Safari",
          desc: "Breakfast in Chilas, travel towards Hunza. Stop at Nanga Parbat View Point and 3 Mountain Ranges Junction. Transfer to 4x4 jeeps to explore Naltar Valley, ski slope, and Zero Point. Arrive in Hunza for dinner and hotel stay.",
        },
        {
          day: 3,
          title: "Attabad Lake, Passu Cones & Pak-China Border Khunjerab",
          desc: "Breakfast, visit Attabad Lake & Tunnels. Cross Hussaini Suspension Bridge, photoshoot at Passu Cones and Glacier. Lunch at Gircha, travel through Sost to Khunjerab National Park & China Border. Return to Hunza for BBQ and musical bonfire night.",
        },
        {
          day: 4,
          title: "Altit Fort, Karimabad Heritage Bazaar & Drive to Chilas",
          desc: "Visit the 900-year-old Altit Fort and shop in royal Karimabad bazaar. Begin scenic return drive along KKH. Arrive in Chilas for dinner and overnight stay.",
        },
        {
          day: 5,
          title: "Return Journey to Islamabad, Lahore & Multan",
          desc: "Breakfast at 7:00 AM, scenic drive along KKH / Hazara Motorway with lunch and tea stops. Arrive in Islamabad by 9:00 PM, Lahore by 2:00 AM, and Multan by 5:00 AM.",
        },
      ],
      inclusions: [
        "Luxury AC Saloon Coaster / Grand Cabin transport throughout the tour",
        "4x4 Mountain Jeeps for Naltar Valley exploration",
        "4 Nights hotel accommodations on selected room sharing",
        "Quality meals: 5 Breakfasts & 4 Dinners (including Live BBQ feast)",
        "Bonfire, Sky Lanterns & Musical acoustic night",
        "Professional Tour Captain & First Aid Support",
      ],
      exclusions: [
        "Lunches, snacks, and personal beverages",
        "Attabad Lake boating, jet ski & zipline charges",
        "Entry tickets to Altit & Baltit Forts",
        "Porter charges and personal insurance",
      ],
    },
    {
      id: "swat-3d",
      slug: "3-days-swat-valley-kalam-malam-jabba",
      title: "3 Days - Swat & Kalam",
      subtitle: "Malam Jabba ski chairlift & zipline, Kalam pine valley, Ushu Forest, and Mahodand Lake.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Swat, Kalam & Malam Jabba",
      category: "weekend",
      badge: "SWITZERLAND OF EAST",
      featured: true,
      price: 16500,
      sharingPrices: {
        quad: 16500,
        triple: 18500,
        twin: 21500,
        privateCouple: 24000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_swat_malamjabba.jpg",
      gallery: [
        "/images/real_swat_malamjabba.jpg",
        "/images/real_swat_kalam.jpg",
        "/images/real_kumrat_forest.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Monday & Thursday",
      upcomingDates: [
        "Every Monday Night (Midweek Batch)",
        "Every Thursday Night (Weekend Batch)",
      ],
      tags: [
        "Malam Jabba Ski",
        "Kalam Valley",
        "Mahodand Lake",
        "Ushu Pine Forest",
        "Zipline & Chairlift",
        "Live BBQ",
      ],
      highlights: [
        "Malam Jabba 5-star ski resort: Chairlift, extreme zipline, snow hiking & alpine vistas",
        "Kalam Valley lush evergreen pine wilderness, Ushu Forest, and Matiltan Valley",
        "Off-road 4x4 jeep safari to the crystal turquoise waters of Mahodand Lake",
        "Scenic exploration of Paloga Valley and roaring riverside waterfalls",
        "Riverside relaxation along the crystal Swat River & Shamozai",
        "Evening musical campfire bonfire, live chicken BBQ feast, and deluxe hotel stays",
      ],
      overview:
        "Escape to the enchanting Switzerland of the East! Experience the thrilling ski resort of Malam Jabba, the alpine beauty of Kalam, and the pristine glacial waters of Mahodand Lake in a revitalizing 3-day getaway.",
      itinerary: [
        {
          day: 1,
          title: "Drive via Swat Motorway to Malam Jabba Ski Resort",
          desc: "Early morning breakfast in Mingora Swat. Travel up to Malam Jabba Ski Resort. Enjoy chairlift rides, zipline thrills, and mountain hiking. Drive to hotel for dinner and overnight stay.",
        },
        {
          day: 2,
          title: "Kalam Valley, Ushu Forest, Paloga & Mahodand Lake",
          desc: "Breakfast, transfer to coaster / 4x4 jeeps. Travel through scenic Kalam, dense Ushu Forest, Paloga Valley, Matiltan, and glacial Mahodand Lake. Return to hotel for grand BBQ dinner, bonfire, and overnight stay.",
        },
        {
          day: 3,
          title: "Swat River, Shamozai & Smooth Return Journey",
          desc: "Breakfast at 7:00 AM, check-out from hotel. Visit Swat River and Shamozai. Departure back via Swat Motorway / CPEC, arriving in Islamabad and Lahore by late evening.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof / Daewoo",
        "2 Nights quality hotel stay (Separate room for couples, 4-5 sharing standard)",
        "Quality meals: 3 Breakfasts & 2 Dinners (including Live BBQ & Bonfire)",
        "All tolls, road taxes & basic first aid kit",
      ],
      exclusions: [
        "Mahodand Lake 4x4 Jeep charges",
        "Chairlift, Zipline & activity tickets",
        "Lunches, extras at hotels & personal expenses",
      ],
    },
    {
      id: "shogran-2d",
      slug: "2-days-shogran-siri-paye-meadows",
      title: "2 Days - Shogran",
      subtitle: "Balakot, Kiwai Waterfall, 4x4 Jeep to pine-covered Shogran Plateau, Siri Lake & Siri Paye rolling meadows.",
      duration: "2 Days / 1 Night",
      days: 2,
      nights: 1,
      destination: "Shogran & Siri Paye Meadows",
      category: "weekend",
      badge: "WEEKEND ESCAPE",
      featured: true,
      price: 12000,
      sharingPrices: {
        quad: 12000,
        triple: 14000,
        twin: 16500,
        privateCouple: 19500,
      },
      rating: 5.0,
      reviewsCount: 14,
      image: "/images/real_naran_shogran.jpg",
      gallery: [
        "/images/real_naran_shogran.jpg",
        "/images/real_babusar.jpg",
        "/images/real_naran_saifulmalook.jpg",
      ],
      departureCities: [
        "Lahore",
        "Islamabad/Rawalpindi",
        "Gujranwala",
        "Faisalabad",
        "Multan",
      ],
      departureSchedule: "Every Friday Night",
      upcomingDates: [
        "Every Friday Night (Weekend Gateway)",
        "Custom Dates Available on Request",
      ],
      tags: [
        "Shogran",
        "Siri Paye",
        "Kiwai Waterfall",
        "Balakot",
        "Kaghan Valley",
        "4x4 Jeep Safari",
        "Bonfire",
      ],
      highlights: [
        "Night departure via Hazara Motorway and morning breakfast at riverside Balakot",
        "Scenic stop at roaring Kiwai Waterfall on the road to Kaghan Valley",
        "Thrilling 4x4 Jeep ride ascending through dense pine forests to Shogran Plateau",
        "Explore magical high-altitude Siri Lake and lush rolling Siri Paye alpine meadows",
        "Overnight luxury hotel stay in Shogran with panoramic valley views, evening bonfire & BBQ",
        "Smooth and comfortable return drive back to Islamabad and Lahore",
      ],
      overview:
        "Looking for the ultimate weekend mountain reset? Escape to the verdant highlands of Kaghan Valley on this 2-day getaway to Shogran and Siri Paye. Enjoy misty pine forests, an exhilarating 4x4 jeep safari, panoramic views of snow-dusted Makra Peak, and campfire acoustic jamming under starlit mountain skies.",
      itinerary: [
        {
          day: 1,
          title: "Departure, Kiwai Waterfall, 4x4 Jeep Safari to Shogran & Siri Paye",
          desc: "Night departure from Lahore (10:30 PM) and Islamabad (3:00 AM). Breakfast in Balakot at 8:00 AM. Stop at roaring Kiwai Waterfall, then transfer to 4x4 rugged jeeps to ascend up to Shogran plateau and continue to Siri Lake and panoramic Siri Paye Meadows. Evening return to Shogran hotel, dinner, live BBQ & bonfire with overnight stay.",
        },
        {
          day: 2,
          title: "Shogran Morning Sunrise, Pine Forest Walk & Smooth Return Journey",
          desc: "Breakfast with breathtaking valley views. Free time for pine forest nature walk and photography. Shift back into luxury coaster at Kiwai, begin return journey via Hazara Motorway. Arrive in Islamabad by 8:00 PM and Lahore by 11:30 PM.",
        },
      ],
      inclusions: [
        "Luxury AC Transportation (Saloon Coaster / Grand Cabin)",
        "Quality meals: 2 Breakfasts & 1 Dinner + Live BBQ Night & Bonfire",
        "1 Night hotel stay in Shogran on 4 pax sharing (Beds + Mattresses)",
        "Professional Tour Guide & Group Leader",
        "Basic First Aid Kit & safety assistance",
        "All highway tolls, road taxes & driver expenses",
      ],
      exclusions: [
        "4x4 Jeep expenses for Shogran and Siri Paye",
        "Horse riding, chairlifts & personal entry tickets",
        "Lunches, cold drinks, tea & personal snacks",
        "Laundry, room heaters & personal phone calls",
        "Medical aid, travel insurance & emergency rescue",
        "Any service not explicitly mentioned in inclusions",
      ],
      kidsPolicy: [
        "Under 3 years: Free without seat",
        "3 to 8 years: 50% charge with jumper seat",
        "8 years & above: Considered adults (full charge)",
      ],
      cancellationPolicy: [
        "7 Days Before Tour (If Advance Paid): 100% Amount Refund",
        "5 Days Before Tour: 100% Amount Refund",
        "3 Days Before Tour: 50% Amount Refund",
        "Cancellation on Departure Day: No Refund (For Any Reason / Excuse)",
        "Leave the Tour / Not Join Timely: No Refund (No Show / Late Join)",
      ],
      equipments: [
        "Original CNIC / Passport (Compulsory)",
        "Warm jacket, sweater or shawl",
        "Comfortable joggers or walking shoes",
        "Sunblock, sunglasses & power bank",
      ],
    },
    {
      id: "naran-3d",
      slug: "3-days-naran-kaghan-shogran-siri-paye",
      title: "3 Days - Naran",
      subtitle: "Siri Paye rolling alpine meadows, Lake Saif-ul-Malook, Kunhar River rafting, Babusar Top & Lulusar Lake.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Naran, Kaghan & Shogran",
      category: "weekend",
      badge: "ALPINE PARADISE",
      featured: true,
      price: 16000,
      sharingPrices: {
        quad: 16000,
        triple: 18000,
        twin: 21000,
        privateCouple: 23500,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_naran_saifulmalook.jpg",
      gallery: [
        "/images/real_naran_saifulmalook.jpg",
        "/images/real_naran_shogran.jpg",
        "/images/real_babusar.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Monday & Thursday",
      upcomingDates: [
        "Every Monday Night (Midweek Batch)",
        "Every Thursday Night (Weekend Batch)",
      ],
      tags: [
        "Lake Saif-ul-Malook",
        "Shogran Plateau",
        "Siri Paye Meadows",
        "Babusar Top (13,700ft)",
        "Kunhar Rafting",
        "Lulusar Lake",
      ],
      highlights: [
        "4x4 Jeep safari up to the scenic Shogran plateau, Siri Lake & lush rolling Siri Paye meadows",
        "Exhilarating river rafting adventures on the gushing glacial rapids of Kunhar River",
        "Scenic drive to Batakundi waterfall, Burawai, and panoramic Babusar Top (13,700ft)",
        "Crystal turquoise waters of Lulusar Lake nestled in the high-altitude pass",
        "Legendary Lake Saif-ul-Malook safari surrounded by Malika Parbat reflections",
        "Riverside live chicken BBQ, bonfire acoustic jamming, and comfortable mountain hotel stays",
      ],
      overview:
        "Discover the magical landscapes of Kaghan Valley! From the fairytale meadows of Siri Paye to the high-altitude pass of Babusar Top and the turquoise majesty of Lake Saif-ul-Malook, this 3-day escape is packed with nature's wonders.",
      itinerary: [
        {
          day: 1,
          title: "Kawai Waterfall, 4x4 Jeep to Shogran & Siri Paye Meadows",
          desc: "Breakfast in Kawai at 8:00 AM. Transfer to 4x4 jeeps for Shogran, Siri Lake, and the vast rolling Siri Paye Meadows. Return to hotel in Naran / Kaghan for dinner, bonfire, and overnight stay.",
        },
        {
          day: 2,
          title: "Kunhar Rafting, Batakundi, Lulusar Lake & Babusar Top",
          desc: "Breakfast, transfer to coaster. Experience Kunhar River rafting, visit Batakundi Waterfall, Burawai, Moon Restaurant, and drive up to Lulusar Lake and Babusar Top (13,700ft). Return to hotel for dinner and overnight stay.",
        },
        {
          day: 3,
          title: "Lake Saif-ul-Malook Safari & Return Drive",
          desc: "Early morning 4x4 jeep visit to legendary Lake Saif-ul-Malook. Breakfast, check-out and smooth return journey via Hazara Motorway / CPEC, arriving in Islamabad and Lahore by late night.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof / Daewoo",
        "2 Nights hotel stay (Separate couple rooms available, 4-5 sharing standard)",
        "Quality meals: 3 Breakfasts & 2 Dinners + BBQ & Bonfire",
        "All tolls, road taxes, driver expenses & first aid kit",
      ],
      exclusions: [
        "Jeep charges for Shogran / Siri Paye & Lake Saif-ul-Malook",
        "Kunhar River rafting tickets & chairlift charges",
        "Lunches, laundry, drinks & personal insurance",
      ],
    },
    {
      id: "kashmir-3d",
      slug: "3-days-azad-kashmir-neelum-valley-arang-kel",
      title: "3 Days - Kashmir & Arang Kel",
      subtitle: "Dhani Waterfall, Kutton, Keran, Sharda Peeth, cable car lift & hike to dreamy Arang Kel.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Azad Kashmir & Neelum Valley",
      category: "weekend",
      badge: "HEAVEN ON EARTH",
      featured: true,
      price: 15500,
      sharingPrices: {
        quad: 15500,
        triple: 17500,
        twin: 20500,
        privateCouple: 23000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_kashmir_neelum.jpg",
      gallery: [
        "/images/real_kashmir_neelum.jpg",
        "/images/real_kumrat_forest.jpg",
        "/images/real_naran_shogran.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Monday & Thursday",
      upcomingDates: [
        "Every Monday Night (Midweek Batch)",
        "Every Thursday Night (Weekend Batch)",
      ],
      tags: [
        "Neelum Valley",
        "Arang Kel",
        "Sharda Peeth",
        "Dhani Waterfall",
        "Kutton Waterfall",
        "Keran LoC",
        "Cable Car",
      ],
      highlights: [
        "Scenic mountain drive through Muzaffarabad, Dhani Waterfall, and Neelum Jhelum Dam",
        "Sightseeing at LoC Indo-Pak Chilhana Point & roaring Kutton / Kundal Shahi Waterfalls",
        "Keran riverside border views overlooking Indian-administered Kashmir across Neelum River",
        "Kel cable car chairlift and scenic 30-minute hike to the fairytale emerald pastures of Arang Kel",
        "Visit centuries-old historic Sharda Peeth temple ruins and lush Upper Neelum Valley Park",
        "Riverside hotel stays with evening campfire, live BBQ, and fresh local Kashmiri cuisine",
      ],
      overview:
        "Experience the lush green paradise of Azad Kashmir! Explore the winding Neelum River, majestic mountain waterfalls, border checkpoints, and the breathtaking alpine village of Arang Kel.",
      itinerary: [
        {
          day: 1,
          title: "Muzaffarabad, Dhani Waterfall, LoC Point & Keran / Sharda",
          desc: "Arrival at Muzaffarabad (8:30 AM), breakfast. Travel to Dhani Waterfall, sightseeing at Noseri (Neelum Jhelum) Dam, stop at LoC Indo-Pak Chilhana Point and Kutton Waterfall. Reach Keran / Sharda for dinner and hotel stay.",
        },
        {
          day: 2,
          title: "Jeep to Kel, Cable Car & Hike to Arang Kel (or Ratti Gali Lake)",
          desc: "Breakfast in hotel. 4x4 Jeep drive to Kel. Ride the scenic cable car lift followed by a 30-minute hike to the lush green bowl of Arang Kel. Enjoy photography and meadows. Return to hotel for dinner and overnight stay.",
        },
        {
          day: 3,
          title: "Upper Neelum, Upper Neelum Park & Return Journey",
          desc: "After breakfast, explore Upper Neelum and Upper Neelum Park. Begin return journey with short tea stop at Bhera / Murree Expressway, arriving back home by late night.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof",
        "2 Nights hotel stay on 4/5 person sharing bed plus mattress",
        "Quality meals: 3 Breakfasts & 2 Dinners + Live BBQ",
        "All tolls, road taxes, driver expenses & basic first aid kit",
      ],
      exclusions: [
        "Jeep charges (Kel/Sharda) & Arang Kel cable car tickets",
        "Personal clothing, horse riding & gear rent",
        "Extras at hotels (drinks, laundry, phone calls) & medical aid",
      ],
    },
    {
      id: "kashmir-taobat-4d",
      slug: "4-days-taobat-arang-kel-neelum-valley",
      title: "4 Days - Taobat & Arang Kel",
      subtitle: "Kohala Bridge, Muzaffarabad, Dhani & Kutton Waterfalls, Keran LOC, Sharda Peeth, Arang Kel & Taobat Village.",
      duration: "4 Days / 3 Nights",
      days: 4,
      nights: 3,
      destination: "Taobat, Arang Kel & Neelum Valley",
      category: "weekend",
      badge: "FAIRYTALE VALLEY",
      featured: true,
      price: 19500,
      sharingPrices: {
        quad: 19500,
        triple: 22000,
        twin: 25000,
        privateCouple: 29000,
      },
      rating: 5.0,
      reviewsCount: 10,
      image: "/images/pkg_kashmir_neelum.jpg",
      gallery: [
        "/images/pkg_kashmir_neelum.jpg",
        "/images/real_kashmir_neelum.jpg",
        "/images/real_kumrat_forest.jpg",
      ],
      departureCities: [
        "Lahore",
        "Islamabad/Rawalpindi",
        "Gujranwala",
        "Faisalabad",
        "Multan",
      ],
      departureSchedule: "Every Wednesday Night",
      upcomingDates: [
        "Every Wednesday Night (Weekly Fixed Departure)",
        "Custom Dates Available on Request",
      ],
      tags: [
        "Taobat",
        "Arang Kel",
        "Neelum Valley",
        "Sharda Valley",
        "Kutton Waterfall",
        "Dhani Waterfall",
        "Keran LOC",
        "Muzaffarabad",
        "Cable Car",
      ],
      highlights: [
        "Scenic mountain drive through Kohala Bridge, Muzaffarabad, Dhani Waterfall & Neelum Jhelum Dam",
        "Keran riverside LOC viewpoints looking across into Indian-administered Kashmir",
        "4x4 Jeep safari to remote Taobat — the fairytale last border village of Neelum Valley",
        "Kel cable car chairlift and alpine hike to the emerald green bowl of Arang Kel",
        "Explore historic centuries-old Sharda Peeth temple ruins, Kel Valley & Siri Nala",
        "Overnight stays at Arang Kel Wonder Hill Cottage & Sharda Wyndham Heritage with Live BBQ & Bonfire",
      ],
      overview:
        "Experience the fairytale beauty of Kashmir's deepest frontier! This 4-day expedition takes you beyond the ordinary into the pristine border hamlet of Taobat and the magical suspended plateau of Arang Kel. Marvel at rushing streams, roaring waterfalls at Dhani and Kutton, historic Sharda Peeth, and alpine wooden cottages surrounded by pine forests.",
      itinerary: [
        {
          day: 1,
          title: "Lahore / Islamabad Departure, Muzaffarabad, Dhani & Kutton Waterfalls to Sharda",
          desc: "Departure from Lahore at 10:30 PM (previous night) and pick up participants from Islamabad. Scenic drive through Kohala Bridge to Muzaffarabad for morning breakfast. Travel into Neelum Valley along the winding Neelum River. Sightseeing stops at roaring Dhani Waterfall, Neelum Jhelum Dam, and beautiful Kutton Waterfall. Pass Athmuqam and Keran with views of the Line of Control (LOC). Arrive in Sharda by evening, check into hotel. Dinner and overnight stay at Sharda (Wyndham Heritage or equal).",
        },
        {
          day: 2,
          title: "4x4 Jeep Safari to Remote Taobat & Overnight at Arang Kel Wonder Hill Cottage",
          desc: "Breakfast in hotel. Board 4x4 rugged jeeps for an exhilarating drive to Taobat — the last paradise village of Neelum Valley. Explore Taobat's crystal streams, lush green pastures, and traditional wooden log bridges. Travel back towards Kel, take the thrilling cable car chairlift followed by a short hike up into Arang Kel. Check in, evening acoustic bonfire with delicious Live Chicken BBQ (chest/leg piece). Dinner and night stay at Arang Kel Wonder Hill Cottage.",
        },
        {
          day: 3,
          title: "Arang Kel Meadows, Kel, Siri Nala & Return to Historic Sharda",
          desc: "Morning breakfast at 9:00 AM surrounded by misty mountain views of Arang Kel bowl. Hike down to Kel and drive towards Sharda via Siri Nala. Explore historic Sharda Peeth ancient university ruins and scenic Sharda Valley (Upper Neelum optional). Check back into hotel for musical night, dinner, and comfortable overnight stay at Sharda (Wyndham Heritage or equal).",
        },
        {
          day: 4,
          title: "Sharda to Islamabad & Lahore Return Journey",
          desc: "Breakfast at 8:00 AM. Departure at 9:30 AM for the return journey. Scenic drive through Neelum Valley with a short lunch and tea stop at Muzaffarabad / Murree Expressway. Arrival in Islamabad by evening and Lahore by late night, concluding a magical Kashmir tour.",
        },
      ],
      inclusions: [
        "Comfortable AC Transportation (Saloon Coaster / Grand Cabin)",
        "Quality meals: 4 Breakfasts & 3 Dinners",
        "Live Chicken BBQ Night (1 Chest / Leg piece per person) & Bonfire with Acoustic Jamming",
        "3 Nights comfortable hotel stays (Arang Kel Wonder Hill Cottage & Sharda Wyndham Heritage or equal)",
        "Professional Tour Guide & Group Leader",
        "Basic First Aid Kit & safety assistance",
        "All highway tolls, road taxes & driver allowances",
      ],
      exclusions: [
        "4x4 Jeep Ride to Taobat",
        "Dolly / Cable car chairlift charges at Kel",
        "Extra meals, lunches & personal snacks",
        "Entry tickets to heritage sites or parks",
        "Laundry charges, room heating & personal phone bills",
        "Porter, horse riding & gear rentals",
        "Extra expenses due to landslides, weather delays, or roadblocks",
        "Travel & medical insurance liability or rescue coverage",
        "Any service not explicitly mentioned in inclusions",
      ],
      equipments: [
        "Original CNIC / Passport (Compulsory for security check-posts)",
        "Masks, Gloves & Hand Sanitizer",
        "Pillow cover & single bedsheet / chaadar",
        "Normal & warm clothes, jacket, sweater or shawl",
        "Joggers or trekking shoes with solid grip",
        "High-capacity power bank, charger & personal medicines",
      ],
      cancellationPolicy: [
        "7 Days Before Tour (If Advance Paid): 100% Amount Refund",
        "5 Days Before Tour: 100% Amount Refund",
        "3 Days Before Tour: 50% Amount Refund",
        "Cancellation on Departure Day: No Refund (For Any Reason / Excuse)",
        "Leave the Tour / Not Join Timely: No Refund (No Show / Late Join)",
      ],
      termsAndConditions: [
        "For Bookings & Queries: 0323-0980018 / 0327-5518071.",
        "Members shall not indulge in any unethical, disruptive, or abusive activity; violation leads to immediate cancellation of booking without refund.",
        "Weapons, narcotics, and prohibited substances are strictly banned.",
        "Vehicle AC will be operated periodically on steep mountain roads to avoid engine overheating.",
        "Itinerary may be adjusted due to weather, roadblocks, or official safety advisories in the best interest of participants.",
        "Participants acknowledge inherent natural risks of mountainous terrain.",
        "Zero-waste eco-tourism: please keep Kashmir trails clean and do not litter.",
        "Organizers are not responsible for lost or damaged personal belongings.",
      ],
    },
    {
      id: "kumrat-katora-4d",
      slug: "4-days-kumrat-valley-katora-lake-trek",
      title: "4 Days - Kumrat & Jahaz Banda",
      subtitle: "Jahaz Banda alpine meadows, Kumrat waterfall, deodar pine jungle, and the glacial Katora Lake.",
      duration: "4 Days / 3 Nights",
      days: 4,
      nights: 3,
      destination: "Kumrat Valley, Jahaz Banda & Katora Lake",
      category: "trekking",
      badge: "ALPINE TREK",
      featured: true,
      price: 21500,
      sharingPrices: {
        quad: 21500,
        triple: 24000,
        twin: 27500,
        privateCouple: 31000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_kumrat_katora.jpg",
      gallery: [
        "/images/real_kumrat_katora.jpg",
        "/images/real_kumrat_forest.jpg",
        "/images/real_fairy_meadows.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Wednesday",
      upcomingDates: [
        "Every Wednesday Night (Weekly Fixed Departure)",
      ],
      tags: [
        "Kumrat Valley",
        "Katora Lake",
        "Jahaz Banda",
        "Alpine Trekking",
        "Panjkora River",
        "4x4 Jeeps",
        "Bonfire & BBQ",
      ],
      highlights: [
        "Scenic drive through Swat Motorway tunnels, Timergara, Thal & roaring Panjkora River",
        "4x4 Jeep ride into dense Kumrat pine forests and roaring Kumrat Waterfall",
        "3-4 hour scenic alpine mountain hike from Taki Top to the dreamy meadows of Jahaz Banda",
        "High-altitude glacial trek to the deep cobalt bowl of Katora Lake (Bowl Lake)",
        "Starlit meadow stays in rustic chalets / camps with bonfire, live BBQ, and guitar jamming",
        "Certified mountain trek leader, first aid support, and complete 4x4 jeep logistics",
      ],
      overview:
        "An unforgettable 4-day trekking expedition into the untouched wilderness of Upper Dir. Hike through wildflower meadows, camp under celestial skies at Jahaz Banda, and reach the pristine glacial waters of Katora Lake.",
      itinerary: [
        {
          day: 1,
          title: "Departure to Thal, 4x4 Jeep Safari & Kumrat Waterfall",
          desc: "Night departure from Lahore & Islamabad. Breakfast at Chakdara / Rabat, proceed to Thal. Transfer to 4x4 jeeps into Kumrat Valley, explore Kumrat Waterfall and Panjkora River. Dinner and overnight stay in Kumrat.",
        },
        {
          day: 2,
          title: "4x4 Jeeps to Taki Top & Alpine Hike to Jahaz Banda",
          desc: "Breakfast in Kumrat, shift into 4x4 jeeps towards Jahaz Banda base. Start 3-4 hour scenic mountain hike from Taki Top. Arrive in Jahaz Banda meadows. Dinner and overnight stay in Jahaz Banda.",
        },
        {
          day: 3,
          title: "Alpine Trek to Katora Glacial Lake & Campfire BBQ",
          desc: "Breakfast in Jahaz Banda, start the rewarding trek towards majestic Katora Lake. Marvel at glacial reflections and snow peaks. Return to Jahaz Banda for an evening grand bonfire, live BBQ, and overnight stay.",
        },
        {
          day: 4,
          title: "Hike down to Taki Top & Smooth Return Drive",
          desc: "Early morning wakeup call, hike down to Taki Top, shift into 4x4 jeeps to Thal. Breakfast in Thal, board luxury coaster and drive back via Swat Motorway, arriving in Islamabad and Lahore by late evening.",
        },
      ],
      inclusions: [
        "Saloon Coaster / Grand Cabin transport throughout the tour",
        "4x4 Mountain Jeeps (Thal to Kumrat & Taki Top)",
        "3 Nights accommodation (Kumrat hotel + Jahaz Banda meadow chalets/camps)",
        "4 Breakfasts + 3 Dinners (including Live BBQ)",
        "Bonfire, Certified Trek Lead & Guide, All Tolls & Taxes",
      ],
      exclusions: [
        "Activity tickets & personal porter charges for luggage (max 15-20kg luggage allowed)",
        "Lunches, mid-day snacks & cold beverages",
        "Medical insurance, emergency evacuation & personal expenses",
      ],
    },
    {
      id: "kumrat-dojanga-3d",
      slug: "3-days-kumrat-valley-dojanga-kala-chashma",
      title: "3 Days - Kumrat",
      subtitle: "Dense deodar pine forests, roaring Panjkora river, Dojanga confluence point & Kala Chashma.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Kumrat Valley, Upper Dir",
      category: "weekend",
      badge: "FOREST RETREAT",
      featured: true,
      price: 17000,
      sharingPrices: {
        quad: 17000,
        triple: 19000,
        twin: 22000,
        privateCouple: 25000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_kumrat_forest.jpg",
      gallery: [
        "/images/real_kumrat_forest.jpg",
        "/images/real_kumrat_katora.jpg",
        "/images/real_swat_kalam.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Monday & Thursday",
      upcomingDates: [
        "Every Monday Night (Midweek Batch)",
        "Every Thursday Night (Weekend Batch)",
      ],
      tags: [
        "Kumrat Valley",
        "Dojanga",
        "Kala Chashma",
        "Kumrat Pine Forest",
        "Panjkora River",
        "4x4 Jeep Safari",
        "Bonfire",
      ],
      highlights: [
        "Scenic highway drive through Swat Motorway tunnels and Timergara to historic Thal",
        "4x4 Jeep safari through the legendary towering deodar pine forests of Kumrat",
        "Visit Dojanga (scenic mountain river confluence point) and Kala Chashma (Black Spring)",
        "Roaring Kumrat Waterfall exploration and crystal Panjkora riverside walks",
        "Riverside lodge / camp stay alongside the fresh rushing waters of Panjkora River",
        "Campfire bonfire, live chicken BBQ feast, and starry night mountain ambiance",
      ],
      overview:
        "Immerse yourself in the tranquility of dense deodar jungles! Kumrat Valley offers fresh pine air, rushing glacial waters, rustic wooden bridges, and serene starry campfire nights.",
      itinerary: [
        {
          day: 1,
          title: "Drive to Thal, 4x4 Jeep Safari into Kumrat Valley",
          desc: "Night departure from Lahore (Thokar Niaz Baig) and Islamabad (26 Number). Breakfast at Rabat / Chakdara, travel to Thal. Transfer to 4x4 jeeps into Kumrat Valley, check-in, visit Kumrat Forest. Dinner & overnight in Kumrat.",
        },
        {
          day: 2,
          title: "Full Day 4x4 Safari: Dojanga, Kala Chashma & Waterfall",
          desc: "Breakfast in Kumrat, full day 4x4 exploration of Dojanga confluence, Kala Chashma (Black Spring), and roaring Kumrat Waterfall. Evening campfire bonfire, live BBQ, and overnight stay in Kumrat.",
        },
        {
          day: 3,
          title: "Early Morning Breakfast & Smooth Return Journey",
          desc: "Early morning breakfast, transfer to jeeps back to Thal. Board luxury saloon coaster, scenic return drive via Swat Motorway, arriving in Islamabad and Lahore by late night.",
        },
      ],
      inclusions: [
        "Saloon Coaster / Grand Cabin transport",
        "4x4 Mountain Jeeps in Kumrat Valley",
        "2 Nights hotel/lodge stay in Kumrat",
        "3 Breakfasts + 2 Dinners (including Live BBQ)",
        "Bonfire, Tour Captain & Guide, All Tolls & Taxes",
      ],
      exclusions: [
        "Activity tickets & personal expenses",
        "Lunches, beverages & laundry",
        "Medical insurance & emergency evacuation",
      ],
    },
  ],
  testimonials: [
    {
      name: "Sara Khan",
      role: "Solo Traveler (Lahore)",
      trip: "8 Days Skardu, Shangrila & Hunza Cocktail",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "I joined the 8-day Cocktail expedition and had the experience of a lifetime. The De Travel Task team treated every guest with royal care. The mountain chalets, campfire acoustic jamming, and strict security protocols were exceptional!",
    },
    {
      name: "Barrister Ali Raza & Squad",
      role: "Corporate Retreat (Islamabad)",
      trip: "5 Days Hunza & Passu Cones",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "The RoadRang vibes, the Naltar 4x4 safari, and the sky lantern ceremony in Hunza were truly magical. Outstanding management, executive transport, and top-tier photography!",
    },
    {
      name: "Dr. Ayesha & Tariq Malik",
      role: "Luxury Couple Escape (Karachi)",
      trip: "5 Days Fairy Meadows & Nanga Parbat",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      content: "Our trip to Fairy Meadows was seamless from start to finish. Beautiful wooden chalets with direct Nanga Parbat view, private couple room, zero hassle, and breathtaking sights. De Travel Task is Pakistan's finest travel company!",
    },
    {
      name: "Hamza Bilal & Family",
      role: "Family Vacation (Faisalabad)",
      trip: "3 Days Naran, Shogran & Saif-ul-Malook",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "Traveled with my elderly parents and kids to Shogran and Naran. The hospitality, comfortable seating in the Grand Cabin, and top-tier hotel selections made it totally stress-free. 10/10 recommended for families!",
    },
    {
      name: "Zainab Usman",
      role: "Adventure Squad (Lahore)",
      trip: "4 Days Kumrat Valley & Katora Lake Trek",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      content: "The trek to Katora Lake with De Travel Task captains was exhilarating and well guided. Evening live BBQ and acoustic jamming by the river was unforgettable!",
    },
    {
      name: "Mohammad Omer",
      role: "Group Traveler (Rawalpindi)",
      trip: "3 Days Swat, Kalam & Malam Jabba",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      content: "Superb organization and punctual execution. The tour captains made everyone feel like family. Malam Jabba zipline and the evening bonfire in Kalam were highlights of the year!",
    },
  ],
  faqs: [
    {
      q: "Are your group expeditions safe for solo female travelers and families?",
      a: "Absolutely! Over 40% of our travelers are solo female wanderers. We provide dedicated female tour captains, verified family-safe boutique hotels, and separate gender-segregated room sharing options.",
    },
    {
      q: "Where do your tours depart from?",
      a: "Our regular group road trips depart from Multan, Sahiwal, Faisalabad, Lahore, Gujranwala, and Rawalpindi/Islamabad. We also assist travelers from Karachi and other cities with customized connecting travel arrangements.",
    },
    {
      q: "What is included in the tour packages?",
      a: "All packages include executive transport (AC Saloon Coaster / Grand Cabin / 4x4 Mountain Jeeps), quality hotel accommodations, daily breakfast and dinner, bonfires, live BBQ nights, professional tour leads, photography, and road tolls.",
    },
    {
      q: "How can I book a custom private trip with my friends/family?",
      a: "You can use our interactive 'Craft Your Tour' page or message us directly on WhatsApp (+92 323 7266292). We design custom itineraries according to your dates, group size, vehicle preference (Prado, Hiace, Coaster), and hotel tier.",
    },
    {
      q: "What is the booking and payment process?",
      a: "You can reserve your seat with a 50% advance deposit via Bank Transfer, JazzCash, Nayapay, or SadaPay. The remaining 50% is payable on the departure day prior to boarding.",
    },
  ],
  galleryMoments: [
    { title: "Nanga Parbat & Fairy Meadows Reflection", location: "Fairy Meadows", image: "/images/real_fairy_meadows.jpg" },
    { title: "Shangrila Resort & Lower Kachura Lake", location: "Skardu", image: "/images/real_shangrila_skardu.jpg" },
    { title: "Passu Cathedral Cones & Hunza Valley", location: "Hunza Valley", image: "/images/real_passu_hunza.jpg" },
    { title: "Lake Saif-ul-Malook Turquoise Waters", location: "Naran Kaghan", image: "/images/real_naran_saifulmalook.jpg" },
    { title: "Arang Kel Fairytale Green Meadows", location: "Azad Kashmir", image: "/images/real_kashmir_neelum.jpg" },
    { title: "Attabad Lake Crystal Boat Cruise", location: "Hunza Valley", image: "/images/real_hunza_attabad.jpg" },
    { title: "Katora Glacial Lake & Alpine Basin", location: "Kumrat Valley", image: "/images/real_kumrat_katora.jpg" },
    { title: "Malam Jabba Ski Mountain Slopes", location: "Swat Valley", image: "/images/real_swat_malamjabba.jpg" },
  ],
};

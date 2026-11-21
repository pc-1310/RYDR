import type { Vehicle, ClientProfile, ServiceRecord, PersonalizationFilters } from '../types';

export const CLIENT_PROFILE: ClientProfile = {
  name: "Rahul Verma",
  memberId: "RYDR-GOLD-8842",
  tier: "Gold Member",
  assignedConcierge: {
    name: "Priya Deshmukh",
    title: "Service Advisor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80",
    status: "Available"
  },
  primaryVehicle: {
    model: "RYDR Spectre EV (Top Variant)",
    vin: "IND26RYDR88291KA",
    licensePlate: "KA 01 MR 7937",
    batteryLevel: 84,
    rangeRemaining: 420,
    status: "All OK",
    lastPolished: "3 days ago by Doorstep Service Van",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
  }
};

export const LUXURY_VEHICLES: Vehicle[] = [
  {
    id: "spectre-gt",
    name: "RYDR Spectre EV",
    subtitle: "Smart Long-Range Electric Sedan",
    category: "Executive Sedan",
    propulsion: "Pure Electric",
    startingPrice: 2150000,
    rangeOrMpg: "480 km (ARAI)",
    acceleration: "4.2s (0-100 km/h)",
    power: "245 HP Electric Drive",
    topSpeed: "180 km/h",
    seating: "5-Seater Premium Cabin",
    exteriorImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    description: "Designed for daily city commutes and weekend getaways with zero range anxiety. Features plush tan leatherette seats, whisper-quiet cabin acoustics, and 480 km certified range.",
    highlightSpecs: [
      { label: "Fast DC Charging", value: "10-80% in 35 mins" },
      { label: "Battery Pack", value: "68 kWh Liquid-Cooled" },
      { label: "Boot Space", value: "460 Litres + Frunk" },
      { label: "Ground Clearance", value: "175 mm (India Spec)" }
    ],
    curatedFeatures: [
      "Acoustic Laminated Windshield & Windows",
      "Ventilated Front Seats with Electric Adjustment",
      "Harman Kardon 3D Surround Audio (8 speakers)",
      "Panoramic Sunroof with UV Protection"
    ],
    matchScore: 98,
    statusBadge: "Top Rated"
  },
  {
    id: "lumina-suv",
    name: "RYDR Lumina SUV",
    subtitle: "Family Comfort On Any Terrain",
    category: "Luxury SUV",
    propulsion: "Pure Electric",
    startingPrice: 2480000,
    rangeOrMpg: "520 km (ARAI)",
    acceleration: "4.9s (0-100 km/h)",
    power: "280 HP Dual-Motor AWD",
    topSpeed: "175 km/h",
    seating: "5 or 7 Seater Flexible Layout",
    exteriorImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    description: "Commanding SUV road presence equipped with high ground clearance, multi-terrain drive modes, and panoramic sky lounge for family road trips.",
    highlightSpecs: [
      { label: "Ground Clearance", value: "205 mm" },
      { label: "Battery Capacity", value: "76 kWh Long-Range" },
      { label: "Drivetrain", value: "Intelligent Electric AWD" },
      { label: "Safety Rating", value: "5-Star BNCAP (Tested)" }
    ],
    curatedFeatures: [
      "Panoramic Sunroof with Ambient Mood Lighting",
      "Wireless Apple CarPlay & Android Auto",
      "Level 2 ADAS Highway Driving Assist",
      "Cooled Glovebox & Wireless Phone Charger"
    ],
    matchScore: 95,
    statusBadge: "Family Favorite"
  },
  {
    id: "aether-roadster",
    name: "RYDR Aether Sport",
    subtitle: "Spirited Performance EV",
    category: "Track Roadster",
    propulsion: "Pure Electric",
    startingPrice: 2850000,
    rangeOrMpg: "420 km (ARAI)",
    acceleration: "3.1s (0-100 km/h)",
    power: "420 HP Dual-Motor",
    topSpeed: "210 km/h",
    seating: "2-Seat Sport Coupe",
    exteriorImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    description: "Sport-tuned suspension, active electronic torque vectoring, and instant acceleration tailored for highway overtaking and enthusiast weekend drives.",
    highlightSpecs: [
      { label: "Drive Modes", value: "Eco / City / Sport+" },
      { label: "Brakes", value: "All-Round Ventilated Discs" },
      { label: "Alloy Wheels", value: "19-inch Aeroblade" },
      { label: "0-100 km/h", value: "3.1 seconds" }
    ],
    curatedFeatures: [
      "Sport Bucket Seats in Charcoal Black",
      "Head-Up Display (HUD) with Turn-by-Turn",
      "Active Sport Mode Sound Generator",
      "Black Styling Pack with Carbon Spoiler"
    ],
    matchScore: 92,
    statusBadge: "Sport Edition"
  },
  {
    id: "elysian-sedan",
    name: "RYDR Elysian Sedan",
    subtitle: "The Benchmark in Comfort & Value",
    category: "Executive Sedan",
    propulsion: "Pure Electric",
    startingPrice: 1650000,
    rangeOrMpg: "440 km (ARAI)",
    acceleration: "5.6s (0-100 km/h)",
    power: "180 HP Front Motor",
    topSpeed: "160 km/h",
    seating: "5-Seat Executive Cabin",
    exteriorImage: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    description: "The smart executive sedan featuring reclined rear passenger comfort, silent cabin dampening, and low running cost of ₹1.1/km.",
    highlightSpecs: [
      { label: "Running Cost", value: "₹1.10 per km" },
      { label: "Battery", value: "52 kWh Blade Cell Pack" },
      { label: "Air Filtration", value: "PM2.5 Cabin Air Purifier" },
      { label: "Turning Radius", value: "5.1m (City Friendly)" }
    ],
    curatedFeatures: [
      "Rear Seat AC Vents & USB-C Fast Ports",
      "Foldable Rear Center Armrest with Cup Holders",
      "Smart Keyless Entry & Push-Button Start",
      "Automatic Climate Control with Dual Zones"
    ],
    matchScore: 94,
    statusBadge: "Best Value"
  }
];

export const INITIAL_FILTERS: PersonalizationFilters = {
  propulsion: 'All',
  category: 'All',
  budgetMax: 3000000,
  primaryPriority: 'Daily Comfort & City Commute',
  seating: 'All'
};

export const PROMPT_SUGGESTIONS = [
  {
    title: "Electric Car under ₹25L",
    prompt: "I want an electric car under ₹25 Lakhs with over 450 km range and low running cost.",
    tag: "Popular"
  },
  {
    title: "Compare Spectre vs Lumina",
    prompt: "Compare the RYDR Spectre EV and Lumina SUV for city commutes and family highway trips.",
    tag: "Comparison"
  },
  {
    title: "Calculate Loan & EMI",
    prompt: "What will be my monthly EMI for the RYDR Spectre EV with a ₹3 Lakh down payment?",
    tag: "Calculator"
  },
  {
    title: "Book Doorstep Test Drive",
    prompt: "I'd like to book a home test drive for the RYDR Spectre EV in Bengaluru.",
    tag: "Booking"
  }
];

export const MOCK_SERVICE_RECORDS: ServiceRecord[] = [
  {
    id: "SR-901",
    service: "Annual General Service & Battery Health Check",
    date: "18 March 2026",
    mileage: "12,600 km",
    atelier: "RYDR Service Centre Whitefield",
    status: "Completed"
  },
  {
    id: "SR-902",
    service: "Interior Deep Cleaning & Exterior Polish",
    date: "14 January 2026",
    mileage: "10,000 km",
    atelier: "RYDR Care Hub",
    status: "Completed"
  },
  {
    id: "SR-903",
    service: "Wheel Alignment, Balancing & Tyre Rotation",
    date: "28 April 2026",
    mileage: "15,000 km",
    atelier: "Doorstep Service Van",
    status: "Upcoming"
  }
];

export const STORIES_DATA = [
  {
    id: "story-1",
    title: "Weekend Road Trips: Bengaluru to Coorg",
    category: "Owner Stories",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    description: "How RYDR owners made the 260 km highway drive to Coorg with zero range anxiety and scenic coffee estate stops."
  },
  {
    id: "story-2",
    title: "EV Driving & Safety Workshop",
    category: "Community Drive",
    readTime: "Event Recap",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80",
    description: "Over 40 RYDR owners gathered for highway safety drills, battery longevity tips, and a group convoy to Nandi Hills."
  },
  {
    id: "story-3",
    title: "Highway Fast-Charging Network Expands",
    category: "Charging Update",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558441719-aa34ab54e7f3?auto=format&fit=crop&w=600&q=80",
    description: "Over 350+ partner 60kW DC fast chargers added along major highway routes with seamless plug & charge via RYDR app."
  }
];

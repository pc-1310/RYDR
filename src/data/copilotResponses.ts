import type { ChatMessage, PersonalizationFilters } from '../types';
import { LUXURY_VEHICLES } from './mockData';

export function generateSimulatedResponse(
  userQuery: string,
  filters: PersonalizationFilters
): Omit<ChatMessage, 'id' | 'timestamp'> {
  const query = userQuery.toLowerCase();

  // 1. Comparison Intent
  if (query.includes('compare') || query.includes('versus') || query.includes('vs')) {
    const spectre = LUXURY_VEHICLES.find(v => v.id === 'spectre-gt')!;
    const lumina = LUXURY_VEHICLES.find(v => v.id === 'lumina-suv')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `I've prepared a side-by-side comparison between the **RYDR Spectre EV** (₹21.50 Lakhs) and the **RYDR Lumina SUV** (₹24.80 Lakhs).\n\nWhile the Spectre EV is a streamlined electric sedan delivering 480 km range and nimble city handling, the Lumina SUV provides higher ground clearance (205 mm), flexible 5/7 seating, and family road-trip comfort.\n\nTake a look at the feature comparison below:`,
      comparisonVehicles: [spectre, lumina],
      suggestedFollowUps: [
        "Calculate EMI comparison for both",
        "Book home test drive for Spectre EV",
        "Explore interior colour options"
      ]
    };
  }

  // 2. Financing & Lease / EMI Intent
  if (query.includes('finance') || query.includes('lease') || query.includes('emi') || query.includes('cost') || query.includes('monthly') || query.includes('price')) {
    const spectre = LUXURY_VEHICLES.find(v => v.id === 'spectre-gt')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `Here is an estimated loan & EMI breakdown for the **${spectre.name}**.\n\nWith an ex-showroom price of **₹21.50 Lakhs** and an assumed down payment of **₹3,00,000** over a 60-month loan tenure at 8.5% interest, the estimated monthly EMI is approximately **₹37,950/mo**.\n\nThis includes your 8-Year/1,60,000 km battery warranty and 24/7 Roadside Assistance.`,
      financingDetails: {
        vehicleName: spectre.name,
        vehiclePrice: spectre.startingPrice,
        monthlyPayment: 37950,
        termMonths: 60,
        downPayment: 300000,
        apr: 8.5
      },
      suggestedVehicles: [spectre],
      suggestedFollowUps: [
        "Adjust down payment to ₹5,00,000",
        "Check 7-year loan EMI options",
        "Book doorstep test drive"
      ]
    };
  }

  // 3. Test Drive Booking Intent
  if (query.includes('test drive') || query.includes('drive') || query.includes('viewing') || query.includes('appointment') || query.includes('book')) {
    const targetVehicle = LUXURY_VEHICLES.find(v => 
      query.includes('lumina') ? v.id === 'lumina-suv' :
      query.includes('aether') ? v.id === 'aether-roadster' :
      query.includes('elysian') ? v.id === 'elysian-sedan' :
      v.id === 'spectre-gt'
    ) || LUXURY_VEHICLES[0];

    return {
      sender: 'assistant',
      isSimulated: true,
      content: `Happy to arrange that! As a RYDR customer, your doorstep test drive with the **${targetVehicle.name}** includes free delivery to your home or office address in Bengaluru, accompanied by a product advisor.\n\nPlease choose your preferred date and time slot below:`,
      testDriveVehicle: targetVehicle,
      suggestedFollowUps: [
        "Request weekend morning slot",
        "Send brochure on WhatsApp",
        "Check ex-showroom price list"
      ]
    };
  }

  // 4. Track / Performance Intent
  if (query.includes('speed') || query.includes('track') || query.includes('fast') || query.includes('power') || query.includes('sport')) {
    const aether = LUXURY_VEHICLES.find(v => v.id === 'aether-roadster')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `For spirited highway dynamics and instant acceleration, the **RYDR Aether Sport** is tuned for maximum excitement. With dual motors generating 420 HP, it accelerates from 0 to 100 km/h in 3.1 seconds with sport sound tuning enabled.`,
      suggestedVehicles: [aether],
      suggestedFollowUps: [
        "Check EV Driving & Safety Workshop",
        "View Sport Mode sound demo",
        "Compare with Spectre EV"
      ]
    };
  }

  // 5. SUV / Family / Space Intent
  if (query.includes('suv') || query.includes('family') || query.includes('space') || query.includes('seating') || query.includes('luggage')) {
    const lumina = LUXURY_VEHICLES.find(v => v.id === 'lumina-suv')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `For family road trips and weekend highway drives, the **RYDR Lumina SUV** is an ideal fit. It offers high 205 mm ground clearance, spacious 5 or 7 seating, panoramic sunroof, and 520 km certified range that easily handles ghat roads and city potholes alike.`,
      suggestedVehicles: [lumina],
      suggestedFollowUps: [
        "Show 7-seat configuration layout",
        "Book doorstep test drive",
        "Compare with Elysian Sedan"
      ]
    };
  }

  // 6. Filter-aware or General Guidance
  let matched = LUXURY_VEHICLES.filter(v => {
    if (filters.propulsion !== 'All' && v.propulsion !== filters.propulsion) return false;
    if (filters.category !== 'All' && v.category !== filters.category) return false;
    if (v.startingPrice > filters.budgetMax) return false;
    return true;
  });

  if (matched.length === 0) {
    matched = [LUXURY_VEHICLES[0], LUXURY_VEHICLES[1]];
  }

  const budgetLakhs = (filters.budgetMax / 100000).toFixed(1);

  return {
    sender: 'assistant',
    isSimulated: true,
    content: `Based on your preferences (**${filters.propulsion}**, **${filters.primaryPriority}**, budget up to **₹${budgetLakhs} Lakhs**), here are the curated models that best suit your requirements:`,
    suggestedVehicles: matched.slice(0, 2),
    suggestedFollowUps: [
      "Compare these two side-by-side",
      "Check interior themes in 360° Showroom",
      "Calculate 5-year loan EMI options"
    ]
  };
}

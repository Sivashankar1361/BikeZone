// Sample vehicle data for the marketplace
export const vehicles = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    category: "bikes",
    fuelType: "petrol",
    price: 199000,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572810655221-ea0b53e92b81?w=800&h=600&fit=crop"
    ],
    specs: {
      engine: "349cc",
      power: "20.2 HP",
      torque: "27 Nm",
      mileage: "45 km/l",
      fuelCapacity: "13.5L",
      weight: "195 kg",
      topSpeed: "104 km/h"
    },
    features: ["Electric Start", "Dual Channel ABS", "LED Headlight", "Digital Console"],
    rating: 4.5,
    reviews: 245,
    launchDate: "2023-03-15",
    availability: "available"
  },
  {
    id: 2,
    name: "Honda Activa 6G",
    brand: "Honda",
    category: "scooters",
    fuelType: "petrol",
    price: 78000,
    images: [
      "https://images.unsplash.com/photo-1544465028-1429bc41b078?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580457129050-e8b43de9cfb1?w=800&h=600&fit=crop"
    ],
    specs: {
      engine: "109.51cc",
      power: "7.68 HP",
      torque: "8.84 Nm",
      mileage: "60 km/l",
      fuelCapacity: "5.3L",
      weight: "107 kg",
      topSpeed: "83 km/h"
    },
    features: ["LED Headlight", "Silent Start System", "Metal Body", "Enhanced Comfort"],
    rating: 4.3,
    reviews: 892,
    launchDate: "2023-01-10",
    availability: "available"
  },
  {
    id: 3,
    name: "Ola S1 Pro",
    brand: "Ola Electric",
    category: "evs",
    fuelType: "electric",
    price: 129999,
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613142436430-0c8db0c9ea06?w=800&h=600&fit=crop"
    ],
    specs: {
      motor: "8.5 kW",
      power: "11 HP",
      torque: "58 Nm",
      range: "181 km",
      chargingTime: "2.5 hours",
      weight: "125 kg",
      topSpeed: "116 km/h"
    },
    features: ["Reverse Mode", "Hill Hold", "Cruise Control", "Music Playback", "Navigation"],
    rating: 4.1,
    reviews: 156,
    launchDate: "2023-05-20",
    availability: "available"
  },
  {
    id: 4,
    name: "KTM Duke 390",
    brand: "KTM",
    category: "bikes",
    fuelType: "petrol",
    price: 295000,
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544465028-1429bc41b078?w=800&h=600&fit=crop"
    ],
    specs: {
      engine: "373.2cc",
      power: "43 HP",
      torque: "37 Nm",
      mileage: "25 km/l",
      fuelCapacity: "13.4L",
      weight: "167 kg",
      topSpeed: "167 km/h"
    },
    features: ["TFT Display", "Cornering ABS", "Quickshifter+", "Track Mode"],
    rating: 4.6,
    reviews: 432,
    launchDate: "2023-02-28",
    availability: "available"
  },
  {
    id: 5,
    name: "TVS Jupiter 125",
    brand: "TVS",
    category: "scooters",
    fuelType: "petrol",
    price: 85000,
    images: [
      "https://images.unsplash.com/photo-1580457129050-e8b43de9cfb1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544465028-1429bc41b078?w=800&h=600&fit=crop"
    ],
    specs: {
      engine: "124.8cc",
      power: "8.15 HP",
      torque: "10.5 Nm",
      mileage: "62 km/l",
      fuelCapacity: "6L",
      weight: "108 kg",
      topSpeed: "85 km/h"
    },
    features: ["LED DRL", "Bluetooth Connectivity", "Navigation", "Call/SMS Alerts"],
    rating: 4.4,
    reviews: 234,
    launchDate: "2023-04-12",
    availability: "available"
  },
  {
    id: 6,
    name: "Ather 450X",
    brand: "Ather Energy",
    category: "evs",
    fuelType: "electric",
    price: 149000,
    images: [
      "https://images.unsplash.com/photo-1613142436430-0c8db0c9ea06?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
    ],
    specs: {
      motor: "6.4 kW",
      power: "8.58 HP",
      torque: "26 Nm",
      range: "146 km",
      chargingTime: "5.4 hours",
      weight: "108 kg",
      topSpeed: "90 km/h"
    },
    features: ["Fast Charging", "OTA Updates", "Anti-theft", "Touchscreen Dashboard"],
    rating: 4.2,
    reviews: 98,
    launchDate: "2023-06-15",
    availability: "available"
  }
];

export const upcomingVehicles = [
  {
    id: 101,
    name: "Royal Enfield Himalayan 450",
    brand: "Royal Enfield",
    category: "bikes",
    fuelType: "petrol",
    expectedPrice: 280000,
    launchDate: "2024-02-15",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"],
    keyFeatures: ["Liquid Cooled Engine", "Tripper Navigation", "Long Travel Suspension"]
  },
  {
    id: 102,
    name: "Bajaj Chetak Premium",
    brand: "Bajaj",
    category: "evs",
    fuelType: "electric",
    expectedPrice: 165000,
    launchDate: "2024-01-20",
    images: ["https://images.unsplash.com/photo-1613142436430-0c8db0c9ea06?w=800&h=600&fit=crop"],
    keyFeatures: ["150km Range", "Fast Charging", "Connected Features"]
  }
];

export const brands = [
  "Royal Enfield", "Honda", "Ola Electric", "KTM", "TVS", "Ather Energy", 
  "Bajaj", "Yamaha", "Hero", "Suzuki", "Kawasaki", "Harley-Davidson"
];

export const fuelTypes = ["petrol", "electric", "hybrid"];

export const categories = [
  { id: "bikes", name: "Bikes", icon: "🏍️" },
  { id: "scooters", name: "Scooters", icon: "🛵" },
  { id: "evs", name: "Electric", icon: "⚡" }
];
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Search } from 'lucide-react';

const Showrooms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const showrooms = [
    {
      id: 1,
      name: "Royal Enfield Showroom",
      brand: "Royal Enfield",
      address: "Shop No. 15, MG Road, Bangalore, Karnataka 560001",
      phone: "+91 98765 43210",
      rating: 4.5,
      reviews: 127,
      hours: "9:00 AM - 8:00 PM",
      city: "Bangalore",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Honda Two Wheeler",
      brand: "Honda",
      address: "Plot 23, Sector 18, Noida, Uttar Pradesh 201301",
      phone: "+91 98765 43211",
      rating: 4.3,
      reviews: 89,
      hours: "10:00 AM - 7:00 PM",
      city: "Delhi",
      image: "https://images.unsplash.com/photo-1544465028-1429bc41b078?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "TVS Motors Showroom",
      brand: "TVS",
      address: "142, Anna Salai, Chennai, Tamil Nadu 600002",
      phone: "+91 98765 43212",
      rating: 4.2,
      reviews: 156,
      hours: "9:30 AM - 8:30 PM",
      city: "Chennai",
      image: "https://images.unsplash.com/photo-1580457129050-e8b43de9cfb1?w=400&h=300&fit=crop"
    }
  ];

  const cities = ["All Cities", "Bangalore", "Delhi", "Chennai", "Mumbai", "Pune", "Hyderabad"];

  const filteredShowrooms = showrooms.filter(showroom => {
    const matchesSearch = showroom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         showroom.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         showroom.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = !selectedCity || selectedCity === 'All Cities' || showroom.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Find Showrooms</h1>
        <p className="text-gray-600">Locate authorized dealers and book test rides</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search showrooms, brands, or locations..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Showroom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShowrooms.map((showroom) => (
          <div key={showroom.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <img
              src={showroom.image}
              alt={showroom.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{showroom.name}</h3>
                  <p className="text-primary-600 font-semibold">{showroom.brand}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{showroom.rating}</span>
                  <span className="text-sm text-gray-500">({showroom.reviews})</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{showroom.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{showroom.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{showroom.hours}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Book Test Ride
                </button>
                <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredShowrooms.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <MapPin size={64} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No showrooms found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      )}

      {/* Test Ride Booking Section */}
      <div className="bg-gray-100 rounded-xl p-8 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book a Test Ride</h2>
          <p className="text-gray-600 mb-6">Experience your dream bike before you buy</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
              <select className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option value="">Select Vehicle</option>
                <option value="royal-enfield-classic">Royal Enfield Classic 350</option>
                <option value="honda-activa">Honda Activa 6G</option>
                <option value="ktm-duke">KTM Duke 390</option>
              </select>
            </div>
            <textarea
              rows="3"
              placeholder="Additional Message (Optional)"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Book Test Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Showrooms;
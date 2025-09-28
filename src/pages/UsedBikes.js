import React from 'react';
import { Plus, MapPin, Calendar, Gauge } from 'lucide-react';

const UsedBikes = () => {
  const usedBikes = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      year: 2021,
      price: 145000,
      originalPrice: 199000,
      kmDriven: 15000,
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      condition: "Excellent"
    },
    {
      id: 2,
      name: "Honda Activa 6G",
      brand: "Honda",
      year: 2022,
      price: 65000,
      originalPrice: 78000,
      kmDriven: 8000,
      location: "Delhi, Delhi",
      image: "https://images.unsplash.com/photo-1544465028-1429bc41b078?w=800&h=600&fit=crop",
      condition: "Good"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Used Bikes</h1>
          <p className="text-gray-600">Find great deals on pre-owned vehicles</p>
        </div>
        <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Sell Your Bike</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usedBikes.map((bike) => (
          <div key={bike.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  bike.condition === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {bike.condition}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{bike.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{bike.brand} • {bike.year}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-primary-600">{formatPrice(bike.price)}</div>
                  <div className="text-sm text-gray-500 line-through">{formatPrice(bike.originalPrice)}</div>
                </div>
                <div className="text-sm text-green-600 font-semibold">
                  Save {formatPrice(bike.originalPrice - bike.price)}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Gauge size={16} />
                  <span>{bike.kmDriven.toLocaleString()} km driven</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{bike.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>{bike.year}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Contact Seller
                </button>
                <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sell Your Bike Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Sell Your Bike?</h2>
          <p className="text-blue-100 mb-6">Get the best price for your vehicle with our easy selling process</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold mb-2">Post Your Ad</h3>
              <p className="text-blue-100 text-sm">Upload photos and details in minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Get Best Price</h3>
              <p className="text-blue-100 text-sm">Our experts help you price it right</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Safe Transaction</h3>
              <p className="text-blue-100 text-sm">Secure payment and transfer process</p>
            </div>
          </div>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Selling Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsedBikes;
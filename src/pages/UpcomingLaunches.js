import React from 'react';
import { Calendar, Bell, Star, Zap, Fuel } from 'lucide-react';
import { upcomingVehicles } from '../data/vehicleData';

const UpcomingLaunches = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntilLaunch = (launchDate) => {
    const today = new Date();
    const launch = new Date(launchDate);
    const diffTime = launch - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getFuelIcon = (fuelType) => {
    return fuelType === 'electric' ? <Zap size={16} className="text-green-500" /> : <Fuel size={16} className="text-blue-500" />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Launches</h1>
        <p className="text-gray-600">Be the first to know about the latest two-wheelers hitting the market</p>
      </div>

      {/* Featured Upcoming Launch */}
      {upcomingVehicles.length > 0 && (
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  COMING SOON
                </span>
                <div className="flex items-center space-x-1">
                  {getFuelIcon(upcomingVehicles[0].fuelType)}
                  <span className="capitalize text-sm">{upcomingVehicles[0].fuelType}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">{upcomingVehicles[0].name}</h2>
              <p className="text-blue-100 text-lg mb-4">{upcomingVehicles[0].brand}</p>
              <div className="text-2xl font-bold mb-4">
                Expected Price: {formatPrice(upcomingVehicles[0].expectedPrice)}
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <Calendar size={20} />
                <span>Launch Date: {formatDate(upcomingVehicles[0].launchDate)}</span>
              </div>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-1">
                  {upcomingVehicles[0].keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Notified
              </button>
            </div>
            <div>
              <img
                src={upcomingVehicles[0].images[0]}
                alt={upcomingVehicles[0].name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {upcomingVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={vehicle.images[0]}
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  {getDaysUntilLaunch(vehicle.launchDate)} DAYS TO GO
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Bell size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                {getFuelIcon(vehicle.fuelType)}
                <span className="text-sm text-gray-600 capitalize">{vehicle.fuelType}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-1">{vehicle.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{vehicle.brand}</p>
              
              <div className="text-xl font-bold text-primary-600 mb-3">
                {formatPrice(vehicle.expectedPrice)}
                <span className="text-sm text-gray-500 font-normal"> (Expected)</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{formatDate(vehicle.launchDate)}</span>
              </div>
              
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                <ul className="space-y-1">
                  {vehicle.keyFeatures.slice(0, 2).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-center space-x-1">
                      <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {vehicle.keyFeatures.length > 2 && (
                    <li className="text-xs text-gray-500">
                      +{vehicle.keyFeatures.length - 2} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Get Notified
                </button>
                <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-100 rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Get notified about new launches, price updates, and exclusive offers</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Launch Calendar */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Launch Calendar 2024</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['January', 'February', 'March', 'April'].map((month, index) => (
              <div key={month} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">{month} 2024</h3>
                <div className="space-y-2">
                  {upcomingVehicles
                    .filter(vehicle => new Date(vehicle.launchDate).getMonth() === index)
                    .map(vehicle => (
                      <div key={vehicle.id} className="text-sm">
                        <div className="font-medium text-gray-700">{vehicle.name}</div>
                        <div className="text-gray-500">{formatDate(vehicle.launchDate)}</div>
                      </div>
                    ))}
                  {upcomingVehicles.filter(vehicle => new Date(vehicle.launchDate).getMonth() === index).length === 0 && (
                    <div className="text-sm text-gray-400">No launches scheduled</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLaunches;
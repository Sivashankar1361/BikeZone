import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Fuel, Zap } from 'lucide-react';

const VehicleCard = ({ vehicle }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getFuelIcon = (fuelType) => {
    return fuelType === 'electric' ? <Zap size={16} className="text-green-500" /> : <Fuel size={16} className="text-blue-500" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={vehicle.images[0]}
          alt={vehicle.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
          <Heart size={16} className="text-gray-400 hover:text-red-500" />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            vehicle.fuelType === 'electric' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {getFuelIcon(vehicle.fuelType)}
            <span className="ml-1 capitalize">{vehicle.fuelType}</span>
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
            {vehicle.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{vehicle.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{vehicle.brand}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary-600">
            {formatPrice(vehicle.price)}
          </div>
          <div className="text-sm text-gray-500">
            {vehicle.reviews} reviews
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Engine:</span>
            <div className="font-semibold">{vehicle.specs.engine || vehicle.specs.motor}</div>
          </div>
          <div>
            <span className="text-gray-500">
              {vehicle.fuelType === 'electric' ? 'Range:' : 'Mileage:'}
            </span>
            <div className="font-semibold">
              {vehicle.fuelType === 'electric' ? vehicle.specs.range : vehicle.specs.mileage}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link
            to={`/product/${vehicle.id}`}
            className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
          >
            View Details
          </Link>
          <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
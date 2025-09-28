import React, { useState } from 'react';
import { Search, X, Plus } from 'lucide-react';
import { vehicles } from '../data/vehicleData';

const Compare = () => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addVehicle = (vehicle) => {
    if (selectedVehicles.length < 3 && !selectedVehicles.find(v => v.id === vehicle.id)) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const removeVehicle = (vehicleId) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Compare Vehicles</h1>
        <p className="text-gray-600">Compare up to 3 vehicles side by side</p>
      </div>

      {/* Vehicle Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[0, 1, 2].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            {selectedVehicles[index] ? (
              <div className="relative">
                <button
                  onClick={() => removeVehicle(selectedVehicles[index].id)}
                  className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                >
                  <X size={16} />
                </button>
                <img
                  src={selectedVehicles[index].images[0]}
                  alt={selectedVehicles[index].name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg">{selectedVehicles[index].name}</h3>
                <p className="text-gray-600">{selectedVehicles[index].brand}</p>
                <p className="text-primary-600 font-bold text-xl mt-2">
                  {formatPrice(selectedVehicles[index].price)}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Plus size={48} className="text-gray-400" />
                </div>
                <button
                  onClick={() => setShowSearch(true)}
                  className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  Add Vehicle {index + 1}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Select a Vehicle</h3>
              <button
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="relative mb-4">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vehicles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="space-y-2">
              {filteredVehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => addVehicle(vehicle)}
                  disabled={selectedVehicles.find(v => v.id === vehicle.id)}
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    selectedVehicles.find(v => v.id === vehicle.id)
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <div className="font-semibold">{vehicle.name}</div>
                      <div className="text-sm text-gray-600">{vehicle.brand}</div>
                      <div className="text-primary-600 font-bold">{formatPrice(vehicle.price)}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      {selectedVehicles.length > 1 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold">Specification</th>
                  {selectedVehicles.map((vehicle) => (
                    <th key={vehicle.id} className="text-center p-4 font-semibold min-w-64">
                      <div className="space-y-2">
                        <img
                          src={vehicle.images[0]}
                          alt={vehicle.name}
                          className="w-full h-32 object-cover rounded mx-auto"
                        />
                        <div className="font-bold">{vehicle.name}</div>
                        <div className="text-sm text-gray-600">{vehicle.brand}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-semibold bg-gray-50">Price</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4 text-center font-bold text-primary-600">
                      {formatPrice(vehicle.price)}
                    </td>
                  ))}
                </tr>
                {Object.keys(selectedVehicles[0]?.specs || {}).map((spec) => (
                  <tr key={spec} className="border-t">
                    <td className="p-4 font-semibold bg-gray-50 capitalize">
                      {spec.replace(/([A-Z])/g, ' $1')}
                    </td>
                    {selectedVehicles.map((vehicle) => (
                      <td key={vehicle.id} className="p-4 text-center">
                        {vehicle.specs[spec] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t">
                  <td className="p-4 font-semibold bg-gray-50">Rating</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4 text-center">
                      ⭐ {vehicle.rating}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedVehicles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={64} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No vehicles selected</h3>
          <p className="text-gray-500">Add vehicles to start comparing</p>
        </div>
      )}
    </div>
  );
};

export default Compare;
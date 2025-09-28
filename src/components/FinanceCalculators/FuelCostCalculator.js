import React, { useState, useEffect } from 'react';
import { Fuel, TrendingDown, Calendar, BarChart3 } from 'lucide-react';

const FuelCostCalculator = ({ vehicleMileage, fuelType }) => {
  const [formData, setFormData] = useState({
    mileage: vehicleMileage || 45, // km/l
    fuelPrice: fuelType === 'electric' ? 8 : 110, // ₹/unit (electricity ₹/kWh, petrol ₹/l)
    dailyDistance: 30, // km per day
    workingDays: 25, // days per month
    fuelType: fuelType || 'petrol'
  });

  const [results, setResults] = useState({
    dailyCost: 0,
    monthlyCost: 0,
    yearlyCost: 0,
    monthlyFuelConsumption: 0,
    yearlyFuelConsumption: 0
  });

  const calculateFuelCost = () => {
    const { mileage, fuelPrice, dailyDistance, workingDays, fuelType } = formData;
    
    const monthlyDistance = dailyDistance * workingDays;
    const yearlyDistance = monthlyDistance * 12;
    
    let monthlyFuelConsumption, yearlyFuelConsumption, dailyCost, monthlyCost, yearlyCost;
    
    if (fuelType === 'electric') {
      // For electric vehicles, mileage is km/kWh
      monthlyFuelConsumption = monthlyDistance / mileage; // kWh per month
      yearlyFuelConsumption = yearlyDistance / mileage; // kWh per year
      
      dailyCost = (dailyDistance / mileage) * fuelPrice;
      monthlyCost = monthlyFuelConsumption * fuelPrice;
      yearlyCost = yearlyFuelConsumption * fuelPrice;
    } else {
      // For petrol/diesel vehicles
      monthlyFuelConsumption = monthlyDistance / mileage; // litres per month
      yearlyFuelConsumption = yearlyDistance / mileage; // litres per year
      
      dailyCost = (dailyDistance / mileage) * fuelPrice;
      monthlyCost = monthlyFuelConsumption * fuelPrice;
      yearlyCost = yearlyFuelConsumption * fuelPrice;
    }

    setResults({
      dailyCost: Math.round(dailyCost),
      monthlyCost: Math.round(monthlyCost),
      yearlyCost: Math.round(yearlyCost),
      monthlyFuelConsumption: Math.round(monthlyFuelConsumption * 10) / 10,
      yearlyFuelConsumption: Math.round(yearlyFuelConsumption * 10) / 10
    });
  };

  useEffect(() => {
    calculateFuelCost();
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleFuelTypeChange = (newFuelType) => {
    setFormData(prev => ({
      ...prev,
      fuelType: newFuelType,
      fuelPrice: newFuelType === 'electric' ? 8 : (newFuelType === 'petrol' ? 110 : 95),
      mileage: newFuelType === 'electric' ? 100 : (newFuelType === 'petrol' ? 45 : 50)
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getFuelUnit = () => {
    switch (formData.fuelType) {
      case 'electric': return 'kWh';
      case 'petrol': return 'litres';
      case 'diesel': return 'litres';
      default: return 'litres';
    }
  };

  const getMileageUnit = () => {
    switch (formData.fuelType) {
      case 'electric': return 'km/kWh';
      case 'petrol': return 'km/l';
      case 'diesel': return 'km/l';
      default: return 'km/l';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-100 p-2 rounded-lg">
          <Fuel size={24} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Fuel Cost Calculator</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fuel Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['petrol', 'diesel', 'electric'].map((type) => (
                <button
                  key={type}
                  onClick={() => handleFuelTypeChange(type)}
                  className={`py-2 px-3 rounded-lg border font-medium capitalize transition-colors ${
                    formData.fuelType === type
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mileage ({getMileageUnit()})
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.mileage}
              onChange={(e) => handleInputChange('mileage', e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder={formData.fuelType === 'electric' ? '100' : '45'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fuel Price (₹/{formData.fuelType === 'electric' ? 'kWh' : 'litre'})
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.fuelPrice}
              onChange={(e) => handleInputChange('fuelPrice', e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder={formData.fuelType === 'electric' ? '8' : '110'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Daily Distance (km)
            </label>
            <input
              type="number"
              value={formData.dailyDistance}
              onChange={(e) => handleInputChange('dailyDistance', e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Working Days per Month
            </label>
            <input
              type="number"
              value={formData.workingDays}
              onChange={(e) => handleInputChange('workingDays', e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="25"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar size={24} />
              <h3 className="text-xl font-bold">Monthly Fuel Cost</h3>
            </div>
            <div className="text-3xl font-bold">{formatCurrency(results.monthlyCost)}</div>
            <p className="text-green-100 mt-2">Based on your usage pattern</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Daily Cost</div>
              <div className="text-xl font-bold text-gray-800">{formatCurrency(results.dailyCost)}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Yearly Cost</div>
              <div className="text-xl font-bold text-gray-800">{formatCurrency(results.yearlyCost)}</div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm text-gray-600">Monthly Fuel Consumption</div>
            <div className="text-2xl font-bold text-gray-800">
              {results.monthlyFuelConsumption} {getFuelUnit()}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Yearly: {results.yearlyFuelConsumption} {getFuelUnit()}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
              <BarChart3 size={20} />
              <span>Cost Breakdown</span>
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Per km cost</span>
                <span className="font-bold">₹{(results.dailyCost / formData.dailyDistance).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Weekly cost</span>
                <span className="font-bold">{formatCurrency(results.dailyCost * 7)}</span>
              </div>
            </div>
          </div>

          {/* Savings Comparison */}
          {formData.fuelType !== 'electric' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
                <TrendingDown size={20} className="text-green-600" />
                <span>Electric Vehicle Savings</span>
              </h4>
              <div className="text-sm text-gray-600">
                If you switch to electric, you could save approximately{' '}
                <span className="font-bold text-green-600">
                  {formatCurrency(results.monthlyCost - (formData.dailyDistance * formData.workingDays / 100 * 8))}
                </span>
                {' '}per month
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Fuel Saving Tips:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Maintain proper tire pressure to improve fuel efficiency</li>
          <li>• Avoid aggressive acceleration and sudden braking</li>
          <li>• Regular servicing helps maintain optimal mileage</li>
          <li>• Plan your routes to avoid traffic and reduce travel time</li>
          <li>• Consider carpooling or public transport for longer distances</li>
        </ul>
      </div>
    </div>
  );
};

export default FuelCostCalculator;
import React, { useState } from 'react';
import { Calculator, Fuel, TrendingUp, DollarSign } from 'lucide-react';
import EMICalculator from '../components/FinanceCalculators/EMICalculator';
import FuelCostCalculator from '../components/FinanceCalculators/FuelCostCalculator';

const FinanceTools = () => {
  const [activeTab, setActiveTab] = useState('emi');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Finance Tools</h1>
        <p className="text-gray-600">Calculate your EMI and fuel costs to make informed decisions</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-xl p-1 flex">
          <button
            onClick={() => setActiveTab('emi')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'emi'
                ? 'bg-white text-primary-600 shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Calculator size={20} />
            <span>EMI Calculator</span>
          </button>
          <button
            onClick={() => setActiveTab('fuel')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'fuel'
                ? 'bg-white text-primary-600 shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Fuel size={20} />
            <span>Fuel Cost Calculator</span>
          </button>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'emi' && <EMICalculator />}
        {activeTab === 'fuel' && <FuelCostCalculator />}
      </div>

      {/* Finance Tips */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Finance Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <DollarSign size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">EMI Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Higher down payment reduces EMI and total interest</li>
              <li>• Compare interest rates from different banks</li>
              <li>• Shorter loan tenure means higher EMI but less total interest</li>
              <li>• Check for processing fees and other hidden charges</li>
              <li>• Maintain good credit score for better interest rates</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Fuel Saving Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Electric vehicles have lower running costs</li>
              <li>• Regular maintenance improves fuel efficiency</li>
              <li>• Proper riding habits can save up to 20% fuel</li>
              <li>• Choose vehicles with better mileage ratings</li>
              <li>• Consider hybrid options for best of both worlds</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popular Loan Providers */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Loan Providers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'HDFC Bank', rate: '10.5%' },
            { name: 'ICICI Bank', rate: '11.0%' },
            { name: 'SBI', rate: '9.8%' },
            { name: 'Axis Bank', rate: '10.8%' },
            { name: 'Bajaj Finserv', rate: '12.0%' },
            { name: 'IDFC First', rate: '11.5%' },
            { name: 'Kotak Bank', rate: '10.9%' },
            { name: 'Yes Bank', rate: '11.2%' }
          ].map((provider, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800 mb-1">{provider.name}</h4>
              <p className="text-sm text-gray-600">Starting at</p>
              <p className="text-lg font-bold text-primary-600">{provider.rate}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">
          *Interest rates are indicative and may vary based on credit profile and bank policies
        </p>
      </div>
    </div>
  );
};

export default FinanceTools;
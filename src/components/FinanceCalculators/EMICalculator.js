import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const EMICalculator = ({ vehiclePrice }) => {
  const [formData, setFormData] = useState({
    vehiclePrice: vehiclePrice || 150000,
    downPayment: 30000,
    loanTenure: 36, // in months
    interestRate: 12.5 // annual percentage
  });

  const [results, setResults] = useState({
    emi: 0,
    totalAmount: 0,
    totalInterest: 0,
    loanAmount: 0
  });

  const calculateEMI = () => {
    const { vehiclePrice, downPayment, loanTenure, interestRate } = formData;
    
    const loanAmount = vehiclePrice - downPayment;
    const monthlyRate = interestRate / (12 * 100);
    
    if (loanAmount <= 0 || monthlyRate <= 0 || loanTenure <= 0) {
      setResults({ emi: 0, totalAmount: 0, totalInterest: 0, loanAmount: 0 });
      return;
    }

    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
                (Math.pow(1 + monthlyRate, loanTenure) - 1);
    
    const totalAmount = emi * loanTenure;
    const totalInterest = totalAmount - loanAmount;

    setResults({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      loanAmount: loanAmount
    });
  };

  useEffect(() => {
    calculateEMI();
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const downPaymentPercentage = ((formData.downPayment / formData.vehiclePrice) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary-100 p-2 rounded-lg">
          <Calculator size={24} className="text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">EMI Calculator</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicle Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
              <input
                type="number"
                value={formData.vehiclePrice}
                onChange={(e) => handleInputChange('vehiclePrice', e.target.value)}
                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="150000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment ({downPaymentPercentage}%)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
              <input
                type="number"
                value={formData.downPayment}
                onChange={(e) => handleInputChange('downPayment', e.target.value)}
                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="30000"
              />
            </div>
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max={formData.vehiclePrice * 0.5}
                value={formData.downPayment}
                onChange={(e) => handleInputChange('downPayment', e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Tenure ({formData.loanTenure} months)
            </label>
            <select
              value={formData.loanTenure}
              onChange={(e) => handleInputChange('loanTenure', e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value={12}>1 Year (12 months)</option>
              <option value={24}>2 Years (24 months)</option>
              <option value={36}>3 Years (36 months)</option>
              <option value={48}>4 Years (48 months)</option>
              <option value={60}>5 Years (60 months)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate ({formData.interestRate}% per annum)
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.interestRate}
              onChange={(e) => handleInputChange('interestRate', e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="12.5"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign size={24} />
              <h3 className="text-xl font-bold">Monthly EMI</h3>
            </div>
            <div className="text-3xl font-bold">{formatCurrency(results.emi)}</div>
            <p className="text-blue-100 mt-2">You'll pay this amount every month</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Loan Amount</div>
              <div className="text-xl font-bold text-gray-800">{formatCurrency(results.loanAmount)}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Total Interest</div>
              <div className="text-xl font-bold text-red-600">{formatCurrency(results.totalInterest)}</div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-sm text-gray-600">Total Amount Payable</div>
            <div className="text-2xl font-bold text-gray-800">{formatCurrency(results.totalAmount + formData.downPayment)}</div>
            <div className="text-sm text-gray-500 mt-1">
              Including down payment of {formatCurrency(formData.downPayment)}
            </div>
          </div>

          {/* Breakup Chart */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Payment Breakup</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Principal Amount</span>
                <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full" 
                  style={{ width: `${(results.loanAmount / (results.loanAmount + results.totalInterest)) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Interest Amount</span>
                <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full" 
                  style={{ width: `${(results.totalInterest / (results.loanAmount + results.totalInterest)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Important Notes:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Interest rates may vary based on your credit score and bank policies</li>
          <li>• Processing fees and other charges are not included in this calculation</li>
          <li>• This is an approximate calculation for reference only</li>
          <li>• Please consult with your bank for actual terms and conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default EMICalculator;
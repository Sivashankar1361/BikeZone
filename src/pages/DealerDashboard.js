import React from 'react';
import { BarChart, Users, Package, TrendingUp, Calendar, MessageSquare } from 'lucide-react';

const DealerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dealer Dashboard</h1>
        <p className="text-gray-600">Manage your inventory, leads, and sales performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-800">₹45,60,000</p>
              <p className="text-green-600 text-sm">+12% from last month</p>
            </div>
            <div className="bg-primary-100 p-3 rounded-lg">
              <TrendingUp size={24} className="text-primary-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New Leads</p>
              <p className="text-2xl font-bold text-gray-800">23</p>
              <p className="text-green-600 text-sm">+5% from last week</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Users size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Inventory</p>
              <p className="text-2xl font-bold text-gray-800">156</p>
              <p className="text-yellow-600 text-sm">5 low stock items</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Package size={24} className="text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Test Rides</p>
              <p className="text-2xl font-bold text-gray-800">18</p>
              <p className="text-blue-600 text-sm">Scheduled this week</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Leads</h2>
          <div className="space-y-4">
            {[
              { name: "Amit Kumar", vehicle: "Royal Enfield Classic 350", status: "Hot Lead", time: "2 hours ago" },
              { name: "Priya Sharma", vehicle: "Honda Activa 6G", status: "Interested", time: "5 hours ago" },
              { name: "Rajesh Patel", vehicle: "KTM Duke 390", status: "Follow Up", time: "1 day ago" },
            ].map((lead, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{lead.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    lead.status === 'Hot Lead' ? 'bg-red-100 text-red-800' :
                    lead.status === 'Interested' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {lead.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{lead.vehicle}</p>
                <p className="text-gray-500 text-xs">{lead.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Status */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Inventory Status</h2>
          <div className="space-y-4">
            {[
              { model: "Royal Enfield Classic 350", stock: 12, status: "Good Stock" },
              { model: "Honda Activa 6G", stock: 3, status: "Low Stock" },
              { model: "KTM Duke 390", stock: 8, status: "Good Stock" },
              { model: "TVS Jupiter 125", stock: 2, status: "Critical" },
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.model}</h4>
                    <p className="text-gray-600 text-sm">{item.stock} units available</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Good Stock' ? 'bg-green-100 text-green-800' :
                    item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Package size={20} className="text-primary-600" />
            <span className="font-semibold">Add Inventory</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Users size={20} className="text-primary-600" />
            <span className="font-semibold">Manage Leads</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <BarChart size={20} className="text-primary-600" />
            <span className="font-semibold">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;
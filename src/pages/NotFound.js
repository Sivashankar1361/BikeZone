import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <Link
            to="/bikes"
            className="inline-flex items-center space-x-2 border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            <Search size={20} />
            <span>Browse Vehicles</span>
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto">
            <Link to="/bikes" className="text-primary-600 hover:underline">Bikes</Link>
            <Link to="/scooters" className="text-primary-600 hover:underline">Scooters</Link>
            <Link to="/evs" className="text-primary-600 hover:underline">Electric Vehicles</Link>
            <Link to="/used-bikes" className="text-primary-600 hover:underline">Used Bikes</Link>
            <Link to="/compare" className="text-primary-600 hover:underline">Compare</Link>
            <Link to="/showrooms" className="text-primary-600 hover:underline">Showrooms</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
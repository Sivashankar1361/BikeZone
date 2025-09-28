import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/bikes?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">BZ</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">BikeZone</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bikes, scooters, brands..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Heart size={24} />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <ShoppingCart size={24} />
            </button>
            <Link
              to="/login"
              className="hidden md:flex items-center space-x-1 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <User size={20} />
              <span>Login</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-between border-t border-gray-200 py-2">
          <div className="flex items-center space-x-8">
            <Link
              to="/bikes"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Bikes
            </Link>
            <Link
              to="/scooters"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Scooters
            </Link>
            <Link
              to="/evs"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Electric Vehicles
            </Link>
            <Link
              to="/used-bikes"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Used Bikes
            </Link>
            <Link
              to="/compare"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Compare
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              to="/showrooms"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Showrooms
            </Link>
            <Link
              to="/upcoming"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Upcoming
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search bikes, scooters, brands..."
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <Link
                to="/bikes"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Bikes
              </Link>
              <Link
                to="/scooters"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Scooters
              </Link>
              <Link
                to="/evs"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Electric Vehicles
              </Link>
              <Link
                to="/used-bikes"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Used Bikes
              </Link>
              <Link
                to="/compare"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Compare
              </Link>
              <Link
                to="/showrooms"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Showrooms
              </Link>
              <Link
                to="/upcoming"
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Upcoming
              </Link>
              <Link
                to="/login"
                className="block py-2 text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login / Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
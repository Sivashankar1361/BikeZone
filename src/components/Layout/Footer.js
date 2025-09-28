import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <span className="font-bold text-lg">BZ</span>
              </div>
              <span className="text-xl font-bold">BikeZone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted marketplace for two-wheelers. Find the perfect bike, scooter, or electric vehicle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/bikes" className="text-gray-400 hover:text-white transition-colors">Bikes</Link></li>
              <li><Link to="/scooters" className="text-gray-400 hover:text-white transition-colors">Scooters</Link></li>
              <li><Link to="/evs" className="text-gray-400 hover:text-white transition-colors">Electric Vehicles</Link></li>
              <li><Link to="/used-bikes" className="text-gray-400 hover:text-white transition-colors">Used Bikes</Link></li>
              <li><Link to="/compare" className="text-gray-400 hover:text-white transition-colors">Compare</Link></li>
              <li><Link to="/upcoming" className="text-gray-400 hover:text-white transition-colors">Upcoming Launches</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/showrooms" className="text-gray-400 hover:text-white transition-colors">Find Showrooms</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book Test Ride</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fuel Cost Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-400">info@bikezone.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-1" />
                <span className="text-gray-400">
                  123 Auto Street,<br />
                  Tech City, TC 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BikeZone. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
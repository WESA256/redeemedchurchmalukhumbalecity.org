import React from 'react';
import { Church, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Church className="h-8 w-8 text-yellow-400" />
              <div className="text-xl font-bold">
                <span className="text-yellow-400">Redeemed</span> Church
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The Redeemed of the Lord Evangelistic Church - spreading God's love 
              and transforming lives in Malukhu, Mbale City.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('donations')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Donate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sunday Worship</li>
              <li>Bible Study</li>
              <li>Prayer Meetings</li>
              <li>Youth Ministry</li>
              <li>Children's Ministry</li>
              <li>Community Outreach</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Malukhu, Mbale City<br />
                  Eastern Region, Uganda
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">+256 774 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">info@redeemedchurchmbale.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 The Redeemed of the Lord Evangelistic Church. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
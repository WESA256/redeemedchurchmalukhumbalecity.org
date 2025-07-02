import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to <span className="text-yellow-400">The Redeemed</span> of the Lord
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Evangelistic Church Malukhu, Mbale City
              </p>
            </div>
            
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              Join our loving Christian community where faith meets fellowship. Experience God's 
              transforming power through worship, prayer, and biblical teaching in the heart of Mbale City.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold 
                         flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg 
                         font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Us <Calendar className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400">Service Times</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Sunday Worship</h4>
                    <p className="text-blue-100">9:00 AM - 12:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Wednesday Bible Study</h4>
                    <p className="text-blue-100">6:00 PM - 8:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Friday Prayer Meeting</h4>
                    <p className="text-blue-100">7:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
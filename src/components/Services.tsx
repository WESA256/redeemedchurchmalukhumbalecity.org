import React from 'react';
import { Church, BookOpen, Users2, Mic, Baby, Music } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Church,
      title: "Sunday Worship",
      time: "9:00 AM - 12:00 PM",
      description: "Join us for inspiring worship, powerful sermons, and uplifting music every Sunday morning."
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      time: "Wednesday 6:00 PM",
      description: "Dive deeper into God's Word with our weekly Bible study sessions for spiritual growth."
    },
    {
      icon: Users2,
      title: "Prayer Meeting",
      time: "Friday 7:00 PM",
      description: "Come together in prayer for our community, nation, and personal needs."
    },
    {
      icon: Baby,
      title: "Children's Ministry",
      time: "Sunday 9:00 AM",
      description: "Age-appropriate programs designed to teach children about God's love in fun ways."
    },
    {
      icon: Music,
      title: "Youth Ministry",
      time: "Saturday 4:00 PM",
      description: "Dynamic programs for teenagers to build faith, friendships, and leadership skills."
    },
    {
      icon: Mic,
      title: "Evangelism Outreach",
      time: "Various Times",
      description: "Community outreach programs to share the Gospel and serve our neighbors."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-700">Services</span> & Ministries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience God's presence through our various worship services and ministry programs 
            designed to strengthen faith and build community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-100 group-hover:bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-blue-700 font-semibold mb-4">{service.time}</p>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          {/* Service Images Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white/80">
                  <Church className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Sunday Worship</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white/80">
                  <BookOpen className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Bible Study</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white/80">
                  <Users2 className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Fellowship</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-4">New to Our Church?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family! Join us for any of our services 
            and experience the warmth of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Plan Your Visit
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Pastor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
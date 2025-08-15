import React from 'react';
import { Calendar, Clock, MapPin, Users, Camera } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Easter Celebration Service",
      date: "March 31, 2024",
      time: "9:00 AM - 1:00 PM", 
      location: "Main Sanctuary",
      description: "Join us for a special Easter service celebrating the resurrection of Jesus Christ with music, testimonies, and fellowship.",
      attendees: "All Welcome"
    },
    {
      title: "Youth Conference 2024",
      date: "April 15-17, 2024",
      time: "3 Days Event",
      location: "Church Grounds",
      description: "A powerful three-day conference for young people featuring guest speakers, workshops, and spiritual growth activities.",
      attendees: "Ages 13-30"
    },
    {
      title: "Community Outreach Program",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Malukhu Community",
      description: "Join our mission to serve the community through food distribution, medical checkups, and prayer ministry.",
      attendees: "Volunteers Needed"
    },
    {
      title: "Women's Fellowship Meeting",
      date: "April 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Fellowship Hall",
      description: "Monthly gathering for women to share, pray, and encourage one another in faith and life.",
      attendees: "All Women"
    },
    {
      title: "Men's Prayer Breakfast",
      date: "May 4, 2024",
      time: "7:00 AM - 9:00 AM",
      location: "Church Hall",
      description: "Monthly breakfast meeting for men featuring fellowship, prayer, and discussion on Christian manhood.",
      attendees: "All Men"
    },
    {
      title: "Church Anniversary Celebration",
      date: "May 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Sanctuary",
      description: "Celebrating God's faithfulness with special services, guest ministers, and community thanksgiving.",
      attendees: "Everyone Invited"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-blue-700">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with our church community through our exciting upcoming events, 
            conferences, and special services.
          </p>
        </div>

        {/* Event Photo Gallery */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <div className="text-center text-purple-700">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <p className="text-xs font-semibold">Easter 2023</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div className="text-center text-green-700">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <p className="text-xs font-semibold">Youth Conference</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center text-blue-700">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <p className="text-xs font-semibold">Community Outreach</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
              <div className="text-center text-yellow-700">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <p className="text-xs font-semibold">Anniversary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Event Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center text-blue-700">
                  <Calendar className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Event Photo</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-blue-100">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-4 w-4 text-blue-700" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-blue-700" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="h-4 w-4 text-blue-700" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
                
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Stay Updated?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, 
              special services, and important church announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
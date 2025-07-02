import React from 'react';
import { Heart, Users, Book, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We demonstrate God's love through acts of kindness and service to our community."
    },
    {
      icon: Users,
      title: "Fellowship",
      description: "Building strong relationships and supporting one another in faith and life."
    },
    {
      icon: Book,
      title: "Biblical Teaching",
      description: "Grounded in Scripture, we provide sound biblical education and discipleship."
    },
    {
      icon: Target,
      title: "Mission",
      description: "Spreading the Gospel and making disciples in Mbale City and beyond."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our <span className="text-blue-700">Church</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Redeemed of the Lord Evangelistic Church is a vibrant Christian community 
            dedicated to worship, discipleship, and service in Malukhu, Mbale City.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a heart for evangelism and community transformation, The Redeemed 
                of the Lord Evangelistic Church has been a beacon of hope in Malukhu, Mbale City. 
                Our journey began with a simple mission: to share God's love and redemptive power 
                with everyone we meet.
              </p>
              <p>
                We believe in the transformative power of Jesus Christ and are committed to 
                building a community where people can encounter God, grow in faith, and 
                discover their purpose. Through worship, fellowship, and service, we strive 
                to be the hands and feet of Jesus in our neighborhood and beyond.
              </p>
              <p>
                Our church family welcomes people from all walks of life, creating an 
                atmosphere where everyone can belong, believe, and become who God created them to be.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision & Mission</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Vision</h4>
                <p className="text-gray-600">
                  To be a thriving church community that transforms lives and impacts 
                  Mbale City through the Gospel of Jesus Christ.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Mission</h4>
                <p className="text-gray-600">
                  To make disciples of Jesus Christ through evangelism, worship, 
                  fellowship, and service, while demonstrating God's love to our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
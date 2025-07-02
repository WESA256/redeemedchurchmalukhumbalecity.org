import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmitMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      setSubmitMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage({ 
        type: 'success', 
        text: 'Thank you for your message! We will get back to you within 24 hours.' 
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-700">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, need prayer, 
            or want to visit our church, feel free to reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Malukhu, Mbale City<br />
                      Eastern Region, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+256 774 123 456</p>
                    <p className="text-gray-600">+256 704 987 654</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@redeemedchurchmbale.org</p>
                    <p className="text-gray-600">pastor@redeemedchurchmbale.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: After Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Find Us</h4>
              <p className="text-gray-600">
                Located in the heart of Malukhu, Mbale City. 
                Easy to find with ample parking available.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {/* Message Display */}
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <p className="text-sm">{submitMessage.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="visit">Planning to Visit</option>
                  <option value="ministry">Ministry Information</option>
                  <option value="pastor">Speak with Pastor</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-700 hover:bg-blue-800 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-blue-700" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Contact</h4>
            <p className="text-gray-600 text-sm">
              For urgent pastoral care or emergencies, call our 24/7 prayer line at +256 774 123 456
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-green-700" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h4>
            <p className="text-gray-600 text-sm">
              Subscribe to our weekly newsletter for updates on events, sermons, and church news
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-purple-700" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h4>
            <p className="text-gray-600 text-sm">
              We typically respond to all messages within 24 hours during business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
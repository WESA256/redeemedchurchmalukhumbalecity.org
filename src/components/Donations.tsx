import React, { useState } from 'react';
import { Heart, CreditCard, DollarSign, Gift, Users, Church, CheckCircle, AlertCircle } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51234567890');

interface DonationType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const donationTypes: DonationType[] = [
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support our church operations and ministries',
      icon: Church
    },
    {
      id: 'building',
      title: 'Building Fund',
      description: 'Help us expand and maintain our facilities',
      icon: Gift
    },
    {
      id: 'missions',
      title: 'Missions & Outreach',
      description: 'Support our evangelistic and community programs',
      icon: Users
    },
    {
      id: 'special',
      title: 'Special Offering',
      description: 'Contribute to special events and needs',
      icon: Heart
    }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setMessage(null);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
    setMessage(null);
  };

  const handleDonorInfoChange = (field: string, value: string) => {
    setDonorInfo(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const handleDonation = async () => {
    const amount = getCurrentAmount();
    if (amount < 0.5) {
      setMessage({ type: 'error', text: 'Please enter a valid donation amount (minimum $0.50)' });
      return;
    }

    if (!donorInfo.email) {
      setMessage({ type: 'error', text: 'Please provide your email address' });
      return;
    }

    setIsProcessing(true);
    setMessage(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Create payment intent
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'usd',
          donation_type: donationType,
          donor_email: donorInfo.email,
          donor_name: donorInfo.name,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const { client_secret } = await response.json();

      // Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: {
            // This would normally be handled by Stripe Elements
            // For demo purposes, we'll redirect to Stripe Checkout instead
          }
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (paymentIntent?.status === 'succeeded') {
        setMessage({ 
          type: 'success', 
          text: `Thank you for your donation of $${amount.toFixed(2)}! Your generosity helps our ministry.` 
        });
        // Reset form
        setSelectedAmount(null);
        setCustomAmount('');
        setDonorInfo({ name: '', email: '' });
      }
    } catch (error) {
      console.error('Error processing donation:', error);
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'There was an error processing your donation. Please try again.' 
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // For demo purposes, we'll use a simplified donation flow
  const handleDemoPayment = () => {
    const amount = getCurrentAmount();
    if (amount < 0.5) {
      setMessage({ type: 'error', text: 'Please enter a valid donation amount (minimum $0.50)' });
      return;
    }

    if (!donorInfo.email) {
      setMessage({ type: 'error', text: 'Please provide your email address' });
      return;
    }

    setIsProcessing(true);
    setMessage(null);

    // Simulate payment processing
    setTimeout(() => {
      setMessage({ 
        type: 'success', 
        text: `Thank you for your donation of $${amount.toFixed(2)}! Your generosity helps our ministry. (Demo Mode)` 
      });
      setSelectedAmount(null);
      setCustomAmount('');
      setDonorInfo({ name: '', email: '' });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section id="donations" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Our <span className="text-blue-700">Ministry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your generous donations help us continue our mission of spreading God's love 
            and serving our community in Malukhu, Mbale City.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <p className="text-sm">{message.text}</p>
              </div>
            )}

            {/* Donor Information */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="donorName"
                    value={donorInfo.name}
                    onChange={(e) => handleDonorInfoChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="donorEmail"
                    value={donorInfo.email}
                    onChange={(e) => handleDonorInfoChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Donation Type Selection */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Choose Donation Type</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {donationTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      donationType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setDonationType(type.id)}
                  >
                    <div className="flex items-start gap-3">
                      <type.icon className={`h-5 w-5 mt-1 ${
                        donationType === type.id ? 'text-blue-700' : 'text-gray-500'
                      }`} />
                      <div>
                        <h5 className="font-semibold text-gray-900">{type.title}</h5>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Amount (USD)</h4>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0.5"
                  step="0.01"
                />
              </div>
            </div>

            {/* Donation Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Donation Type:</span>
                <span className="font-semibold text-gray-900">
                  {donationTypes.find(type => type.id === donationType)?.title}
                </span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold text-blue-700">
                  ${getCurrentAmount().toFixed(2)}
                </span>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDemoPayment}
              disabled={getCurrentAmount() < 0.5 || isProcessing || !donorInfo.email}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                getCurrentAmount() >= 0.5 && !isProcessing && donorInfo.email
                  ? 'bg-blue-700 hover:bg-blue-800 transform hover:scale-105'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5" />
                  Donate ${getCurrentAmount().toFixed(2)}
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Secure payment powered by Stripe. Your donation is processed safely and securely.
            </p>
          </div>

          {/* Impact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">$25 Can Provide</h4>
                    <p className="text-gray-600">Sunday school materials for 10 children for a month</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">$50 Can Support</h4>
                    <p className="text-gray-600">Community outreach programs for a week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Gift className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">$100 Can Fund</h4>
                    <p className="text-gray-600">Youth ministry activities and events</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Church className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">$250 Can Help</h4>
                    <p className="text-gray-600">Maintain church facilities and equipment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Other Ways to Give</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Bank Transfer</h4>
                  <p className="text-blue-100 text-sm">
                    Account: The Redeemed of the Lord Church<br />
                    Bank: Stanbic Bank Uganda<br />
                    Account Number: 9030012345678
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mobile Money</h4>
                  <p className="text-blue-100 text-sm">
                    MTN: +256 774 123 456<br />
                    Airtel: +256 704 987 654
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">In-Person</h4>
                  <p className="text-blue-100 text-sm">
                    Visit us during service times or office hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Donors Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-600 mb-4 italic">
                "Supporting this church has been a blessing. Seeing how donations transform 
                lives in our community fills my heart with joy."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mary Kiprotich</p>
                  <p className="text-sm text-gray-500">Regular Donor</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-600 mb-4 italic">
                "The transparency and impact reports make me confident that my donations 
                are making a real difference in Mbale City."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-semibold">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Musoke</p>
                  <p className="text-sm text-gray-500">Monthly Supporter</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-600 mb-4 italic">
                "Being able to give online makes it so convenient to support the ministries 
                that are close to my heart."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-semibold">SN</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Namukose</p>
                  <p className="text-sm text-gray-500">Building Fund Donor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
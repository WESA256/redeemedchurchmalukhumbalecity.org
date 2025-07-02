# The Redeemed of the Lord Evangelistic Church Website

A beautiful, modern church website built with React, TypeScript, and Tailwind CSS. This website serves The Redeemed of the Lord Evangelistic Church in Malukhu, Mbale City, Uganda.

## Features

- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Online Donations**: Integrated Stripe payment system for secure online donations
- **Contact Forms**: Interactive contact forms with validation and feedback
- **Event Management**: Display upcoming church events and activities
- **Service Information**: Complete information about church services and ministries
- **Social Media Integration**: Links to church social media accounts

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Payments**: Stripe
- **Backend**: Supabase (for donations and data storage)
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payments)
- Supabase account (optional, for data storage)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd church-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your environment variables to `.env`:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

5. Start the development server:
```bash
npm run dev
```

## Configuration

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable key from the Stripe dashboard
3. Add the key to your `.env` file
4. For production, replace test keys with live keys

### Supabase Setup (Optional)

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Add them to your `.env` file
4. The database schema is already set up in the migrations folder

## Deployment

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify
3. Set up environment variables in Netlify dashboard
4. Configure redirects for SPA routing

### Environment Variables for Production

Make sure to set these environment variables in your deployment platform:

- `VITE_STRIPE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL` (if using Supabase)
- `VITE_SUPABASE_ANON_KEY` (if using Supabase)

## Customization

### Church Information

Update church-specific information in:
- `src/components/Hero.tsx` - Church name and service times
- `src/components/About.tsx` - Church story and mission
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer details
- `index.html` - Page title and meta description

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in individual component files
- Global styles in `src/index.css`

### Content

Update content in the respective component files:
- Hero section: `src/components/Hero.tsx`
- About section: `src/components/About.tsx`
- Services: `src/components/Services.tsx`
- Events: `src/components/Events.tsx`
- Donations: `src/components/Donations.tsx`
- Contact: `src/components/Contact.tsx`

## Features Overview

### Donation System
- Multiple donation types (General Fund, Building Fund, Missions, Special Offering)
- Predefined and custom amounts
- Secure Stripe integration
- Donor information collection
- Impact information display

### Contact System
- Contact form with validation
- Multiple contact methods
- Office hours and location information
- Social media links
- Emergency contact information

### Event Management
- Upcoming events display
- Event details with date, time, and location
- Newsletter subscription
- Event categories and filtering

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions about this website, please contact:
- Email: info@redeemedchurchmbale.org
- Phone: +256 774 123 456

## Acknowledgments

- Built with love for The Redeemed of the Lord Evangelistic Church
- Icons by Lucide React
- Payments powered by Stripe
- Hosted on Netlify
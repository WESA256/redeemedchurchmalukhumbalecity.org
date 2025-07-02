import { corsHeaders } from '../_shared/cors.ts';

const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY');

interface PaymentRequest {
  amount: number;
  currency?: string;
  donation_type: string;
  donor_email?: string;
  donor_name?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (!STRIPE_SECRET_KEY) {
      throw new Error('Stripe secret key not configured');
    }

    const { amount, currency = 'usd', donation_type, donor_email, donor_name }: PaymentRequest = await req.json();

    if (!amount || amount < 50) { // Minimum $0.50
      throw new Error('Invalid amount. Minimum donation is $0.50');
    }

    // Create payment intent with Stripe API
    const stripeResponse = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: amount.toString(),
        currency: currency,
        'automatic_payment_methods[enabled]': 'true',
        'metadata[donation_type]': donation_type,
        'metadata[church]': 'The Redeemed of the Lord Evangelistic Church',
        ...(donor_email && { 'metadata[donor_email]': donor_email }),
        ...(donor_name && { 'metadata[donor_name]': donor_name }),
      }),
    });

    if (!stripeResponse.ok) {
      const error = await stripeResponse.text();
      throw new Error(`Stripe API error: ${error}`);
    }

    const paymentIntent = await stripeResponse.json();

    return new Response(
      JSON.stringify({
        client_secret: paymentIntent.client_secret,
        payment_intent_id: paymentIntent.id,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to create payment intent' 
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 400,
      }
    );
  }
});
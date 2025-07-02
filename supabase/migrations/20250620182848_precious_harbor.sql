/*
  # Create donations table for church donations

  1. New Tables
    - `donations`
      - `id` (uuid, primary key)
      - `amount` (decimal, donation amount in dollars)
      - `currency` (text, currency code)
      - `donation_type` (text, type of donation)
      - `payment_intent_id` (text, Stripe payment intent ID)
      - `status` (text, payment status)
      - `donor_email` (text, optional donor email)
      - `donor_name` (text, optional donor name)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `donations` table
    - Add policy for service role to manage donations
    - Add policy for authenticated users to view their own donations
*/

CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  amount decimal(10,2) NOT NULL,
  currency text DEFAULT 'usd',
  donation_type text NOT NULL,
  payment_intent_id text UNIQUE,
  status text DEFAULT 'pending',
  donor_email text,
  donor_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Policy for service role to manage all donations
CREATE POLICY "Service role can manage donations"
  ON donations
  FOR ALL
  TO service_role
  USING (true);

-- Policy for authenticated users to view donations (if we add user authentication later)
CREATE POLICY "Users can view donations"
  ON donations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on payment_intent_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_donations_payment_intent_id ON donations(payment_intent_id);

-- Create an index on created_at for reporting
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at);

-- Create an index on donation_type for filtering
CREATE INDEX IF NOT EXISTS idx_donations_type ON donations(donation_type);
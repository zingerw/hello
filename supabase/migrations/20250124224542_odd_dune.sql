/*
  # Fix Profile Table Policies

  1. Security Changes
    - Add INSERT policy for authenticated users
    - Update SELECT policy to be more specific
    - Add UPDATE policy for users to modify their own profiles
  
  Note: These policies ensure users can only:
    - Create their own profile
    - Read any profile
    - Update their own profile
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can view profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies with proper security rules
CREATE POLICY "Users can create their own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view all profiles"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
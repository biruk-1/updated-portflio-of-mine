-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech JSONB NOT NULL DEFAULT '[]',
  github TEXT,
  live TEXT,
  type TEXT NOT NULL CHECK (type IN ('mobile', 'web')),
  gradient TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- RLS policies for projects
CREATE POLICY "Anyone can view projects"
ON public.projects FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Admins can insert projects"
ON public.projects FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update projects"
ON public.projects FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete projects"
ON public.projects FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial projects from CV
INSERT INTO public.projects (title, description, tech, github, live, type, gradient, featured) VALUES
('CosmicAI - Astrology Platform', 'AI-powered astrology app with custom-trained NLP chatbot (85% accuracy). Integrated Expo In-App Purchases generating $5k+ revenue with RevenueCat subscriptions.', '["React Native", "Supabase", "AI/NLP", "RevenueCat"]', 'https://github.com/birukchali/cosmicai', '#', 'mobile', 'from-purple-500 via-pink-500 to-indigo-500', true),
('CoachApp - Fitness Marketplace', 'Real-time fitness coaching platform with WebSocket chat and Firebase integration. Reduced APK size by 45% through asset optimization.', '["React Native", "Firebase", "WebSockets", "DigitalOcean"]', 'https://github.com/birukchali/coachapp', '#', 'mobile', 'from-blue-500 via-cyan-500 to-teal-500', true),
('Hotel Management System', 'Offline-capable PWA used by 25+ hotel chains. Automated inventory management saving 30+ staff hours weekly with React and Express.', '["React", "Express", "SQLite", "PWA"]', 'https://github.com/birukchali/hotel-mgmt', '#', 'web', 'from-orange-500 via-amber-500 to-yellow-500', true),
('Betting Platform', 'Real-time betting system handling 500+ concurrent users. Implemented JWT authentication and WebSocket communication with 40% faster API response.', '["React", "Node.js", "MongoDB", "WebSockets"]', 'https://github.com/birukchali/betting-platform', '#', 'web', 'from-green-500 via-emerald-500 to-cyan-500', true),
('Ticket App for Events', 'QR-code ticket validation system with React Native and Firebase. Successfully processed 5k+ ticket sales for major events.', '["React Native", "Firebase", "QR Codes", "Expo"]', 'https://github.com/birukchali/ticket-app', '#', 'mobile', 'from-pink-500 via-rose-500 to-red-500', true),
('E-Commerce REST API', 'Django-based REST API for e-commerce platform. Automated report generation saving 10+ weekly work hours during Python internship at Octanet.', '["Python", "Django", "REST API", "PostgreSQL"]', 'https://github.com/birukchali/ecommerce-api', '#', 'web', 'from-indigo-500 via-purple-500 to-pink-500', true);
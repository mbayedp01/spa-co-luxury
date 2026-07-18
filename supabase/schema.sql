-- =====================================================================
-- SPA & CO LUXURY — Schéma de base de données Supabase (PostgreSQL)
-- Exécuter dans Supabase > SQL Editor. Architecture prête pour évoluer.
-- =====================================================================

-- Profils clients (liés à auth.users)
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  phone text,
  avatar_url text,
  loyalty_points int default 0,
  loyalty_level text default 'Silver',
  created_at timestamptz default now()
);

-- Catégories de prestations
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null
);

-- Employé(e)s / thérapeutes
create table if not exists employees (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  role text,
  photo_url text,
  active boolean default true
);

-- Prestations / services
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id),
  slug text unique not null,
  name text not null,
  description text,
  duration_min int,
  price int,
  image_url text,
  active boolean default true,
  created_at timestamptz default now()
);

-- Réservations
create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id),
  employee_id uuid references employees(id),
  status text default 'pending', -- pending | confirmed | cancelled | done
  scheduled_at timestamptz not null,
  customer_name text,
  customer_email text,
  customer_phone text,
  notes text,
  total int,
  created_at timestamptz default now()
);

-- Lignes de réservation (une résa peut contenir plusieurs prestations)
create table if not exists reservation_items (
  id uuid primary key default gen_random_uuid(),
  reservation_id uuid references reservations(id) on delete cascade,
  service_id uuid references services(id),
  price int
);

-- Galerie
create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  category text,
  created_at timestamptz default now()
);

-- Blog
create table if not exists blog (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text,
  excerpt text,
  content text,
  image_url text,
  published boolean default false,
  published_at timestamptz default now()
);

-- Avis clients
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id),
  service_id uuid references services(id),
  rating int check (rating between 1 and 5),
  comment text,
  approved boolean default false,
  created_at timestamptz default now()
);

-- Cartes cadeaux
create table if not exists gift_cards (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  amount int not null,
  balance int not null,
  buyer_email text,
  recipient_email text,
  active boolean default true,
  created_at timestamptz default now()
);

-- Points de fidélité (historique)
create table if not exists loyalty_points (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id),
  points int not null,
  reason text,
  created_at timestamptz default now()
);

-- Newsletter
create table if not exists newsletter (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

-- Promotions
create table if not exists promotions (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  description text,
  discount_percent int,
  valid_until date,
  active boolean default true
);

-- Paiements
create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  reservation_id uuid references reservations(id),
  provider text, -- stripe | wave | orange_money | mtn | moov
  amount int,
  status text default 'pending',
  created_at timestamptz default now()
);

-- Paramètres du site
create table if not exists settings (
  key text primary key,
  value jsonb
);

-- =====================================================================
-- Row Level Security (exemples de base — à affiner selon les besoins)
-- =====================================================================
alter table profiles enable row level security;
alter table reservations enable row level security;

create policy "Les utilisateurs voient leur profil"
  on profiles for select using (auth.uid() = id);

create policy "Les utilisateurs modifient leur profil"
  on profiles for update using (auth.uid() = id);

create policy "Les utilisateurs voient leurs réservations"
  on reservations for select using (auth.uid() = profile_id);

create policy "Les utilisateurs créent leurs réservations"
  on reservations for insert with check (auth.uid() = profile_id);

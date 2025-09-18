-- Core tables
create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid unique not null,
  full_name text,
  phone text,
  role text check (role in ('client','staff','attorney','admin')) default 'client',
  stripe_customer_id text,
  created_at timestamptz default now()
);

create table if not exists cases (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null, -- creator/owner or primary client
  code text not null,
  title text not null,
  type text not null,
  status text not null default 'Open',
  progress int not null default 0,
  created_at timestamptz default now()
);

create table if not exists case_members (
  case_id uuid references cases(id) on delete cascade,
  user_id uuid not null,
  role text check (role in ('client','staff','attorney','admin','viewer')) not null default 'client',
  can_comment boolean default true,
  can_upload boolean default true,
  can_edit_case boolean default false,
  created_at timestamptz default now(),
  primary key (case_id, user_id)
);

create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  case_id uuid references cases(id) on delete set null,
  path text not null,
  title text,
  status text default 'Uploaded', -- Uploaded | Sent for Signature | Signed
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid,
  case_id uuid references cases(id) on delete set null,
  body text not null,
  created_at timestamptz default now()
);

create table if not exists invoices (
  id text primary key,
  user_id uuid,
  case_id uuid references cases(id) on delete set null,
  invoice_number text,
  amount_cents int,
  status text,
  description text,
  created_at timestamptz default now()
);

create table if not exists tasks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  case_id uuid references cases(id) on delete set null,
  title text not null,
  priority text check (priority in ('Low','Medium','High')) default 'Medium',
  due_at timestamptz,
  completed boolean default false,
  created_at timestamptz default now()
);

-- Dashboard helper RPC (starter implementation)
create or replace function client_dashboard_stats()
returns json language plpgsql as $$
declare result json; begin
  select json_build_object(
    'active_cases', 0,
    'pending_documents', 0,
    'unread_messages', 0,
    'upcoming_deadlines', 0
  ) into result;
  return result;
end; $$;

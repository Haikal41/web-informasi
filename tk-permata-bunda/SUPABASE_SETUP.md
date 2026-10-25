# Supabase Setup Guide untuk TK Permata Bunda Jombang

## 1. Buat Project Supabase
1. Kunjungi [supabase.com](https://supabase.com) dan buat akun
2. Buat project baru dengan nama `tk-permata-bunda`
3. Tunggu project selesai di-setup

## 2. Dapatkan Credentials
Di Project Settings > API:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (simpan dengan aman)

## 3. Buat Database Schema
Jalankan SQL ini di SQL Editor:

```sql
-- Tabel guru
CREATE TABLE teachers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  photo_url TEXT,
  position VARCHAR,
  qualification VARCHAR,
  "order" INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel kegiatan
CREATE TABLE activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  thumbnail TEXT,
  category VARCHAR,
  event_date DATE,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pengumuman
CREATE TABLE announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel galeri
CREATE TABLE galleries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR,
  image_url TEXT NOT NULL,
  category VARCHAR,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pendaftar PPDB
CREATE TABLE ppdb_applicants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name VARCHAR NOT NULL,
  birth_place VARCHAR,
  birth_date DATE,
  parent_name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  address TEXT,
  program VARCHAR,
  status VARCHAR DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'accepted', 'rejected')),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT
);

-- Tabel pesan kontak
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  phone VARCHAR,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pengaturan
CREATE TABLE settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key VARCHAR UNIQUE NOT NULL,
  value JSONB
);
```

## 4. Storage Bucket
Buat bucket `images` di Storage dengan public access.

## 5. Environment Variables
Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_PASSWORD=your_secure_password
```

## 6. Setup Admin
Untuk awal, panel admin bisa menggunakan password sederhana via env atau setup Better Auth.
Gunakan 1 akun admin sesuai kebutuhan.

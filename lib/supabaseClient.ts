'use client';
import { createClient } from '@supabase/supabase-js';

export function supabaseBrowser() {
  // For GitHub Pages static build, provide fallback values
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
  
  return createClient(
    supabaseUrl,
    supabaseAnonKey,
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
  );
}

// Server-side service client (use only in server code!)
export function supabaseService() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE || 'placeholder-service-key';
  
  return createClient(
    supabaseUrl,
    serviceKey,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}

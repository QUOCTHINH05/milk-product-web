import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    'Supabase is not configured. Environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are missing. ' +
    'Products will be stored locally only. To enable cloud sync:\n' +
    '1. Create a Supabase project at https://supabase.com\n' +
    '2. Set environment variables in your deployment platform or .env.local for local development'
  );
}

export const getSupabaseClient = () => supabase;


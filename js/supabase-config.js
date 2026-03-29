// Supabase Configuration Template
// Replace with your real Supabase URL and Key
const SUPABASE_URL = 'https://ukujpotpbdxvlcvjhssa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdWpwb3RwYmR4dmxjdmpoc3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3Njc1NzgsImV4cCI6MjA5MDM0MzU3OH0.9uWUgWg63FVTLiYh-AA7YqXZnLQWRTlf1fDgmuTtxnI';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = supabaseClient;

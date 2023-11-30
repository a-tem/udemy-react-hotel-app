import { createClient } from "@supabase/supabase-js";

// NOTE: Setting up supabase client by providing public API key.
const supabaseUrl = "https://iplxzviqenlpfathvhbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbHh6dmlxZW5scGZhdGh2aGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNjc5NDMsImV4cCI6MjAxNjk0Mzk0M30.H4BHT5BCLf4FRXP_2-OH7eri6lj9jdfGZoeuJHE9C-Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

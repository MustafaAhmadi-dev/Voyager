import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hviiisgnpcujtrwzobiz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2aWlpc2ducGN1anRyd3pvYml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2Nzk3MTUsImV4cCI6MjAyODI1NTcxNX0.aipP9cBwW0wvpKesqA6DIPyihN6RxCIGxXTFc9400-o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

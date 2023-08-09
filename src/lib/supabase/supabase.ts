import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_ANON_KEY || ""
);

export const supabaseInstance = supabase;
export const authInstance = supabase.auth;

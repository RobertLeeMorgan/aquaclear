import { createClient } from "@supabase/supabase-js";
import { DatabaseError } from "./utils/errors.js";

// import dotenv from "dotenv"
// dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new DatabaseError("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

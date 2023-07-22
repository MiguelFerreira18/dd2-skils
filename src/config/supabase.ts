import { createClient } from "@supabase/supabase-js";

const supabaseUrl:string = import.meta.env.VITE_REACT_APP_PROJECT_URL;
const supabaseKey:string = import.meta.env.VITE_REACT_APP_API_KEY_DB;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase

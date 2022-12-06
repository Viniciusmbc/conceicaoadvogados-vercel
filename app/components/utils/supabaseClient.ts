import { createClient } from '@supabase/supabase-js'

export async function loader() {
  return console.log(process.env.SUPABASE_KEY);
}

const supabaseUrl = 'https://iwthwcncuzjcyhgczulu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
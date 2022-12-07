import { LoaderFunction } from '@remix-run/node'
import { createClient } from '@supabase/supabase-js'

export async function loader() {
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseUrl = 'https://iwthwcncuzjcyhgczulu.supabase.co'
const supabase = createClient(supabaseUrl, supabaseKey)
  return supabase
}

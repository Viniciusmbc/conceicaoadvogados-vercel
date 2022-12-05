import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iwthwcncuzjcyhgczulu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dGh3Y25jdXpqY3loZ2N6dWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxODg3MzksImV4cCI6MTk4MTc2NDczOX0.Hu9lgeiKhKLD8-Xl7Z21fB6gnIIzMHlMuKdRJ4Da7Y8"
export const supabase = createClient(supabaseUrl, supabaseKey)